import Footer from '../components/Footer';
import Header from '../components/Header';
import Faq from '../components/how-it-works-page/Faq';

const style = {};

const HowItWorksPage = () => {
  return (
    <>
      <Header />
      <div className={style.innerContent}>
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default HowItWorksPage;
