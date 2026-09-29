  import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App';
    import './index.css';

  const savedTheme = window.localStorage.getItem('theme');
  document.documentElement.classList.toggle('dark', savedTheme !== 'light');

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );