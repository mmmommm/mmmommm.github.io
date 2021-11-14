import React from 'react';
import Head from 'next/head';
import { App } from '../components/App';
import { Profile } from '../components/Profile';
import { Background } from '../components/Background';


const Index: React.VFC = () => {
  const title = "me"
  const description = "about myself"
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="Description" content={description} />
        <title>{title}</title>
      </Head>
      <App>
        <Background />
        <Profile />
      </App>
    </>
  );
};

export default Index;
