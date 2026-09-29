import { ThingToSayItem, SocialLink } from '../types';

export const personalInfo = {
  name: "Sumaiya Orpa",
  university: "Dhaka Central University",
  favoriteSongTitle: "Neela",
  favoriteSongArtist: "Miles",
  officialMusicUrl: "https://www.youtube.com/watch?v=fzfbaTW6S7A",
  localAudioPath: "/audio/neela.mp3"
};

export const letterContent = {
  salutation: "Hey Orpaaa,",
  paragraphs: [
    "I could have just sent you a message.",
    "But that felt a little too ordinary.",
    "So I decided to spend some time making this instead.",
    "There isn't some huge reason behind it.",
    "I just wanted to create something that might make you smile for a few minutes.",
    "And if it did… then it was worth making."
  ],
  signoff: "From someone who thought you deserved a little something different."
};

export const thingsToSayData: ThingToSayItem[] = [
  {
    id: "1",
    number: "01",
    quote: "Not everything has to have a reason."
  },
  {
    id: "2",
    number: "02",
    quote: "Sometimes creating something for someone is reason enough."
  },
  {
    id: "3",
    number: "03",
    quote: "Some people leave an impression without even trying."
  },
  {
    id: "4",
    number: "04",
    quote: "And some deserve a little corner of the internet."
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/sumaiya.orpa.9234",
    iconName: "facebook"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/sumaiya.orpa.9234/",
    iconName: "instagram"
  }
];