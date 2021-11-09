import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../utils/mediaQueries';
import { whiteColor } from '../../variables';
import { Petal1, Petal2 } from '../animation/sakura';
import { Container } from '../Container';

export interface Props {
  title: string;
  left: {
    title: string;
    children: React.ReactNode;
  };
  right: {
    title: string;
    children: React.ReactNode;
  };
}

const Box = styled(Container)`
  color: ${whiteColor};
  position: relative;
  display: flex;
  padding: 20px 0;
  width: 80%;
  overflow: hidden;

  ${mediaQueries.pcSize`
    flex-direction: column;
    width: 100%;
  `};
`;

const Section = styled.section`
  flex: 0.5;
  text-align: center;
  max-size: 50%;

  ${mediaQueries.pcSize`
    max-width: 100%;
  `};
`;

const SectionTitle = styled.h3`
  border-bottom: 3px solid;
  margin: 20px auto;
  padding-bottom: 5px;
  width: 60%;
`;

const SectionBox = styled.div`
  text-align: left;
  margin: 0 50px;
`;

export const Flame: React.FC<Props> = ({ title, left, right }) => (
  <>
    <Box className="Hero">
      <div>
        {[...Array(29)].map((_, i) => (
          <Petal1 key={i} />
        ))}
        {[...Array(29)].map((_, i) => (
          <Petal2 key={i} />
        ))}
      </div>
      <Section>
        <SectionTitle>{left.title}</SectionTitle>
        <SectionBox className="transition">{left.children}</SectionBox>
      </Section>
      <Section>
        <SectionTitle>{right.title}</SectionTitle>
        <SectionBox className="transition">{right.children}</SectionBox>
      </Section>
    </Box>
  </>
);
