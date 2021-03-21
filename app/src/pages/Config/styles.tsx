import styled, { css } from 'styled-components/native';
import { Container, Row as _Row } from 'styles/mainStyles';

export const Center = styled(Container)`
  justify-content: center;
  /* align-items: center; */
`;

export const Row = styled(_Row)`
  padding: 25px 0px;
`;

interface Props {
  bg?: string;
}

export const AppColor = styled.View<Props>`
  height: 40px;
  width: 40px;
  border: 5px solid #fff;
  border-radius: 100px;
  margin-left: 10px;

  ${(props) =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `};
`;
