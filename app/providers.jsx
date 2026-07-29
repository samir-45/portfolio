'use client';

import React from 'react';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from '../src/components/theme/theme-provider';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        {children}
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#f8fafc',
              border: '1px solid #334155',
              borderRadius: '10px',
              fontSize: '14px',
            },
          }}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
