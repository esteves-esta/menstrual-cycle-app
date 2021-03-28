import React from 'react';
import {
  Portal,
  Dialog,
  Button,
  Paragraph,
  HelperText,
} from 'react-native-paper';
import Translations from 'translations/index';

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
        <Dialog.Title>{Translations.t('Error.title')}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{Translations.t('Error.description')}</Paragraph>
          <Paragraph>{Translations.t('Common.tryAgain')}</Paragraph>

          <HelperText type="info">
            {Translations.t('Error.errorOccurred')}
          </HelperText>
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
