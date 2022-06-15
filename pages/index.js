import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/home-page/Main';
import TopCreators from '../components/home-page/TopCreators';
import Popular from '../components/home-page/Popular';
import Description from '../components/home-page/Description';
import HotBid from '../components/home-page/HotBid';
import HotCollections from '../components/home-page/HotCollections';
import Discover from '../components/home-page/Discover';

const style = {
  innerContent: ``
};

export default function Home({ creators, latestUploadCreators, popular, hotBids, hotCollections }) {
  return (
    <>
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
    </>
  );
}
