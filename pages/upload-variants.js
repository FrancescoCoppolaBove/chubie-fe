import Footer from '../components/Footer';
import Header from '../components/Header';
import UploadVariants from '../components/modules/upload-variants-page/UploadVariants';

const style = {};

const UploadVariantsPage = () => {
  return (
    <>
      <Header />
      <div className={style.innerContent}>
        <UploadVariants />
      </div>
      <Footer />
    </>
  );
};

export default UploadVariantsPage;
