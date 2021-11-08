import * as React from 'react';
import styled from 'styled-components';

export interface Props {
  className?: string;
}

const Bloom = styled.div`
  position: absolute;
  top: 0;
  height: 200px;
  width: 100%;
  background-color: #eebbcb;
  border-radius: 0px 0px 0px 50%;
`

const Wood = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 200px;
  background-color: #946243;
`

const Root = styled.div`
  position: absolute;
  background-color: #726250;
  height: 200px;
  width: 500px;
  right: 0;
  bottom: 0;
  -webkit-clip-path: polygon(100% 25%, 100% 100%, 0 100%);
  clip-path: polygon(100% 25%, 100% 100%, 0 100%);
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
