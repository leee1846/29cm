import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import Layout from '@styles/Layout';
import GlobalStyles from '@styles/GlobalStyles';
import queryClient from '@queries/query';
import MainRoute from './pages/MainRoute';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <MainRoute />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
