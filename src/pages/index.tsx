import React from 'react';
import { Head } from '../components/Head';
import { App } from '../components/App';
import { Profile } from '../components/Profile';
import { Background } from '../components/Background';


const Index: React.VFC = () => {
  const title = "me"
  const description = "about myself"
  return (
    <>
      <Head title={title} description={description} />
      <App>
        <Profile />
        <Background />
      </App>
    </>
  );
};

export default Index;
