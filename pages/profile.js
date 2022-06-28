import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/modules/profile-page/Profile';

const style = {
  innerContent: ``
};

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className={style.innerContent}>
        <Profile />
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
