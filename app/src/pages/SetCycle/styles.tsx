import styled from 'styled-components/native';
import { Subtitle } from 'styles/mainStyles';

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Subtitle)`
  margin-top: 35px;
`;
