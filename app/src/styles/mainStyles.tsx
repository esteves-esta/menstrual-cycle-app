import styled, { css } from 'styled-components/native';
import { Title as PaperTitle, Subheading } from 'react-native-paper';

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
  margin-top: 15px;
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

export const Container = styled.View<ContainerProps>`
  padding: 35px;
  flex: 1;

  ${(props) =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Scrollview = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 50 },
})`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
