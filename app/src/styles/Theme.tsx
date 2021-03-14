import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

export interface MyThemeColors {
  white: string;
  black: string;
  // primary900: string;
  // primary800: string;
  // primary700: string;
  // primary600: string;
  // primary500: string;
  // primary400: string;
  // primary300: string;
  // primary200: string;
  // primary100: string;
  // primary050: string;
}

export const MobileDefaultTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#7B5DD6',
    onBackground: '#502EB7',
    accent: '#502EB7',
    background: '#fff',
    white: '#FFFFFF',
    black: '#000000',
  },
};

export const DarkTheme: ReactNativePaper.Theme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...MobileDefaultTheme.colors,
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#7B5DD6',
    onBackground: '#EDE8FF',
    accent: '#502EB7',
  },
};
