import React from 'react';
import { Portal, Dialog, Button, Paragraph } from 'react-native-paper';
import Translations from 'translations/index';

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
        <Dialog.Title>{Translations.t('Common.continue')}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{props.message}</Paragraph>

          <Dialog.Actions>
            <Button onPress={props.cancel}>
              {Translations.t('Common.button.cancel')}
            </Button>
            <Button mode="outlined" onPress={props.confirm}>
              {Translations.t('Common.button.confirm')}
            </Button>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default ModalConfirm;
