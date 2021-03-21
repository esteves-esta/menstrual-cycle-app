import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

export interface MyThemeColors {}

export const MobileDefaultTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#7B5DD6',
    accent: '#502EB7',
  },
};

export const OrangeTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#d6a65d',
    accent: '#b9821c',
  },
};

export const GrayTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#afafaf',
    accent: '#616161',
  },
};

export const GreenTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#bce264',
    accent: '#83ac25',
  },
};
export const RedTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#f3552d',
    accent: '#F43807',
  },
};
export const BlueTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#54C0D7',
    accent: '#1a8ea8',
  },
};

export const DarkOrangeTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#fc7922',
    accent: '#c4560d',
  },
};
