import React, { createContext, useContext } from 'react';
import { colors, spacing, radii, fontSizes, fontWeights, shadows } from './tokens';

export const theme = {
  colors,
  spacing,
  radii,
  fontSizes,
  fontWeights,
  shadows,
};

export type Theme = typeof theme;

const ThemeContext = createContext<Theme>(theme);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export * from './tokens';