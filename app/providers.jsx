'use client';

import React from 'react';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from '../src/components/theme/theme-provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
        <ToastContainer position="top-right" theme="dark" />
      </ReactLenis>
    </ThemeProvider>
  );
}
