import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import Tailwind's CSS
import MainPage from './pages/MainPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);