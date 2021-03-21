import React, { useEffect } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useTheme, TouchableRipple } from 'react-native-paper';
import Color from 'color';
import ThemesKeys from 'constants/Theme';
import { useMainContext } from 'context/Context';
import { useDispatch, useSelector } from 'store/index';
import * as getActions from 'store/modules/get/actions';
import Button from 'components/Button';
import { Subtitle } from 'styles/mainStyles';
import { Row, Center, AppColor } from './styles';
import { getTheme } from 'styles/getTheme';

const Config: React.FC = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { toggleTheme } = useMainContext();
  const bgColor = Color(colors.primary).darken(0).hex();
  const fontColor = Color(colors.primary).lighten(0.5).hex();

  const { success } = useSelector((state) => state.period);

  useEffect(() => {
    if (success) {
      Alert.alert('Dados deletados com sucesso');
    }
  }, [success]);

  function chooseColor(color: string) {
    toggleTheme(color);
  }

  function getColorPrimary(color: string) {
    const theme = getTheme(color);
    return theme.colors.primary;
  }

  function renderColor() {
    const themes = Object.keys(ThemesKeys);
    return themes.map((item) => (
      <TouchableRipple borderless onPress={() => chooseColor(item)} key={item}>
        <AppColor bg={() => getColorPrimary(item)} />
      </TouchableRipple>
    ));
  }

  function deleteAll() {
    dispatch(getActions.deleteAll());
  }

  return (
    <Center bg={bgColor}>
      <Row>
        <Subtitle fontColor={fontColor}>Tema</Subtitle>
        <ScrollView horizontal>
          <Row>{renderColor()}</Row>
        </ScrollView>
      </Row>

      <Button mode="contained">Exportar dados XML</Button>
      <Button mode="contained">Importar dados XML</Button>
      <Button mode="contained" onPress={deleteAll}>
        Deletar dados
      </Button>
    </Center>
  );
};

export default Config;
