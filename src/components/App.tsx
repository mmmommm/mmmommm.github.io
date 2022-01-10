import { FC } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../globalStyle';

const Container = styled.div`
  box-sizing: border-box;
`;

export const App: FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
