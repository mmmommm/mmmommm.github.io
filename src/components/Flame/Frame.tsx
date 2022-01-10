import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../utils/mediaQueries';
import { whiteColor } from '../../variables';
import { Petal } from '../animation/sakura';
import { Container } from '../Container';

interface Props {
  title: string;
  left: {
    title: string;
    children: ReactNode;
  };
  right: {
    title: string;
    children: ReactNode;
  };
}

const Box = styled(Container)`
  color: ${whiteColor};
  position: relative;
  display: flex;
  padding: 20px 0;
  width: 80%;
  overflow: hidden;
  z-index: 5;

  ${mediaQueries.pcSize`
    flex-direction: column;
    width: 100%;
  `};
`;

const Section = styled.section`
  backdrop-filter: blur(12px);
  flex: 0.5;
  text-align: center;
  max-size: 50%;
  ${mediaQueries.laptop`
    max-width: 60%;
  `}
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

// Boxの中にアニメーションを入れないと画面の最大幅がずれる
export const Flame: FC<Props> = ({ title, left, right }) => (
  <>
    <Box className="Hero">
      <div>
        {[...Array(29)].map((_, i) => (
          <Petal key={i} />
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
