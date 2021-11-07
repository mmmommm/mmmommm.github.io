import React from 'react';
import { Head } from '../components/Head';
import { App } from '../components/App';
import { Profile } from '../components/Profile';


const Index: React.VFC = () => {
  const title = "me"
  const description = "about myself"
  return (
    <>
      <Head title={title} description={description} />
      <App>
        <Profile />
      </App>
    </>
  );
};

export default Index;
