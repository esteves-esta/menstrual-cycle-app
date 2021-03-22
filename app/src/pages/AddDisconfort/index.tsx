import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton } from 'react-native-paper';
import { useForm } from 'react-hook-form';

import Color from 'color';
import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/set/actions';
import * as getActions from 'store/modules/get/actions';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import CheckItems from 'components/CheckItem';
import { Header, Container, Overline } from 'styles/mainStyles';

const AddDisconfort: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { loading, success } = useSelector((state) => state.setPeriod);
  const { control, handleSubmit } = useForm<{
    date: Date;
    symptoms: string[];
  }>();

  useEffect(() => {
    if (success) {
      navigation.goBack();
      dispatch(getActions.getPeriods());
      dispatch(actions.clearState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(actions.setDayDisconfort(data));
  };

  const bgColor = Color(colors.primary).lighten(0.4).hex();

  return (
    <Container bg={bgColor}>
      <Header>
        <Overline fontColor={colors.accent}>ADICIONAR DESCONFORTO</Overline>
        <IconButton
          icon="x"
          color={colors.accent}
          onPress={navigation.goBack}
        />
      </Header>

      <DatePicker
        control={control}
        label="Data do desconforto"
        name="date"
        defaultValue={new Date()}
        required={true}
      />

      <CheckItems
        control={control}
        label="Selecione um dos desconfortos abaixo"
        name="symptoms"
        defaultValue=""
        required={true}
        values={[
          'Dores nas costas',
          'Cólicas',
          'Dores nos seios',
          'Dores de cabeça',
        ]}
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        Salvar
      </Button>
    </Container>
  );
};

export default AddDisconfort;
