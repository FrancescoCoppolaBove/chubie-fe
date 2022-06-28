import Footer from '../components/Footer';
import Header from '../components/Header';
import EditProfile from '../components/modules/profile-edit-page/EditProfile';

const style = {
  innerContent: ``
};

const EditProfilePage = () => {
  return (
    <>
      <Header />
      <div className={style.innerContent}>
        <EditProfile />
      </div>
      <Footer />
    </>
  );
};

export default EditProfilePage;
