import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {GlobalStyle} from "./GlobalStyle";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to folio!</title>
      </Head>
      <main className="app">
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
