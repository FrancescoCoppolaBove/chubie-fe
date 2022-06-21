import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Upload from '../../components/upload-page/Upload';

const style = {
  outer: `overflow-hidden`
};

const UploadPage = () => {
  return (
    <>
      <div className={style.outer}>
        <Header />
        <div className={style.innerContent}>
          <Upload />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UploadPage;
