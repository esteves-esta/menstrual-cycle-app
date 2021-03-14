import React, { useState } from 'react';
import { useTheme, Portal, TouchableRipple } from 'react-native-paper';
import Color from 'color';
import { DateObject } from 'react-native-calendars';
import { Controller, Control } from 'react-hook-form';
import { format } from 'date-fns';
import Button from 'components/Button';
import Calendar from 'components/CustomCalendar';
import { Container, Overline } from 'styles/mainStyles';
import { Header, Modal, Input, InputText, Label } from './styles';
import { View } from 'react-native';

interface Props {
  label: string;
  name: string;
  defaultValue?: Date;
  control: Control;
  required?: boolean;
}

const DatePicker = (props: Props) => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const bgColor = Color(colors.primary).lighten(0.5).hex();

  const onDayPress = (day: DateObject) => {
    const date = new Date(day.timestamp);

    setSelected(date);
    setSelectedDate(day.dateString);
  };

  function save(onChange: any) {
    onDismiss();
    onChange(selected);
  }

  function onDismiss() {
    setVisible(false);
  }

  function DateModal(onChange: any) {
    return (
      <Portal>
        <Modal visible={visible} dismissable={false}>
          <Header>
            <Button onPress={onDismiss}>Cancelar</Button>
            <Button onPress={() => save(onChange)}>Salvar</Button>
          </Header>
          <Container bg={bgColor}>
            <Overline fontColor={colors.primary}>
              Selecione uma data abaixo:
            </Overline>
            <Calendar
              current={props.defaultValue}
              bgColor={bgColor}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                },
              }}
              onDayPress={onDayPress}
            />
          </Container>
        </Modal>
      </Portal>
    );
  }

  return (
    <>
      <Controller
        control={props.control}
        name={props.name}
        rules={{ required: props.required }}
        defaultValue={props.defaultValue}
        render={({ onChange, value }) => (
          <>
            <View>
              <Label>{props.label}</Label>
              <TouchableRipple onPress={() => setVisible(true)}>
                <Input>
                  <InputText>{value.toLocaleDateString()}</InputText>
                </Input>
              </TouchableRipple>
            </View>
            {DateModal(onChange)}
          </>
        )}
      />
    </>
  );
};

export default DatePicker;
