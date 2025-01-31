import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";
import Layout from './components/layout';

// Tailwindcss theme
import "./assets/index.css";

// Dream features & configuration
import { DreamMFLogListener } from '@dream.mf/logging';
import setupLogging from './config/setup-logging';
import { DreamMFAuthProvider } from "@dream.mf/oidc";
import setupAuthentication from './config/setup-auth';

const App = () => {

  return (
    <BrowserRouter>
      <DreamMFLogListener config={setupLogging()} />
      <DreamMFAuthProvider config={setupAuthentication()}>
        <Layout>
          <Routing />
        </Layout>
      </DreamMFAuthProvider>
    </BrowserRouter>
  );
}

export default App;
