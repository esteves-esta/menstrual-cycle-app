import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import Calendar from 'components/CustomCalendar';
import Color from 'color';
import { useSelector } from 'store/index';

import CalendarFooter from 'components/CalendarFooter';
import { Container, Scrollview } from 'styles/mainStyles';

const Calender: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const bgColor = Color(colors.primary).lighten(0.8).hex();
  const { periodsMarked } = useSelector((state) => state.period);

  const onDayPress = (day: any) => {
    setSelected(day.dateString);
    const markedDays = Object.entries(periodsMarked);
    const found = markedDays.find((item) => item[0] === day.dateString);
    if (found !== undefined) {
      navigation.navigate('Disconfort', { id: found[1]?.id });
    }
  };

  return (
    <>
      <Container bg={bgColor}>
        <Scrollview>
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
        </Scrollview>
      </Container>
      <CalendarFooter />
    </>
  );
};

export default Calender;
