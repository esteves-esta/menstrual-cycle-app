import styled from 'styled-components/native';
import { Modal as PaperModal, Paragraph } from 'react-native-paper';
import Color from 'color';

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
`;

export const Modal = styled(PaperModal).attrs({
  contentContainerStyle: { flex: 1 },
})``;

export const Input = styled.View`
  background-color: ${({ theme }) =>
    Color(theme.colors.primary).alpha(0.1).rgb().string()};
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  border: 1px solid;
  border-color: ${({ theme }) =>
    Color(theme.colors.primary).alpha(0.29).rgb().string()};
  border-radius: ${({ theme }) => theme.roundness}px;
  height: 50px;
  margin-bottom: 10px;
`;

export const InputText = styled(Paragraph)`
  color: ${({ theme }) =>
    Color(theme.colors.primary).darken(0.1).rgb().string()};
  font-size: 16px;
  letter-spacing: 1.8px;

  ${({ theme }) => theme.fonts.medium};
`;

export const Label = styled(Paragraph)`
  ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => Color(theme.colors.primary).darken(0.1).hex()};
  font-size: 14px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin: 10px 0px;
`;
