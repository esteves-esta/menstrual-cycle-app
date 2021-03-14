import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton } from 'react-native-paper';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Color from 'color';

import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/period/actions';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import { Container, Label, Overline } from 'styles/mainStyles';
import { Header } from './styles';

const AddCycles: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState('');

  const bgColor = Color(colors.primary).lighten(0.35).hex();
  const fontColor = Color(colors.primary).lighten(0.02).hex();

  function onDismiss() {
    setVisible(false);
  }
  return (
    <Container bg={bgColor}>
      <Header>
        <Overline fontColor={fontColor}>ADICIONAR ÚLTIMOS CICLOS</Overline>
        <IconButton icon="x" color={fontColor} onPress={navigation.goBack} />
      </Header>
      <Overline fontColor={fontColor} onPress={() => setVisible(true)}>
        Última menstruação
      </Overline>
      <Overline fontColor={fontColor}>{data}</Overline>

      <Label>Primeiro dia</Label>
      <Overline fontColor={fontColor}>Penúltima menstruação</Overline>
      <Button mode="contained" onPress={navigation.goBack}>
        Salvar
      </Button>
      <DatePicker
        setData={(d: string) => setData(d)}
        visible={visible}
        onDismiss={onDismiss}
      />
    </Container>
  );
};

export default AddCycles;
