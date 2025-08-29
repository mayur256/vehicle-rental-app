import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { Container, Text, Button } from '../atoms';
import { mockVehicles } from '../../types/models';
import type { HomeTabsScreenProps } from '../../navigation/types';

type Props = HomeTabsScreenProps<'Home'>;

export function HomePage({ navigation }: Props) {
  const theme = useTheme();

  const handleViewDetails = (vehicleId: string) => {
    // Navigate to VehicleDetails
    (navigation as any).navigate('VehicleDetails', { vehicleId });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <ScrollView>
        <Container padding={24}>
          <Text variant="display" weight="bold" style={{ textAlign: 'center', marginBottom: 8 }}>
            Find Your Ride
          </Text>
          <Text variant="body" color="mutedText" style={{ textAlign: 'center', marginBottom: 32 }}>
            Premium vehicles for rent
          </Text>
          
          {mockVehicles.map((vehicle) => (
            <Container
              key={vehicle.id}
              backgroundColor="surface"
              radius="md"
              padding={16}
              shadow
              style={{ marginBottom: 16 }}
            >
              <Text variant="title" weight="semibold" style={{ marginBottom: 4 }}>
                {vehicle.name}
              </Text>
              <Text variant="body" color="mutedText" style={{ marginBottom: 8 }}>
                {vehicle.type} • {vehicle.seats} seats
              </Text>
              <Text variant="heading" weight="bold" color="primary" style={{ marginBottom: 12 }}>
                ${vehicle.pricePerDay}/day
              </Text>
              <Button
                title="View Details"
                size="small"
                onPress={() => handleViewDetails(vehicle.id)}
              />
            </Container>
          ))}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}