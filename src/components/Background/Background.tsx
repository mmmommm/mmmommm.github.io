import * as React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../../utils/mediaQueries';

export interface Props {
  className?: string;
}

const Bloom = styled.div`
  opacity: 1;
  position: absolute;
  top: 0;
  height: 200px;
  width: 100%;
  background-color: #eebbcb;
  border-radius: 0px 0px 0px 50%;

  ${mediaQueries.tablet`
    height: 100px;
  `};
`

const Wood = styled.div`
  opacity: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 200px;
  background-color: #946243;

  ${mediaQueries.tablet`
    width: 50px;
  `};
`

const Root = styled.div`
  opacity: 1;
  position: absolute;
  background-color: #726250;
  height: 180px;
  width: 500px;
  right: 0;
  bottom: 0;
  clip-path: polygon(100% 25%, 100% 100%, 0 100%);
  ${mediaQueries.tablet`
    height: 70px;
    width: 300px;
  `};
`

const Sakura = styled.div`
  position: relative
  width: 100%;
  height: 100%;
`

export const Background: React.VFC = () => (
  <Sakura>
    <Bloom />
    <Wood />
    <Root />
  </Sakura>
);
