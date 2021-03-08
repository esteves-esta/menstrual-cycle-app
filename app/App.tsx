import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { MobileDefaultTheme, DarkTheme } from './src/styles/Theme';
import { store } from './src/store';
import Routes from './src/navigations/routes';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <StyledComponentsProvider theme={MobileDefaultTheme}>
        <PaperProvider theme={MobileDefaultTheme}>
          <NavigationContainer theme={MobileDefaultTheme}>
            <Routes />
          </NavigationContainer>
        </PaperProvider>
      </StyledComponentsProvider>
    </ReduxProvider>
  );
}
