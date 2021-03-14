import styled from 'styled-components/native';
import { Container } from 'styles/mainStyles';

export const Center = styled(Container)`
  justify-content: center;
  /* align-items: center; */
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: { flex: 1 },
})``;
