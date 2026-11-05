'use client';

import React from 'react';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from '../src/components/theme/theme-provider';
import { Toaster } from 'react-hot-toast';
import { MotionConfig, useReducedMotion } from 'framer-motion';

export function Providers({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <MotionConfig reducedMotion="user">
      {/* anchors: smooth-scroll in-page #links; no smooth wheel for reduced-motion users */}
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: !reduceMotion, anchors: true }}>
        {children}
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: 'var(--color-paper-white, #ffffff)',
              color: 'var(--color-obsidian, #0d0d0d)',
              border: '1px solid var(--color-graphite-hairline, #e3e3e3)',
              borderRadius: '2px',
              fontSize: '13px',
              fontFamily: 'var(--font-ppneuemontrealmono), JetBrains Mono, monospace',
              boxShadow: '0 2px 8px rgba(13, 13, 13, 0.06)',
            },
          }}
        />
      </ReactLenis>
      </MotionConfig>
    </ThemeProvider>
  );
}
