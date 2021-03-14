import styled, { css } from 'styled-components/native';
import { Title as PaperTitle, Subheading, Text } from 'react-native-paper';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Color from 'color';

interface ContainerProps {
  bg?: string;
}

interface TextProps {
  fontColor?: string;
}

export const Title = styled(PaperTitle)<TextProps>`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 28px;
  ${(props) =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `};
`;

export const Subtitle = styled(Subheading)<TextProps>`
  text-transform: uppercase;
  ${({ theme }) => theme.fonts.medium};
  letter-spacing: 1px;
  /* margin-bottom: 10px; */
  font-size: 18px;
  ${(props) =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `};
`;

export const Overline = styled(Subtitle)<TextProps>`
  text-transform: none;
  font-size: 14px;
`;

export const Label = styled(Text)`
  ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => Color(theme.colors.primary).darken(0.1).hex()};
  font-size: 15px;
  letter-spacing: 0.8px;
  margin: 10px 0px;
`;

export const Container = styled.View<ContainerProps>`
  padding: 35px;
  flex: 1;

  ${(props) =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `};
`;

export const Scrollview = styled.ScrollView.attrs({
  contentContainerStyle: { marginBottom: 50, flex: 1 },
})`
  flex: 1;
`;
