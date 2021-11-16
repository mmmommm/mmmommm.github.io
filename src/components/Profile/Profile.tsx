import * as React from 'react';
import styled from 'styled-components';
import { Container as ContainerComponent } from '../Container';
import { mainColor, whiteColor, blackColor } from '../../variables';
import { Link } from '../atoms/Link';
import { Flame } from '../Flame';

const Container = styled(ContainerComponent)`
  background: ${blackColor};
`;

const SNS = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const P = styled.p`
  color: ${mainColor};
  margin: 0 0 4px;
`;

const H3 = styled.h3`
  color: ${whiteColor};
`;

export const Profile: React.VFC = () => {
  const current = [
    {
      i: 0,
      name: 'undefined',
      position: 'undefined',
    },
  ];
  const history = [
    {
      i: 0,
      name: 'BEENOS as Web engineer',
      period: '2020/11',
    },
    {
      i: 1,
      name: 'Diverse as Data analyst',
      period: '2021/3 - 2021/9',
    },
  ];
  const sns = [
    { url: 'https://twitter.com/kissessenose', service: 'Twitter' },
    { url: 'https://github.com/mmmommm', service: 'Github' },
  ];
  return (
    <Container className="profile">
      <Flame
        title="Profile"
        left={{
          title: 'Bio',
          children: (
            <>
              <H3>Ryota Kise / 21 yo</H3>
              <P>- A Web engineer</P>
              <P>- Interested in web front-end optimization and Javascript AST</P>
              <H3>Contact</H3>
              <P>- ryota1839[at]gmail.com</P>
              <H3>SNS</H3>
              <SNS>
                {sns &&
                  sns.map(({ url, service, i }: any) => (
                    <Link href={url} key={i}>
                      {service}
                    </Link>
                  ))}
              </SNS>
            </>
          ),
        }}
        right={{
          title: 'Careers',
          children: (
            <>
              <H3>Working at</H3>
              {current &&
                current.map(({ name, position, i }: any) => (
                  <P key={i}>
                    - {name} as {position}
                  </P>
                ))}
              <H3>History</H3>
              {history?.map(({ name, period, i }: any) => (
                <P key={i}>
                  - {period} : {name}
                </P>
              ))}
            </>
          ),
        }}
      />
    </Container>
  );
};
