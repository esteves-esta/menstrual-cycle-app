import React, { useState } from 'react';
import { useTheme } from 'react-native-paper';
import Calendar from 'components/CustomCalendar';
import Color from 'color';

import CalendarFooter from 'components/CalendarFooter';
import { Container, Overline, Scrollview } from 'styles/mainStyles';

const Calender: React.FC = () => {
  const { colors } = useTheme();
  const [selected, setSelected] = useState('');
  const bgColor = Color(colors.primary).lighten(0.8).hex();

  const onDayPress = (day: any) => {
    setSelected(day.dateString);
  };

  return (
    <>
      <Scrollview>
        <Container bg={bgColor}>
          <Calendar
            bgColor={bgColor}
            markedDates={{
              //   '2021-03-10': {
              //     startingDay: true,
              //     color: colors.primary,
              //     textColor: colors.white,
              //   },
              //   '2021-03-11': {
              //     color: colors.primary,
              //     textColor: colors.white,
              //   },
              //   '2021-03-12': {
              //     endingDay: true,
              //     color: colors.primary,
              //     textColor: colors.white,
              //   },
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
