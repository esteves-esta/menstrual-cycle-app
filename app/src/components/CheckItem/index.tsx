import React from 'react';
import { Checkbox } from 'react-native-paper';
import { Controller, Control } from 'react-hook-form';
import { Row } from 'styles/mainStyles';
import { Label } from './styles';

interface Props {
  label: string;
  name: string;
  defaultValue?: string;
  control: Control;
  required?: boolean;
  values: string[];
}

const CheckItems = ({ values, ...props }: Props) => {
  function onCheck(onChange: any, value: string[], item: string) {
    const isChecked = value.includes(item);
    const updatedValue = [...value];

    if (isChecked) {
      updatedValue.splice(updatedValue.indexOf(item), 1);
    } else {
      updatedValue.push(item);
    }
    onChange(updatedValue);
  }

  function renderCheck(onChange: any, value: string[]) {
    return values.map((item) => (
      <Row key={item}>
        <Label>{item}</Label>
        <Checkbox
          status={value.includes(item) ? 'checked' : 'unchecked'}
          onPress={() => onCheck(onChange, value, item)}
        />
      </Row>
    ));
  }

  return (
    <>
      <Controller
        control={props.control}
        name={props.name}
        rules={{ required: props.required }}
        defaultValue={props.defaultValue}
        render={({ onChange, value }) => renderCheck(onChange, value)}
      />
    </>
  );
};

export default CheckItems;
