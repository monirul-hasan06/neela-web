import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ExternalLink, Music } from 'lucide-react';
import { personalInfo } from '../data/content';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(false);
        })
        .catch(() => {
          setAudioError(true);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 max-w-xl mx-auto relative overflow-hidden border border-purple-500/20 shadow-xl">
      <audio 
        ref={audioRef} 
        src={personalInfo.localAudioPath} 
        loop 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onError={() => setAudioError(true)}
        onEnded={() => setIsPlaying(false)} 
      />

      <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className={`w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-900 to-purple-950 text-white border border-purple-500/30 flex items-center justify-center relative shadow-lg ${isPlaying ? 'animate-pulse' : ''}`}>
          <Music className={`w-8 h-8 text-purple-300 ${isPlaying ? 'animate-bounce' : ''}`} />
          <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
        </div>

        <div className="flex-1 text-center sm:text-left w-full">
          <div className="inline-block px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-300 text-xs mb-2 font-medium">
            Featured Melody
          </div>
          <h4 className="text-xl font-serif font-semibold">
            {personalInfo.favoriteSongTitle}
          </h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {personalInfo.favoriteSongArtist}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-lg shadow-purple-900/40 transition-all hover:scale-105 shrink-0"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center border border-slate-300 dark:border-slate-700 transition-all shrink-0"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="w-full mt-6">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max={duration || 0} 
          value={currentTime} 
          onChange={handleSeek}
          className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg"
          title="Song Progress"
        />
      </div>

      <div className="w-full mt-4 flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/60">
        <span className="text-slate-500 dark:text-slate-400 text-xs flex items-center gap-1">
          <Volume2 className="w-3.5 h-3.5" /> Volume
        </span>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05" 
          defaultValue="0.5"
          onChange={handleVolumeChange}
          className="flex-1 accent-purple-500 cursor-pointer h-1 bg-slate-200 dark:bg-slate-700 rounded-lg"
          title="Volume Slider"
        />
      </div>

      {audioError && (
        <div className="mt-4 p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs text-center">
          Note: Place your <code>neela.mp3</code> file in the <code>public/audio/</code> folder.
        </div>
      )}

      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Prefer official streaming?</span>
        <a 
          href={personalInfo.officialMusicUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-purple-600 dark:text-purple-300 hover:underline font-medium"
        >
          <span>Listen on official platform</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};