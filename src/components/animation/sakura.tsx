import styled, { keyframes } from 'styled-components';
import { getRandomInt } from '../../utils/getRandomInt';
import { sakuraColor } from '../../variables';


const petalAnimation = keyframes`
  0% {
    background-color: ${sakuraColor};
    width: 6px;
    height:6px;
    box-shadow: 0px 0px 20px ${sakuraColor};
  }
  20% {
    transform: translate(${getRandomInt(70, 120)}px, ${getRandomInt(10,20)}px);
  }
  40% {
    transform: translate(${getRandomInt(0, 60)}px, ${getRandomInt(21, 50)}px);
  }
  60% {
    transform: translate(${getRandomInt(70, 150)}px, ${getRandomInt(51, 80)}px);
  }
  80% {
    transform: translate(${getRandomInt(0, 60)}px, ${getRandomInt(81, 100)}px);
  }
  100% {
    transform: translate(${getRandomInt(60, 100)}px, ${getRandomInt(101, 120)}px);
  }
`;

const Petal = styled.i`
  color: ${sakuraColor};
  position: absolute;
  height: 6px;
  width: 6px;
  box-shadow: 0px 0px 20px ${sakuraColor};
  animation-name: ${petalAnimation};
  animation-delay: ${() => `${getRandomInt(0, 30)}s`};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  opacity: 1;
  left: ${() => `calc(${getRandomInt(0, 100)} * 1%)`};
  top: ${() => `calc(${getRandomInt(0, 80)} * 1%)`};
`

// 花びらの向きを変えるために二つ定義
export const Petal1 = styled(Petal)`
  border-radius: ${getRandomInt(110, 150)}% 0 ${getRandomInt(110, 150)}% 0;
`

export const Petal2 = styled(Petal)`
  border-radius: 0 ${getRandomInt(110, 150)}% 0 ${getRandomInt(110, 150)}%;
`
