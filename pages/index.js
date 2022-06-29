import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/modules/home-page/Main';
import TopCreators from '../components/modules/home-page/TopCreators';
import Popular from '../components/modules/home-page/Popular';
import Description from '../components/modules/home-page/Description';
import HotBid from '../components/modules/home-page/HotBid';
import HotCollections from '../components/modules/home-page/HotCollections';
import Discover from '../components/modules/home-page/Discover';

import { useMoralis, useMoralisQuery } from 'react-moralis';
import { useEffect } from 'react';

const style = {
  innerContent: ``,
  outer: `overflow-hidden`
};

export default function Home({ creators, latestUploadCreators, popular, hotBids, hotCollections }) {
  const { web3, isWeb3Enabled, web3EnableError, enableWeb3, isInitialized, account, user } = useMoralis();
  const { fetch } = useMoralisQuery('_User', (query) => query.equalTo('objectId', 'GHZKO16CMD3rJaHV9Lc58yUr'), [], {
    autoFetch: false
  });
  /* const { fetch } = useMoralisQuery('Collections', (query) => query.find(), [], {
    autoFetch: false
  }); */

  const objectIdQuery = async () => {
    await fetch({
      onSuccess: (user) => {
        console.log('USER: ', user);
      },
      onError: (error) => {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    if (isInitialized) {
      console.log('ACCOUNT: ', account);
      objectIdQuery();
    }
  }, [account]);

  return (
    <>
      <div className={style.outer}>
        <Header />
        <div className={style.innerContent}>
          <Main />
          <TopCreators />
          <Popular />
          <HotBid />
          <HotCollections />
          <Discover />
          <Description />
        </div>
        <Footer />
      </div>
    </>
  );
}
