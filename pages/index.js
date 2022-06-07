import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/home-page/Main';
import TopCreators from '../components/home-page/TopCreators';
import { getTopCreators, getLatestUploadCreators, getPopularCreators } from '../lib/fetch-utils';
import Popular from '../components/home-page/Popular';
import Description from '../components/home-page/Description';
import { useEffect } from 'react';

const style = {
  innerContent: ``
};

export default function Home({ creators, latestUploadCreators, popular }) {
  return (
    <div className="main-wrapper">
      <>
        <Header />
        <div className={style.innerContent}>
          <Main />
          <TopCreators creators={creators} latestUploadCreators={latestUploadCreators} />
          <Popular popular={popular} />
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
  return { props: { creators, latestUploadCreators, popular } };
};
