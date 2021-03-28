import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components/native';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { getTheme } from './src/styles/getTheme';
import { store } from './src/store';
import { MyStack } from './src/navigations/routes';
import Feather from 'react-native-vector-icons/Feather';
import MainProvider, { useMainContext } from './src/context/Context';
import { LocaleConfig } from 'react-native-calendars';
import * as RNLocalize from 'react-native-localize';

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
};

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agosto',
    'September',
    'October',
    'November',
    'December',
  ],
  dayNames: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  dayNamesShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
};

const { languageTag } = RNLocalize.findBestAvailableLanguage(['en', 'pt']) || {
  languageTag: 'pt',
};

LocaleConfig.defaultLocale = languageTag;

function MainContent() {
  const iconSettings = {
    icon: (props: any) => <Feather {...props} />,
  };

  const { theme } = useMainContext();

  return (
    <ReduxProvider store={store}>
      <StyledComponentsProvider theme={getTheme(theme)}>
        <PaperProvider theme={getTheme(theme)} settings={iconSettings}>
          <NavigationContainer theme={getTheme(theme)}>
            <MyStack />
          </NavigationContainer>
        </PaperProvider>
      </StyledComponentsProvider>
    </ReduxProvider>
  );
}

export default function App() {
  return (
    <MainProvider>
      <MainContent />
    </MainProvider>
  );
}
