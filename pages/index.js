import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/modules/home-page/Main';
import TopCreators from '../components/modules/home-page/TopCreators';
import Popular from '../components/modules/home-page/Popular';
import Description from '../components/modules/home-page/Description';
import HotBid from '../components/modules/home-page/HotBid';
import HotCollections from '../components/modules/home-page/HotCollections';
import Discover from '../components/modules/home-page/Discover';

const style = {
  innerContent: ``,
  outer: `overflow-hidden`
};

export default function Home({ creators, latestUploadCreators, popular, hotBids, hotCollections }) {
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
