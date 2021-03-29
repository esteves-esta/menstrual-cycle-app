import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton } from 'react-native-paper';
import Calendar from 'components/CustomCalendar';
import Color from 'color';
import { useSelector } from 'store/index';
import { format, differenceInCalendarDays } from 'date-fns';
import Translations, { dateLocalize } from 'translations/index';

import CalendarFooter from 'components/CalendarFooter';
import { Container, Row as SpaceRow } from 'styles/mainStyles';
import { Row, Title, Text, Scrollview, ListContainer } from './styles';
import Period from 'models/Period';

const Calender: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { periodsMarked, period } = useSelector((state) => state.period);

  const bgColor = Color(colors.primary).lighten(0.6).hex();
  const fontColor = Color(colors.primary).lighten(0.1).hex();

  const [selected, setSelected] = useState('');
  const [mode, setMode] = useState<'calendar' | 'list'>('calendar');

  function changeMode() {
    setMode((state) => (state === 'calendar' ? 'list' : 'calendar'));
  }

  const onDayPress = (day: any) => {
    setSelected(day.dateString);
    const markedDays = Object.entries(periodsMarked);
    const found = markedDays.find((item) => item[0] === day.dateString);
    if (found !== undefined) {
      navigation.navigate('Disconfort', { id: found[1]?.id });
    }
  };

  function getDates(item: Period) {
    try {
      if (item.end !== null) {
        return `${formatDate(item.start)} - ${formatDate(item?.end)}`;
      } else {
        return `${formatDate(item.start)} -`;
      }
    } catch (e) {
      return '';
    }
  }

  function formatDate(date: Date) {
    try {
      if (date) {
        return format(date, 'LLL dd', {
          locale: dateLocalize(),
        });
      } else {
        return 0;
      }
    } catch (e) {
      return 0;
    }
  }

  function getDuration(item: Period) {
    if (item.end) {
      return differenceInCalendarDays(item.end, item.start);
    } else {
      return '';
    }
  }

  return (
    <>
      <Scrollview>
        <Container>
          <Row>
            <Title fontColor={fontColor}>
              {Translations.t(`Calendar.${mode}`)}
            </Title>
            <IconButton
              icon="repeat"
              color={fontColor}
              onPress={changeMode}
              size={18}
            />
          </Row>

          {mode === 'calendar' ? (
            <Calendar
              bgColor={bgColor}
              markingType={'period'}
              markedDates={{
                ...periodsMarked,
                [selected]: {
                  color: colors.primary,
                  textColor: colors.white,
                },
              }}
              onDayPress={onDayPress}
            />
          ) : (
            <ListContainer>
              {period &&
                period.map((item) => (
                  <SpaceRow key={item.id}>
                    <Text>{getDates(item)}</Text>
                    <Text>
                      {Translations.t('Common.days', {
                        count: getDuration(item),
                      })}
                    </Text>
                  </SpaceRow>
                ))}
            </ListContainer>
          )}
        </Container>
      </Scrollview>
      <CalendarFooter />
    </>
  );
};

export default Calender;
