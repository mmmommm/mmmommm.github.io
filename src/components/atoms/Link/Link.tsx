import * as React from 'react';
import { mainColor, blackColor } from '../../../variables';
import styled from 'styled-components';

const A = styled.a`
  color: ${blackColor};
  transition: color 0.5s;
  margin: 0 10px;
  text-decoration: none;

  &:visited {
    color: ${mainColor};
  }
`;

export interface Props {
  href: string;
  className?: string;
}

export const Link: React.FC<Props> = ({ children, href, className }) => (
  <A rel="noopener" href={href} target="_blank" className={className}>
    {children}
  </A>
);
