import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { Container, Text, Button } from '../atoms';
import { mockVehicles } from '../../types/models';
import type { RootStackScreenProps } from '../../navigation/types';

type Props = RootStackScreenProps<'VehicleDetails'>;

export function VehicleDetailsPage({ route, navigation }: Props) {
  const theme = useTheme();
  const { vehicleId } = route.params;
  
  const vehicle = mockVehicles.find(v => v.id === vehicleId);

  if (!vehicle) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
        <Container padding={24} style={{ flex: 1, justifyContent: 'center' }}>
          <Text variant="title" weight="semibold" style={{ textAlign: 'center' }}>
            Vehicle not found
          </Text>
        </Container>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Container padding={24}>
        <Text variant="display" weight="bold" style={{ textAlign: 'center', marginBottom: 8 }}>
          {vehicle.name}
        </Text>
        <Text variant="body" color="mutedText" style={{ textAlign: 'center', marginBottom: 32 }}>
          {vehicle.year} {vehicle.make} {vehicle.model}
        </Text>
        
        <Container
          backgroundColor="surface"
          radius="md"
          padding={16}
          shadow
          style={{ marginBottom: 24 }}
        >
          <Text variant="title" weight="semibold" style={{ marginBottom: 16 }}>
            Details
          </Text>
          <Text variant="body" style={{ marginBottom: 4 }}>Type: {vehicle.type}</Text>
          <Text variant="body" style={{ marginBottom: 4 }}>Seats: {vehicle.seats}</Text>
          <Text variant="body" style={{ marginBottom: 4 }}>Doors: {vehicle.doors}</Text>
          <Text variant="body" style={{ marginBottom: 4 }}>Transmission: {vehicle.transmission}</Text>
          <Text variant="body">Fuel: {vehicle.fuelType}</Text>
        </Container>
        
        <Text variant="heading" weight="bold" color="primary" style={{ textAlign: 'center', marginBottom: 32 }}>
          ${vehicle.pricePerDay}/day
        </Text>
        
        <Button
          title="Book Now"
          onPress={() => navigation.navigate('HomeTabs', { screen: 'Bookings' })}
          style={{ marginBottom: 16 }}
        />
        
        <Button
          title="Back"
          variant="outline"
          onPress={() => navigation.goBack()}
        />
      </Container>
    </SafeAreaView>
  );
}