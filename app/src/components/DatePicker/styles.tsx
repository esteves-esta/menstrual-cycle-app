import styled from 'styled-components/native';
import { Modal as PaperModal } from 'react-native-paper';

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
