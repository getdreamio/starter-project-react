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

      <p className="mb-2 mt-8">
       This project is stubbed out with auth0 for the identity provider for testing purposes.
      </p>
      <p>Login Credentials: testuser@dream.mf / Password123</p>
    </>
  );
}

export default IndexPage;
