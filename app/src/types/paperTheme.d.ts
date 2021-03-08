import 'react-native-paper';
import { MyThemeColors, Layout } from 'styles/Theme';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors extends MyThemeColors {}

    interface Theme {
      layout: Layout;
    }
  }
}
