/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { format, differenceInCalendarDays } from 'date-fns';

import Color from 'color';
import { getUTCDate } from 'helpers/index';
import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/get/actions';
import Button from 'components/Button';
import Modal from 'components/ModalError';
import { Title, Subtitle, Overline } from 'styles/mainStyles';
import { Center, ScrollView } from './styles';
import Translations, { dateLocalize } from 'translations/index';

const Home: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { period, loading, error, nextPeriod, periodOngoing } = useSelector(
    (state) => state.period,
  );

  useEffect(() => {
    dispatch(actions.getPeriods());
  }, []);

  const today = format(new Date(), Translations.t('Date.format'), {
    locale: dateLocalize(),
  });

  const nextCycleStart = () => {
    if (nextPeriod) {
      const date = getUTCDate(nextPeriod);
      return format(date, Translations.t('Date.format'), {
        locale: dateLocalize(),
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

  function closeModal() {
    dispatch(actions.clear());
  }

  return (
    <ScrollView>
      <Center bg={bgColor}>
        <Overline fontColor={colors.font}>
          {Translations.t('Home.today', { today })}
        </Overline>

        {!loading && period === undefined && (
          <>
            <Button mode="contained" onPress={goToAddCycles}>
              {Translations.t('Home.addCyclesButton')}
            </Button>
            {/* <Button mode="contained">{Translations.t('Common.button.import')}</Button> */}
          </>
        )}

        {!loading && periodOngoing !== undefined && (
          <>
            <Title fontColor={colors.title}>
              {Translations.t('Home.ongoingPeriod', {
                duration: durationOfOngoingPeriod(),
              })}
            </Title>

            <Button mode="contained" onPress={goToAddDisconfort}>
              {Translations.t('Home.addDiscomfortButton')}
            </Button>
            <Button mode="contained" onPress={goToSetCycle}>
              {Translations.t('Home.endPeriodButton')}
            </Button>
          </>
        )}

        {!loading && nextPeriod !== undefined && (
          <>
            <Title fontColor={colors.title}>
              {Translations.t('Home.nextPeriodPredication', {
                day: nextCycleStart(),
              })}
            </Title>

            <Subtitle fontColor={colors.font}>
              {Translations.t('Home.nextPeriodDuration', {
                count: daysTillPeriod(),
              })}
            </Subtitle>
            <Button mode="contained" onPress={goToSetCycle}>
              {Translations.t('Home.startPeriodButton')}
            </Button>
          </>
        )}

        <Modal errorMessage={error} close={closeModal} />
      </Center>
    </ScrollView>
  );
};

export default Home;
