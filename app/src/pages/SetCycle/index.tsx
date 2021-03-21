/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton, Paragraph } from 'react-native-paper';
import { useForm } from 'react-hook-form';

import Color from 'color';
import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/set/actions';
import * as getActions from 'store/modules/get/actions';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import { Container, Overline, Row } from 'styles/mainStyles';
import { Header } from './styles';

const SetCycle: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const today = new Date();

  const { periodOngoing } = useSelector((state) => state.period);
  const { loading, success } = useSelector((state) => state.setPeriod);
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    if (success) {
      navigation.goBack();
      dispatch(getActions.getPeriods());
      dispatch(actions.clearState());
    }
  }, [success]);

  const onSubmit = (data: { start: Date }) => {
    // console.log(data);
    if (periodOngoing === undefined) {
      dispatch(actions.setPeriodBegin(data.start));
    } else {
      dispatch(actions.setPeriodEnd(data.start));
    }
  };

  const bgColor = Color(colors.primary).lighten(0.4).hex();

  return (
    <Container bg={bgColor}>
      <Header>
        <Overline fontColor={colors.accent}>
          {periodOngoing === undefined ? 'Começo' : 'Fim'}
        </Overline>
        <IconButton
          icon="x"
          color={colors.accent}
          onPress={navigation.goBack}
        />
      </Header>

      <Paragraph>
        Se a sua menstruação não{' '}
        {periodOngoing === undefined ? 'começou' : 'terminou'} hoje insira a
        data correta no campo abaixo:
      </Paragraph>
      <Row>
        <DatePicker
          control={control}
          label={`Data de ${periodOngoing === undefined ? 'inicio' : 'fim'}`}
          name="start"
          defaultValue={today}
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

export default SetCycle;
