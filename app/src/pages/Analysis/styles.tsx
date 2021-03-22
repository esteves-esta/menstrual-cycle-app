import styled from 'styled-components/native';

export const Card = styled.View`
  border-radius: 4px;
  padding: 0px 15px 10px 15px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.font};
`;
