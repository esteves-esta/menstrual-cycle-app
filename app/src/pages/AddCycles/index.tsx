/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton } from 'react-native-paper';
import { subMonths } from 'date-fns';
import { useForm } from 'react-hook-form';

import Color from 'color';
import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/period/actions';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import { Container, Overline, Row } from 'styles/mainStyles';
import { Header, Title } from './styles';
import FormValues from 'models/OldPeriods';

const AddCycles: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const today = new Date();

  const { loading, success } = useSelector((state) => state.period);
  const { control, handleSubmit } = useForm<FormValues>();

  useEffect(() => {
    if (success) {
      // navigation.goBack();
    }
  }, [success]);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    console.log('asffsd');
    dispatch(actions.setOldPeriods(data));
  };

  const bgColor = Color(colors.primary).lighten(0.4).hex();
  const fontColor = Color(colors.primary).lighten(0.02).hex();

  return (
    <Container bg={bgColor}>
      <Header>
        <Overline fontColor={fontColor}>ADICIONAR ÚLTIMOS CICLOS</Overline>
        <IconButton icon="x" color={fontColor} onPress={navigation.goBack} />
      </Header>

      <Title fontColor={colors.accent}>Ultima menstruação</Title>
      <Row>
        <DatePicker
          control={control}
          label="Primeiro dia"
          name="last.start"
          defaultValue={subMonths(today, 1)}
        />
        <DatePicker
          control={control}
          label="Ultimo dia"
          name="last.end"
          defaultValue={subMonths(today, 1)}
        />
      </Row>

      <Title fontColor={colors.accent}>Penultima menstruação</Title>
      <Row>
        <DatePicker
          control={control}
          label="Primeiro dia"
          name="secondlastPeriod.start"
          defaultValue={subMonths(today, 2)}
        />
        <DatePicker
          control={control}
          label="Ultimo dia"
          name="secondlastPeriod.end"
          defaultValue={subMonths(today, 2)}
        />
      </Row>

      <Button
        loading={loading}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        Salvar
      </Button>
    </Container>
  );
};

export default AddCycles;
