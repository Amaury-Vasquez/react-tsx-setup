import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from '../Layout';
import { FallbackScreen } from '../FallbackScreen';
import { GlobalStyles } from '../styles/GlobalStyles';

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Layout>
        <Suspense fallback={<FallbackScreen />}>
          <Routes>
            <Route element={<FallbackScreen />} path="/" />
          </Routes>
        </Suspense>
      </Layout>
    </HelmetProvider>
  );
};

export default App;
