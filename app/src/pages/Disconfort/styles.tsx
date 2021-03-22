import styled from 'styled-components/native';
import Color from 'color';

export const DayContainer = styled.View`
  background-color: ${({ theme }) =>
    Color(theme.colors.primary).alpha(0.1).rgb().string()};
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${({ theme }) =>
    Color(theme.colors.primary).alpha(0.29).rgb().string()};
  border-radius: ${({ theme }) => theme.roundness}px;
  margin-right: 10px;
`;

export const Day = styled.Text`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 16px;
  ${({ theme }) => theme.fonts.medium};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;
