import React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from '../../theme';

interface ContainerProps extends ViewProps {
  padding?: 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 28 | 32;
  margin?: 2 | 4 | 6 | 8 | 12 | 16 | 20 | 24 | 28 | 32;
  backgroundColor?: 'bg' | 'surface' | 'inputBg' | 'primary' | 'primaryTextOn' | 'mutedText' | 'link' | 'divider' | 'chipBg' | 'chipText';
  radius?: 'xs' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

export function Container({
  padding,
  margin,
  backgroundColor = 'surface',
  radius,
  shadow = false,
  style,
  children,
  ...props
}: ContainerProps) {
  const theme = useTheme();

  const containerStyle = [
    {
      backgroundColor: theme.colors[backgroundColor],
    },
    padding && { padding: theme.spacing[padding] },
    margin && { margin: theme.spacing[margin] },
    radius && { borderRadius: theme.radii[radius] },
    shadow && theme.shadows.lightCard,
    style,
  ];

  return (
    <View style={containerStyle} {...props}>
      {children}
    </View>
  );
}