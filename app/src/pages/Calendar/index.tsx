import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import Calendar from 'components/CustomCalendar';
import Color from 'color';
import { useDispatch, useSelector } from 'store/index';

import CalendarFooter from 'components/CalendarFooter';
import { Container, Overline, Scrollview } from 'styles/mainStyles';

const Calender: React.FC = () => {
  const { colors } = useTheme();
  const [selected, setSelected] = useState('');
  const bgColor = Color(colors.primary).lighten(0.8).hex();
  const { periodsMarked } = useSelector((state) => state.period);

  const onDayPress = (day: any) => {
    setSelected(day.dateString);
  };

  return (
    <>
      <Scrollview>
        <Container bg={bgColor}>
          <Calendar
            bgColor={bgColor}
            markingType={'period'}
            markedDates={{
              ...periodsMarked,
              [selected]: {
                endingDay: true,
                color: colors.primary,
                textColor: colors.white,
              },
            }}
            onDayPress={onDayPress}
            // onPressArrowLeft={(subtractMonth) => subtractMonth()}
            // onPressArrowRight={(addMonth) => addMonth()}
          />

          <Overline fontColor={colors.primary}>{selected}</Overline>
          <Overline fontColor={colors.primary}>Calendário</Overline>
        </Container>
      </Scrollview>
      <CalendarFooter />
    </>
  );
};

export default Calender;
