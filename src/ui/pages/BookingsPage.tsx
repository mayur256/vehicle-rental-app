import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { Container, Text } from '../atoms';

export function BookingsPage() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Container padding={24} style={{ flex: 1, justifyContent: 'center' }}>
        <Text variant="display" weight="bold" style={{ textAlign: 'center', marginBottom: 8 }}>
          My Bookings
        </Text>
        <Text variant="body" color="mutedText" style={{ textAlign: 'center' }}>
          Your rental history
        </Text>
      </Container>
    </SafeAreaView>
  );
}