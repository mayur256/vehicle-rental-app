import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ size = 'medium' }: LogoProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { iconSize: 32, textSize: 18 };
      case 'large':
        return { iconSize: 64, textSize: 32 };
      default:
        return { iconSize: 48, textSize: 24 };
    }
  };

  const { iconSize, textSize } = getSizeStyles();

  return (
    <View style={styles.container}>
      <View style={[
        styles.iconContainer,
        {
          width: iconSize,
          height: iconSize,
          backgroundColor: colors.tint,
        }
      ]}>
        <Text style={[styles.icon, { fontSize: iconSize * 0.6 }]}>🚗</Text>
      </View>
      <Text style={[
        styles.text,
        {
          fontSize: textSize,
          color: colors.text,
        }
      ]}>
        VehicleRent
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
});