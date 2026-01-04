// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ReactLenis } from 'lenis/react'; // Import Lenis
import { ThemeProvider } from './components/theme/theme-provider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        {/* Wrap App with ReactLenis for global smooth scroll */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <App />
        </ReactLenis>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
