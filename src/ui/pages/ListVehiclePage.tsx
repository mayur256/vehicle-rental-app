import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { Container, Text } from '../atoms';
import type { HomeTabsScreenProps } from '../../navigation/types';

type Props = HomeTabsScreenProps<'ListVehicle'>;

export function ListVehiclePage() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Container padding={24} style={{ flex: 1, justifyContent: 'center' }}>
        <Text variant="display" weight="bold" style={{ textAlign: 'center', marginBottom: 8 }}>
          List Vehicle
        </Text>
        <Text variant="body" color="mutedText" style={{ textAlign: 'center' }}>
          Rent out your vehicle
        </Text>
      </Container>
    </SafeAreaView>
  );
}