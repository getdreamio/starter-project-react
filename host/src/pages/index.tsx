import React from 'react';
import { Helmet } from 'react-helmet';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Dream.mf | Home</title>
      </Helmet>
      <div className="p-4 text-center">
        <img src="/dream_logo.png" alt="Logo" style={{ height: 200 }} className="mx-auto" />
      </div>
    </>
  );
}

export default IndexPage;
