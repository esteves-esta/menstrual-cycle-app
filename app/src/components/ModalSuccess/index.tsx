import React from 'react';
import { Portal, Dialog, Button, Paragraph } from 'react-native-paper';

interface Props {
  success: boolean;
  message: string;
  close: () => void;
}

const ModalSuccess = (props: Props) => {
  return (
    <Portal>
      <Dialog visible={props.success} onDismiss={props.close}>
        <Dialog.Title>Sucesso</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{props.message}</Paragraph>

          <Dialog.Actions>
            <Button mode="outlined" onPress={props.close}>
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default ModalSuccess;
