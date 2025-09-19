import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with the theme that should already be set by the script
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') as Theme || 'light';
    }
    return 'light';
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    // Only update if different from what's already set
    if (initialTheme !== theme) {
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
    
    // Short delay to ensure CSS has loaded
    setTimeout(() => {
      setMounted(true);
    }, 150);
  }, [theme]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      
      // Update CSS custom properties instantly
      const root = document.documentElement;
      if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--text-color', '#e5e7eb');
      } else {
        root.style.setProperty('--bg-color', '#faf9f6');
        root.style.setProperty('--text-color', '#2a2a2a');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Show content immediately with loading class for first 150ms
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={!mounted ? 'theme-loading' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
