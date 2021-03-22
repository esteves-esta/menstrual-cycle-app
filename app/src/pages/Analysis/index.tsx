import React from 'react';
import { useTheme } from 'react-native-paper';
import Color from 'color';

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
        <Overline fontColor={colors.accent}>Média de duração do ciclo</Overline>
        <Title fontColor={colors.accent}>
          {Math.round(averageCycleDuration)} dias
        </Title>
      </Card>

      <Card>
        <Overline fontColor={colors.accent}>
          Média de duração da menstruação
        </Overline>
        <Title fontColor={colors.accent}>
          {Math.round(averagePeriodDuration)} dias
        </Title>
      </Card>
    </Container>
  );
};

export default Analysis;
