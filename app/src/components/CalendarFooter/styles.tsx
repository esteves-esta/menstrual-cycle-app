import styled, { css } from 'styled-components/native';
import { Card as _Card } from 'react-native-paper';
import { Animated } from 'react-native';

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 80px;
`;

export const Card = styled(Animated.View)`
  padding: 20px 35px;
  width: 100%;
  bottom: -170px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 280px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const DrawerHandle = styled.View`
  background-color: ${({ theme }) => theme.colors.disabled};
  height: 5px;
  width: 50px;
  border-radius: 60px;
  margin-bottom: 15px;
  align-self: center;
`;

interface RowProps {
  space?: 'between' | 'around';
}

export const CardRow = styled(_Card.Actions)`
  padding: 0px;
  ${(props: RowProps) =>
    props.space &&
    css`
      justify-content: ${props.space === 'around'
        ? 'space-around'
        : 'space-between'};
      align-items: center;
    `}
`;
