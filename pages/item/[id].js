import { useRouter } from 'next/router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Item from '../../components/modules/item-page/Item';

const ItemPage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Header />
      <div className="inner-content">
        <Item />
      </div>
      <Footer />
    </>
  );
};

export default ItemPage;
