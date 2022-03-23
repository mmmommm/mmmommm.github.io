import { VFC } from 'react';
import styled from 'styled-components';
import { Container as ContainerComponent } from '../Container';
import { mainColor, whiteColor, blackColor } from '../../variables';
import { Link } from '../atoms/Link';
import { Flame } from '../Flame';
import {
  gql,
  useQuery,
} from "@apollo/client";

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
  font-size: 16px;
`;

const H3 = styled.h3`
  color: ${whiteColor};
`;

const query = gql`
  query {
    dataJson {
      jobs {
        current {
          name
          position
          url
        }
        history {
          main {
            name
            period
          }
          side {
            name
            period
          }
        }
      }
      sns {
        service
        url
        color
      }
    }
  }
`;

export const Profile: VFC = () => {
  // const current = [
  //   {
  //     i: 0,
  //     name: 'CyberAgent',
  //     position: 'Back end Engineer',
  //   },
  // ];
  // const history = [
  //   {
  //     i: 0,
  //     name: 'BEENOS as Web engineer',
  //     period: '2020/11',
  //   },
  //   {
  //     i: 1,
  //     name: 'Diverse as Data analyst',
  //     period: '2021/3 - 2021/9',
  //   },
  //   {
  //     i: 2,
  //     name: "CyberAgent as Frontend engineer",
  //     period: "2022/1"
  //   },
  //   {
  //     i: 3,
  //     name: "CyberAgent as Backend engineer",
  //     period: "2022/2"
  //   }
  // ];
  // const sns = [
  //   { url: 'https://twitter.com/kissessenose', service: 'Twitter' },
  //   { url: 'https://github.com/mmmommm', service: 'Github' },
  // ];
  const { loading, error, data } = useQuery(query);
  const { current, history } = data?.jobs!;

  if (loading) console.log('Loading...');
  if (error) console.log(`Error! ${error.message}`);

  return (
    <Container className="profile">
      <Flame
        title="Profile"
        left={{
          title: 'Bio',
          children: (
            <>
              <H3>Ryota Kise / 21 yo</H3>
              <P>- A web application engineer</P>
              <P>- Interested in web ecosystem</P>
              <Link href="https://docs.google.com/document/d/1vkdxn_7KCvAxzMkRXO6lUFrs3EbO4jjqU46yOR1fuqI/">
                Here is my resume
              </Link>
              <H3>Contact</H3>
              <P>- ryota1839[at]gmail.com</P>
              <H3>SNS</H3>
              <SNS>
                {data.sns &&
                  data.sns.map(({ url, service, i }: any) => (
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
              {history.map(({ name, period, i }: any) => (
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
