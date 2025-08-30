import React from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { ThemeProvider } from '@/src/theme';
import { RootNavigator } from '@/src/navigation/RootNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}