import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '@cx/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Footer</title>
      </Head>
      <main className="app">
        <GlobalStyles />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
