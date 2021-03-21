/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { format, differenceInCalendarDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Color from 'color';

import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/get/actions';
import Button from 'components/Button';
import { Title, Subtitle, Overline } from 'styles/mainStyles';
import { Center, ScrollView } from './styles';

const Home: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { period, loading, nextPeriod } = useSelector((state) => state.period);

  const bgColor = Color(colors.primary).darken(0).hex();
  const fontColor = Color(colors.primary).lighten(0.5).hex();
  const titleColor = Color(colors.primary).lighten(1).hex();

  const today = format(new Date(), "dd 'de' MMMM", {
    locale: ptBR,
  });

  const nextCycleStart = () => {
    if (nextPeriod) {
      const date = getUTCDate(nextPeriod);
      return format(date, "dd 'de' MMMM", {
        locale: ptBR,
      });
    } else {
      return '';
    }
  };

  const daysTillPeriod = () => {
    if (nextPeriod) {
      const date = getUTCDate(nextPeriod);
      return differenceInCalendarDays(date, new Date());
    } else {
      return 0;
    }
  };

  const getUTCDate = (date = new Date()) => {
    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    );
  };

  useEffect(() => {
    dispatch(actions.getPeriods());
  }, []);

  function goToAddCycles() {
    navigation.navigate('AddCycles');
  }

  return (
    <ScrollView>
      <Center bg={bgColor}>
        <Overline fontColor={fontColor}>Hoje é dia {today}</Overline>
        {!loading && period === undefined && (
          <>
            <Button mode="contained" onPress={goToAddCycles}>
              Adicione últimos ciclos
            </Button>
            <Button mode="contained">Importar dados XML</Button>
          </>
        )}

        {!loading && period !== undefined && (
          <>
            <Title fontColor={titleColor}>Seu próximo ciclo</Title>
            <Title fontColor={titleColor}>se inicia no </Title>
            <Title fontColor={titleColor}>dia {nextCycleStart()}</Title>
            <Subtitle fontColor={fontColor}>
              Em {daysTillPeriod()} dias
            </Subtitle>
            <Button mode="contained">Começar</Button>
          </>
        )}
      </Center>
    </ScrollView>
  );
};

export default Home;
