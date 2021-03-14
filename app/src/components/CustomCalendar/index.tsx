import React from 'react';
import { useTheme } from 'react-native-paper';
import {
  Calendar,
  CalendarBaseProps,
  CalendarMarkingProps,
} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';

interface Props extends CalendarBaseProps {
  bgColor: string;
  markedDates: CalendarMarkingProps;
}

const CustomCalendar = (props: Props) => {
  const { colors } = useTheme();

  const calendarTheme = {
    calendarBackground: props.bgColor,
    textSectionTitleColor: colors.placeholder,
    selectedDayBackgroundColor: colors.primary,
    selectedDayTextColor: colors.white,
    todayTextColor: colors.accent,
    arrowColor: colors.primary,
    disabledArrowColor: colors.placeholder,
    monthTextColor: colors.primary,
    textMonthFontWeight: '900',
    textDayHeaderFontWeight: '400',
    textDayFontSize: 15,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 16,
  };

  const renderArrow = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      return <Icon name="chevron-right" size={22} color={colors.primary} />;
    } else {
      return <Icon name="chevron-left" size={22} color={colors.primary} />;
    }
  };

  return (
    <Calendar
      key={1}
      theme={calendarTheme}
      renderArrow={renderArrow}
      // markingType={'period'}
      monthFormat={"MMMM 'de' yyyy"}
      hideExtraDays={true}
      enableSwipeMonths={true}
      {...props}
    />
  );
};

export default CustomCalendar;
