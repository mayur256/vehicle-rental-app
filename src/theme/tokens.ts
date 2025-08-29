import { Platform } from 'react-native';

export const colors = {
  bg: '#F2FBF6',
  surface: '#FFFFFF',
  inputBg: '#E9F7EF',
  primary: '#00F27C',
  primaryTextOn: '#062B22',
  mutedText: '#5A7F73',
  link: '#1CA67A',
  divider: '#E2EEE8',
  chipBg: '#E9F7EF',
  chipText: '#1A6E56',
} as const;

export const spacing = {
  2: 2,
  4: 4,
  6: 6,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
} as const;

export const radii = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
} as const;

export const fontSizes = {
  caption: 12,
  body: 14,
  title: 16,
  heading: 20,
  display: 24,
} as const;

export const fontWeights = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const shadows = {
  lightCard: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.06,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 6,
      },
    },
    android: {
      elevation: 3,
    },
  }),
} as const;