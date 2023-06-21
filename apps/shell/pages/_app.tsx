import { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStyles } from '@cx/ui';

import { queryClient } from '../services/queryClient';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>Web BFF</title>
        </Head>
        <main className="app">
          <GlobalStyles />
          <Component {...pageProps} />
        </main>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default CustomApp;
