import React from 'react';
import {
  Portal,
  Dialog,
  Button,
  Paragraph,
  HelperText,
} from 'react-native-paper';

interface Props {
  errorMessage?: string;
  close: () => void;
}

const Modal = (props: Props) => {
  return (
    <Portal>
      <Dialog
        visible={props.errorMessage !== undefined}
        onDismiss={props.close}>
        <Dialog.Title>Ocorreu um erro</Dialog.Title>
        <Dialog.Content>
          <Paragraph>
            Ocoreu um erro durante a realização da ultima ação.
          </Paragraph>
          <Paragraph>Por favor tente novamente.</Paragraph>

          <HelperText type="info">Erro ocorrido: </HelperText>
          {props.errorMessage !== undefined && (
            <HelperText type="error">{props.errorMessage}</HelperText>
          )}
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

export default Modal;
