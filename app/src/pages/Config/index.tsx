import React, { useState } from 'react';
import { ScrollView } from 'react-native';
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
import Modal from 'components/ModalError';
import ModalSuccess from 'components/ModalSuccess';
import ModalConfirm from 'components/ModalConfirm';

const Config: React.FC = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const { toggleTheme } = useMainContext();

  const [modalConfirm, setModalConfirm] = useState(false);

  const bgColor = Color(colors.primary).darken(0).hex();
  const fontColor = Color(colors.primary).lighten(0.5).hex();

  const { success, error } = useSelector((state) => state.period);

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
    setModalConfirm(false);
  }

  function openModal() {
    setModalConfirm(true);
  }

  function cancelDelete() {
    setModalConfirm(false);
  }

  function closeModal() {
    dispatch(getActions.clear());
  }

  return (
    <Center bg={bgColor}>
      <Row>
        <Subtitle fontColor={fontColor}>Tema</Subtitle>
        <ScrollView horizontal>
          <Row>{renderColor()}</Row>
        </ScrollView>
      </Row>

      {/* <Button mode="contained">Exportar dados CSV</Button>
      <Button mode="contained">Importar dados CSV</Button> */}
      <Button mode="contained" onPress={openModal}>
        Deletar dados
      </Button>

      <Modal errorMessage={error} close={closeModal} />
      <ModalSuccess
        success={success}
        message="Dados deletados com sucesso"
        close={closeModal}
      />
      <ModalConfirm
        visible={modalConfirm}
        message="Deseja realmente deletar todos os seus dados? Essa ação não é reversivel."
        cancel={cancelDelete}
        confirm={deleteAll}
      />
    </Center>
  );
};

export default Config;
