import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.scss';
import { MoralisProvider } from 'react-moralis';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <MoralisProvider
      serverUrl="https://lul2x6agt3ev.usemoralis.com:2053/server"
      appId="qAxLA36EWv2KHM7nGWxdEbuTQ5Y4U6zDZHyzNJHW"
    >
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
