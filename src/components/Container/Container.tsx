import { FC } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../utils/mediaQueries';

interface Props {
  className?: string;
}

const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 50px;
  min-height: calc(100vh - 70px * 2);

  ${mediaQueries.smartphone`
    padding: 70px 15px;
    text-align: center;
  `};
`;

export const Container: FC<Props> = ({ children, className }) => (
  <Section className={className}>{children}</Section>
);
