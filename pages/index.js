import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/home-page/Main';
import TopCreators from '../components/home-page/TopCreators';
import {
  getTopCreators,
  getLatestUploadCreators,
  getPopularCreators,
  getHotBids,
  getHotCollections
} from '../lib/fetch-utils';
import Popular from '../components/home-page/Popular';
import Description from '../components/home-page/Description';
import HotBid from '../components/home-page/HotBid';
import HotCollections from '../components/home-page/HotCollections';

const style = {
  innerContent: ``
};

export default function Home({ creators, latestUploadCreators, popular, hotBids, hotCollections }) {
  return (
    <div className="main-wrapper">
      <>
        <Header />
        <div className={style.innerContent}>
          <Main />
          <TopCreators creators={creators} latestUploadCreators={latestUploadCreators} />
          <Popular popular={popular} />
          <HotBid hotBids={hotBids} />
          <HotCollections hotCollections={hotCollections} />
          <Description />
        </div>
        <Footer />
      </>
    </div>
  );
}

export const getServerSideProps = async () => {
  const creators = await getTopCreators();
  const latestUploadCreators = await getLatestUploadCreators();
  const popular = await getPopularCreators();
  const hotBids = await getHotBids();
  const hotCollections = await getHotCollections();
  return { props: { creators, latestUploadCreators, popular, hotBids, hotCollections } };
};
