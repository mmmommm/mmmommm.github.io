import { css, Interpolation } from 'styled-components';
import { smartphoneSize, tabletSize, pcSize, laptop, laptopL, desktop } from '../variables';

export const mediaQueryBuilder = (size: number) => (
  strings: TemplateStringsArray,
  ...interpolations: Interpolation<any>[]
) => css`
  @media (max-width: ${size}px) {
    ${css(strings, ...interpolations)};
  }
`;

export const mediaQueries = {
  smartphone: mediaQueryBuilder(smartphoneSize),
  tablet: mediaQueryBuilder(tabletSize),
  pcSize: mediaQueryBuilder(pcSize),
  laptop: mediaQueryBuilder(laptop),
  laptopL: mediaQueryBuilder(laptopL),
  desktop: mediaQueryBuilder(desktop),
};
