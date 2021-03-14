/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import Color from 'color';
import { Button } from './styles';

export default function FancyButton(props: any) {
  const { colors } = useTheme();

  const getColor = () => {
    switch (props.mode) {
      case 'contained':
        return Color(colors.primary).lighten(0.5).hex();

      case 'outlined':
        return Color(colors.primary).lighten(0.5).hex();

      default:
        return Color(colors.primary).lighten(0.5).hex();
    }
  };
  const primary = getColor();

  return (
    <Button
      labelStyle={
        props.mode === 'contained' && {
          color: colors.primary,
          fontWeight: 'bold',
        }
      }
      theme={{ colors: { primary } }}
      {...props}>
      {props.children}
    </Button>
  );
}
