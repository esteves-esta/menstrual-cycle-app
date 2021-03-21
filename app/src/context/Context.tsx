import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MainContextProps {
  theme: string;
  setTheme: Dispatch<any>;
}

const MainContext = createContext<any>(null);

export default function MainProvider(props: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  React.useEffect(() => {
    const restorePrefs = async () => {
      try {
        const themeSaved = await AsyncStorage.getItem('theme');

        if (themeSaved) {
          setTheme(themeSaved);
        }
      } catch (e) {}
    };

    restorePrefs();
  }, []);

  React.useEffect(() => {
    const savePrefs = async () => {
      try {
        await AsyncStorage.setItem('theme', theme);
      } catch (e) {
        // ignore error
      }
    };

    savePrefs();
  }, [theme]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme: (newTheme: string) => setTheme(newTheme),
      theme,
    }),
    [theme],
  );

  return (
    <MainContext.Provider value={preferences}>
      {props.children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}
