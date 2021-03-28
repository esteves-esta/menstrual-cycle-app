import React from 'react';
import { useTheme } from 'react-native-paper';
import Color from 'color';
import Translations from 'translations/index';

import { useSelector } from 'store/index';

import { Title, Overline, Container } from 'styles/mainStyles';
import { Card } from './styles';

const Analysis: React.FC = () => {
  const { colors } = useTheme();
  const { averageCycleDuration, averagePeriodDuration } = useSelector(
    (state) => state.period,
  );

  const bgColor = Color(colors.primary).darken(0).hex();

  return (
    <Container bg={bgColor}>
      <Card>
        <Overline fontColor={colors.primary}>
          {Translations.t('Analysis.averageCycle')}
        </Overline>
        <Title fontColor={colors.accent}>
          {Translations.t('Common.days', {
            count: Math.round(averageCycleDuration),
          })}
        </Title>
      </Card>

      <Card>
        <Overline fontColor={colors.primary}>
          {Translations.t('Analysis.averagePeriod')}
        </Overline>
        <Title fontColor={colors.accent}>
          {Translations.t('Common.days', {
            count: Math.round(averagePeriodDuration),
          })}
        </Title>
      </Card>
    </Container>
  );
};

export default Analysis;
