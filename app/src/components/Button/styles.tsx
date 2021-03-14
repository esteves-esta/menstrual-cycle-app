import styled from 'styled-components/native';
import { Button as PaperButton } from 'react-native-paper';

export const Button = styled(PaperButton).attrs({
  contentStyle: { height: 50 },
})`
  margin: 10px 0px;
`;
