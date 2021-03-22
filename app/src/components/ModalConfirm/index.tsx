import React from 'react';
import { Portal, Dialog, Button, Paragraph } from 'react-native-paper';

interface Props {
  visible: boolean;
  message: string;
  cancel: () => void;
  confirm: () => void;
}

const ModalConfirm = (props: Props) => {
  return (
    <Portal>
      <Dialog visible={props.visible} dismissable={false}>
        <Dialog.Title>Deseja continuar?</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{props.message}</Paragraph>

          <Dialog.Actions>
            <Button onPress={props.cancel}>cancelar</Button>
            <Button mode="outlined" onPress={props.confirm}>
              confirmar
            </Button>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default ModalConfirm;
