import React, { useState } from 'react';
import { useTheme, Portal } from 'react-native-paper';
import Color from 'color';
import { DateObject } from 'react-native-calendars';
import Button from 'components/Button';
import Calendar from 'components/CustomCalendar';
import { Container, Overline } from 'styles/mainStyles';
import { Header, Modal } from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  setData: (s: string) => void;
}

const DatePicker = (props: Props) => {
  const { colors } = useTheme();
  const [selected, setSelected] = useState('');
  const bgColor = Color(colors.primary).lighten(0.35).hex();

  const onDayPress = (day: DateObject) => {
    setSelected(day.dateString);
  };

  function save() {
    props.onDismiss();
    props.setData(selected);
  }

  return (
    <Portal>
      <Modal {...props}>
        <Header>
          <Button onPress={props.onDismiss}>Cancelar</Button>
          <Button onPress={save}>Salvar</Button>
        </Header>
        <Container bg={bgColor}>
          <Overline fontColor={colors.primary}>
            Selecione uma data abaixo:
          </Overline>
          <Calendar
            bgColor={bgColor}
            markedDates={{
              [selected]: {
                selected: true,
              },
            }}
            onDayPress={onDayPress}
          />
        </Container>
      </Modal>
    </Portal>
  );
};

export default DatePicker;
