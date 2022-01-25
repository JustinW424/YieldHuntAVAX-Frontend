import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useFontObserver } from './hooks/useFontObserver';

import { Routes } from './pages/Routes';
import { lightTheme } from './styles/theme';

import { WalletModalProvider } from './context/WalletModalContext';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
const loading = <div>Loading ...</div>;

const getLibrary = (provider: any): Web3 => new Web3(provider);

function App() {
  const fontLoaded = useFontObserver();
  return (
    <>
      {!fontLoaded && loading}
      <Suspense fallback={loading}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <ThemeProvider theme={lightTheme}>
            <WalletModalProvider>
              <Router>
                  <Routes />
              </Router>
            </WalletModalProvider>
          </ThemeProvider>
        </Web3ReactProvider>
      </Suspense>
    </>
  );
}

export default App;
