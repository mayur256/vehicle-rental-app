import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { useTheme } from '../../theme';

interface TextProps extends RNTextProps {
  variant?: 'caption' | 'body' | 'title' | 'heading' | 'display';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'bg' | 'surface' | 'inputBg' | 'primary' | 'primaryTextOn' | 'mutedText' | 'link' | 'divider' | 'chipBg' | 'chipText';
}

export function Text({
  variant = 'body',
  weight = 'regular',
  color = 'primaryTextOn',
  style,
  ...props
}: TextProps) {
  const theme = useTheme();

  const textStyle = [
    {
      fontSize: theme.fontSizes[variant],
      fontWeight: theme.fontWeights[weight],
      color: theme.colors[color],
      fontFamily: 'System',
    },
    style,
  ];

  return <RNText style={textStyle} {...props} />;
}