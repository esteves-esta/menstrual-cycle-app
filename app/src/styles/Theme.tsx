import Color from 'color';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

export interface MyThemeColors {
  font: string;
  title: string;
  white: string;
}

export const MobileDefaultTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    white: '#fff',
    primary: '#7B5DD6',
    accent: '#502EB7',
    font: Color('#7B5DD6').lighten(0.5).hex(),
    title: Color('#7B5DD6').lighten(1).hex(),
  },
};

export const OrangeTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    white: '#fff',
    primary: '#d6a65d',
    accent: '#b9821c',
    font: Color('#d6a65d').lighten(0.5).hex(),
    title: Color('#d6a65d').lighten(1).hex(),
  },
};

export const GrayTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    white: '#fff',
    primary: '#999999',
    accent: '#616161',
    font: Color('#999999').lighten(0.5).hex(),
    title: Color('#999999').lighten(1).hex(),
  },
};

export const GreenTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    white: '#fff',
    primary: '#a7ca55',
    accent: '#83ac25',
    font: Color('#a7ca55').lighten(1).hex(),
    title: Color('#a7ca55').lighten(1).hex(),
  },
};
export const RedTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    white: '#fff',
    primary: '#c74e30',
    accent: '#dd3309',
    font: Color('#c74e30').lighten(0.7).hex(),
    title: Color('#c74e30').lighten(1).hex(),
  },
};
export const BlueTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    white: '#fff',
    primary: '#49a9be',
    accent: '#1a8ea8',
    font: Color('#49a9be').lighten(0.5).hex(),
    title: Color('#49a9be').lighten(1).hex(),
  },
};

export const DarkOrangeTheme: ReactNativePaper.Theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    white: '#fff',
    primary: '#db732d',
    accent: '#c4560d',
    font: Color('#db732d').lighten(0.7).hex(),
    title: Color('#db732d').lighten(1).hex(),
  },
};
