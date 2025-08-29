import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { useTheme } from '../../theme';
import { Text } from './Text';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
}

export function Button({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const theme = useTheme();

  const getButtonStyle = () => {
    let baseStyle = {
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      borderRadius: theme.radii.sm,
    };

    // Size styles
    if (size === 'small') {
      baseStyle = { ...baseStyle, paddingHorizontal: 12, paddingVertical: 8, minHeight: 32 };
    } else if (size === 'large') {
      baseStyle = { ...baseStyle, paddingHorizontal: 24, paddingVertical: 16, minHeight: 56 };
    } else {
      baseStyle = { ...baseStyle, paddingHorizontal: 16, paddingVertical: 12, minHeight: 44 };
    }

    // Variant styles
    if (variant === 'primary') {
      baseStyle = { ...baseStyle, backgroundColor: theme.colors.primary };
    } else if (variant === 'secondary') {
      baseStyle = { ...baseStyle, backgroundColor: theme.colors.surface, borderWidth: 1, borderColor: theme.colors.divider };
    } else if (variant === 'outline') {
      baseStyle = { ...baseStyle, backgroundColor: 'transparent', borderWidth: 1, borderColor: theme.colors.primary };
    }

    // Disabled state
    if (disabled || loading) {
      baseStyle = { ...baseStyle, opacity: 0.6 };
    }

    return baseStyle;
  };

  const getTextColor = () => {
    if (variant === 'primary') return 'surface';
    if (variant === 'outline') return 'primary';
    return 'primaryTextOn';
  };

  const getTextSize = () => {
    if (size === 'small') return 'body';
    if (size === 'large') return 'title';
    return 'body';
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? theme.colors.surface : theme.colors.primary}
        />
      ) : (
        <Text
          variant={getTextSize()}
          weight="semibold"
          color={getTextColor()}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}