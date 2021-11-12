import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Head } from '../components/Head';
import { App } from '../components/App';
import { Profile } from '../components/Profile';
import { Background } from '../components/Background';


const Index: React.VFC = () => {
  const title = "me"
  const description = "about myself"
  return (
    <HelmetProvider>
      <Head title={title} description={description} />
      <App>
        <Background />
        <Profile />
      </App>
    </HelmetProvider>
  );
};

export default Index;
