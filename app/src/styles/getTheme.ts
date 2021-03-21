import {
  MobileDefaultTheme,
  OrangeTheme,
  GrayTheme,
  BlueTheme,
  DarkOrangeTheme,
  GreenTheme,
  RedTheme,
} from './Theme';
import ThemesKeys from 'constants/Theme';

export const getTheme = (theme: string) => {
  switch (theme) {
    case ThemesKeys.orange:
      return OrangeTheme;
    case ThemesKeys.purple:
      return MobileDefaultTheme;
    case ThemesKeys.gray:
      return GrayTheme;
    case ThemesKeys.red:
      return RedTheme;
    case ThemesKeys.green:
      return GreenTheme;
    case ThemesKeys.darkOrage:
      return DarkOrangeTheme;
    case ThemesKeys.blue:
      return BlueTheme;
    default:
      return MobileDefaultTheme;
  }
};
