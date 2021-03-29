import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton, Paragraph } from 'react-native-paper';
import { useForm } from 'react-hook-form';

import Color from 'color';
import { useDispatch, useSelector } from 'store/index';
import * as actions from 'store/modules/set/actions';
import * as getActions from 'store/modules/get/actions';
import DatePicker from 'components/DatePicker';
import Button from 'components/Button';
import { Container, Overline, Row } from 'styles/mainStyles';
import { Header } from './styles';
import Modal from 'components/ModalError';
import ModalSuccess from 'components/ModalSuccess';
import Translations from 'translations/index';

const SetCycle: React.FC = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const today = new Date();

  const { periodOngoing } = useSelector((state) => state.period);
  const { loading, success, error } = useSelector((state) => state.setPeriod);
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: { start: Date }) => {
    // console.log(data);
    if (periodOngoing === undefined) {
      dispatch(actions.setPeriodBegin(data.start));
    } else {
      dispatch(actions.setPeriodEnd(data.start));
    }
  };

  const bgColor = Color(colors.primary).lighten(0.4).hex();

  function closeModal() {
    dispatch(actions.clearState());
  }

  function closeModalSuccess() {
    navigation.goBack();
    dispatch(getActions.getPeriods());
    dispatch(actions.clearState());
  }

  return (
    <Container bg={bgColor}>
      <Header>
        <Overline fontColor={colors.accent}>
          {Translations.t(
            `Common.${periodOngoing === undefined ? 'start' : 'end'}`,
          )}
        </Overline>
        <IconButton
          icon="x"
          color={colors.accent}
          onPress={navigation.goBack}
        />
      </Header>

      <Paragraph>
        {Translations.t('SetCycle.description', {
          type: Translations.t(
            `Common.${periodOngoing === undefined ? 'begin' : 'finish'}`,
          ),
        })}
      </Paragraph>
      <Row>
        <DatePicker
          control={control}
          label={Translations.t('SetCycle.date', {
            dateType: Translations.t(
              `Common.${periodOngoing === undefined ? 'start' : 'end'}`,
            ),
          })}
          name="start"
          defaultValue={today}
        />
      </Row>

      <Button
        loading={loading}
        mode="contained"
        onPress={handleSubmit(onSubmit)}>
        {Translations.t('Common.button.save')}
      </Button>

      <Modal errorMessage={error} close={closeModal} />
      <ModalSuccess
        success={success}
        message={Translations.t('Common.successMessage')}
        close={closeModalSuccess}
      />
    </Container>
  );
};

export default SetCycle;
