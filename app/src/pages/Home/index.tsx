/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { format, differenceInCalendarDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Color from 'color';
import { getUTCDate } from 'helpers/index';
import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/get/actions';
import Button from 'components/Button';
import { Title, Subtitle, Overline } from 'styles/mainStyles';
import { Center, ScrollView } from './styles';

const Home: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { period, loading, nextPeriod, periodOngoing } = useSelector(
    (state) => state.period,
  );

  useEffect(() => {
    dispatch(actions.getPeriods());
  }, []);

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

  const durationOfOngoingPeriod = () => {
    if (periodOngoing) {
      const date = getUTCDate(periodOngoing);
      return differenceInCalendarDays(new Date(), date);
    } else {
      return 0;
    }
  };

  const daysOfOngoingPeriod = durationOfOngoingPeriod() / 10;
  const bgColor = Color(colors.primary).darken(daysOfOngoingPeriod).hex();
  function goToAddCycles() {
    navigation.navigate('AddCycles');
  }

  function goToSetCycle() {
    navigation.navigate('SetCycle');
  }
  function goToAddDisconfort() {
    navigation.navigate('AddDisconfort');
  }

  return (
    <ScrollView>
      <Center bg={bgColor}>
        <Overline fontColor={colors.font}>Hoje é dia {today}</Overline>
        {!loading && period === undefined && (
          <>
            <Button mode="contained" onPress={goToAddCycles}>
              Adicione últimos ciclos
            </Button>
            <Button mode="contained">Importar dados XML</Button>
          </>
        )}

        {!loading && periodOngoing !== undefined && (
          <>
            <Title fontColor={colors.title}>
              Esse é o {durationOfOngoingPeriod()}º da sua menstruação
            </Title>

            <Button mode="contained" onPress={goToAddDisconfort}>
              Adicionar desconforto
            </Button>
            <Button mode="contained" onPress={goToSetCycle}>
              Finalizar
            </Button>
          </>
        )}

        {!loading && nextPeriod !== undefined && (
          <>
            <Title fontColor={colors.title}>Seu próximo ciclo</Title>
            <Title fontColor={colors.title}>se inicia no </Title>
            <Title fontColor={colors.title}>dia {nextCycleStart()}</Title>
            <Subtitle fontColor={colors.font}>
              Em {daysTillPeriod()} dias
            </Subtitle>
            <Button mode="contained" onPress={goToSetCycle}>
              Começar
            </Button>
          </>
        )}
      </Center>
    </ScrollView>
  );
};

export default Home;
