import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/home-page/Main';

const style = {
  innerContent: ``
};

export default function Home() {
  return (
    <div className="main-wrapper">
      <>
        <Header />
        <div className={style.innerContent}>
          <Main />
        </div>
        <Footer />
      </>
    </div>
  );
}
