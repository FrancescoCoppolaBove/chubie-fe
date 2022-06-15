import Catalog from '../components/modules/discover-page/Catalog';
import Footer from '../components/Footer';
import Header from '../components/Header';

const style = {};

const DiscoverPage = () => {
  return (
    <>
      <Header />
      <div className={style.innerContent}>
        <Catalog />
      </div>
      <Footer />
    </>
  );
};

export default DiscoverPage;
