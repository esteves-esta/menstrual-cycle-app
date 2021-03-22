import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton } from 'react-native-paper';
import { subMonths } from 'date-fns';
import { useForm } from 'react-hook-form';

import Color from 'color';
import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/set/actions';
import * as getActions from 'store/modules/get/actions';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import { Container, Overline, Row } from 'styles/mainStyles';
import { Header, Title } from './styles';
import FormValues from 'models/OldPeriods';
import Modal from 'components/ModalError';
import ModalSuccess from 'components/ModalSuccess';

const AddCycles: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const today = new Date();

  const { loading, success, error } = useSelector((state) => state.period);
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // console.log(data);

    dispatch(actions.setOldPeriods(data));
  };

  const bgColor = Color(colors.primary).lighten(0.4).hex();

  function closeModal() {
    dispatch(actions.clearState());
  }

  function closeModalSuccess() {
    navigation.goBack();
    dispatch(getActions.getPeriods());
    dispatch(actions.clearState());
  }

  return (
    <Container bg={bgColor}>
      <Header>
        <Overline fontColor={colors.accent}>ADICIONAR ÚLTIMOS CICLOS</Overline>
        <IconButton
          icon="x"
          color={colors.accent}
          onPress={navigation.goBack}
        />
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

      <Modal errorMessage={error} close={closeModalSuccess} />
      <ModalSuccess
        success={success}
        message="Dados cadastrados com sucesso"
        close={closeModal}
      />
    </Container>
  );
};

export default AddCycles;
