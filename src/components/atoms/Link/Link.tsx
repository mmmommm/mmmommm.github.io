import { FC } from 'react';
import { linkColor, mainColor } from '../../../variables';
import styled from 'styled-components';

const A = styled.a`
  transition: color 0.5s;
  margin: 0 10px;
  text-decoration: none;
  color: ${linkColor};

  &:visited {
    color: ${mainColor};
  }
`;

interface Props {
  href: string;
}

export const Link: FC<Props> = ({ children, href }) => (
  <A rel="noopener" href={href} target="_blank">
    {children}
  </A>
);
