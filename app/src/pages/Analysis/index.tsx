import React from 'react';
import { useTheme } from 'react-native-paper';
import Color from 'color';

import { useSelector } from 'store/index';
import Button from 'components/Button';
import { Title, Subtitle, Overline, Container } from 'styles/mainStyles';

const Analysis: React.FC = () => {
  const { colors } = useTheme();
  const { averageCycleDuration, averagePeriodDuration } = useSelector(
    (state) => state.period,
  );

  const bgColor = Color(colors.primary).darken(0).hex();
  const fontColor = Color(colors.primary).lighten(0.5).hex();
  const titleColor = Color(colors.primary).lighten(1).hex();

  return (
    <Container bg={bgColor}>
      <Overline fontColor={fontColor}>Média de duração do ciclo</Overline>
      <Title fontColor={titleColor}>
        {Math.round(averageCycleDuration)} dias
      </Title>

      <Overline fontColor={fontColor}>Média de duração da menstruação</Overline>
      <Title fontColor={titleColor}>
        {Math.round(averagePeriodDuration)} dias
      </Title>
    </Container>
  );
};

export default Analysis;
