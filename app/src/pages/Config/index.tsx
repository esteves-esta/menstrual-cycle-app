/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme, TouchableRipple } from 'react-native-paper';
import Color from 'color';
import ThemesKeys from 'constants/Theme';
import { useMainContext } from 'context/Context';
import Button from 'components/Button';
import { Subtitle } from 'styles/mainStyles';
import { Row, Center, AppColor } from './styles';
import { getTheme } from 'styles/getTheme';

const Config: React.FC = () => {
  const { colors } = useTheme();
  const { toggleTheme } = useMainContext();
  const bgColor = Color(colors.primary).darken(0).hex();
  const fontColor = Color(colors.primary).lighten(0.5).hex();

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

  return (
    <Center bg={bgColor}>
      <Row>
        <Subtitle fontColor={fontColor}>Tema</Subtitle>
        <ScrollView horizontal>
          <Row>{renderColor()}</Row>
        </ScrollView>
      </Row>

      <Button mode="contained">Adicione últimos ciclos</Button>
      <Button mode="contained">Importar dados XML</Button>
    </Center>
  );
};

export default Config;
