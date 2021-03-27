import styled from 'styled-components/native';
import { Overline } from 'styles/mainStyles';
import Color from 'color';

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Overline)`
  margin: 0px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => Color(theme.colors.primary).lighten(0.1).hex()};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  ${({ theme }) => theme.fonts.medium}
`;

export const Scrollview = styled.ScrollView.attrs({})`
  background-color: ${({ theme }) =>
    Color(theme.colors.primary).lighten(0.6).hex()};
`;

export const ListContainer = styled.View`
  margin-top: 15px;
`;
