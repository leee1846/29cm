import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import Layout from '@styles/Layout';
import GlobalStyles from '@styles/GlobalStyles';
import MainRoute from './pages/MainRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <MainRoute />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
