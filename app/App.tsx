import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { MobileDefaultTheme, DarkTheme } from './src/styles/Theme';
import { store } from './src/store';
import Routes, { MyStack } from './src/navigations/routes';
import Feather from 'react-native-vector-icons/Feather';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  dayNames: [
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
  ],
  dayNamesShort: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt';

export default function App() {
  const iconSettings = {
    icon: (props: any) => <Feather {...props} />,
  };

  return (
    <ReduxProvider store={store}>
      <StyledComponentsProvider theme={MobileDefaultTheme}>
        <PaperProvider theme={MobileDefaultTheme} settings={iconSettings}>
          <NavigationContainer theme={MobileDefaultTheme}>
            <MyStack />
          </NavigationContainer>
        </PaperProvider>
      </StyledComponentsProvider>
    </ReduxProvider>
  );
}
