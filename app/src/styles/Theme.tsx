import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

export interface MyThemeColors {
  tertiary: string;
  tertiaryMedium: string;
  tertiaryDark: string;
  tertiaryExtraDark: string;
  grayDark: string;
  grayMedium: string;
  gray: string;
  grayLight: string;
  white: string;
  black: string;
  primary900: string;
  primary800: string;
  primary700: string;
  primary600: string;
  primary500: string;
  primary400: string;
  primary300: string;
  primary200: string;
  primary100: string;
  primary050: string;
  secundary900: string;
  secundary800: string;
  secundary700: string;
  secundary600: string;
  secundary500: string;
  secundary400: string;
  secundary300: string;
  secundary200: string;
  secundary100: string;
  secundary050: string;
}

export interface Layout {
  headerHeight: number;
  iconSize: number;
  paddingRow: number;
  layoutBorder: number;
}

export const MobileDefaultTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  // roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#543070',
    accent: '#FFB200',
    background: '#FFFFFF',
    tertiary: '#63C3D1',
    tertiaryMedium: '#529FAA',
    tertiaryDark: '#3D7981',
    tertiaryExtraDark: '#224D52',
    grayDark: '#414141',
    grayMedium: '#BBBBBB',
    gray: '#CCCCCC',
    grayLight: '#E5E5E5',
    white: '#FFFFFF',
    black: '#000000',
    primary900: '#280A3C',
    primary800: '#411E5A',
    primary700: '#543070',
    primary600: '#66447F',
    primary500: '#6E4B87',
    primary400: '#846699',
    primary300: '#9A81AB',
    primary200: '#B7A5C3',
    primary100: '#D4C9DB',
    primary050: '#EEE9F1',
    secundary900: '#B03500',
    secundary800: '#E05400',
    secundary700: '#F0762D',
    secundary600: '#EF9512',
    secundary500: '#FFB200',
    secundary400: '#FFBE26',
    secundary300: '#FFC94D',
    secundary200: '#FFD980',
    secundary100: '#FFE8B3',
    secundary050: '#FFF6E0',
  },
  layout: {
    headerHeight: 50,
    iconSize: 35,
    paddingRow: 15,
    layoutBorder: 10,
  },
};

export const DarkTheme: ReactNativePaper.Theme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...MobileDefaultTheme.colors,
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#b366ff',
    onBackground: '#b366ff',
    accent: '#e2b5ff',
  },
  layout: MobileDefaultTheme.layout,
};
