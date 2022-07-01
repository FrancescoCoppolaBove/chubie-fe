import * as React from 'react';

import PropTypes from 'prop-types';
import Head from 'next/head';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { MoralisProvider } from 'react-moralis';

import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  if (!process.env.NEXT_PUBLIC_APP_ID || !process.env.NEXT_PUBLIC_SERVER_URL) {
    return (
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <h3>Moralis App_ID and Server_ID has not been set:</h3>
          <p>
            Follow the steps on the{' '}
            <a rel="noreferrer" href="https://docs.moralis.io/getting-started/quick-start" target="_blank">
              Moralis documentation
            </a>{' '}
            to create a new Moralis project. Then find your application&apos;s app id and server id and paste them in a
            root <b>.env</b> file for both <b>.env.development</b> and <b>.env.production</b> like so:
          </p>
          <pre>
            <code>
              MORALIS_APPLICATION_ID=&apos;[APP_ID]&apos;
              <br />
              MORALIS_SERVER_ID=&apos;[SERVER_ID]&apos;
            </code>
          </pre>
        </ThemeProvider>
        {/* <Component {...pageProps} /> */}
      </CacheProvider>
    );
  }
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID || ''} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL || ''}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        </ThemeProvider>
        {/* <Component {...pageProps} /> */}
      </CacheProvider>
    </MoralisProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};
