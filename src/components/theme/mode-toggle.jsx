'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '../../lib/utils';

export function ModeToggle({ className }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-graphite-hairline bg-paper-white',
          className
        )}
      />
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === 'dark';

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-[2px] border border-graphite-hairline bg-paper-white text-smoke',
        'hover:text-obsidian hover:border-obsidian transition-colors cursor-pointer select-none',
        className
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-obsidian transition-transform duration-200" />
      ) : (
        <Moon className="h-4 w-4 text-obsidian transition-transform duration-200" />
      )}
    </button>
  );
}
