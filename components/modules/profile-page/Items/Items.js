import ChubieCard from '../../../ui/Card/ChubieCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

const style = {
  profileItem: `block`,
  profileList: `flex flex-wrap mx-[-1rem] mt-[-2rem]`,
  profileCard: `bid-card flex-[0_0_calc(33.333%-2rem)] w-[calc(33.333%-2rem)] mx-[1rem] mt-[2rem]`,
  catalogBtn: `text-center mt-[2rem]`
};

const Items = ({ url }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsList, setItemsList] = useState([]);
  const [data, setData] = useState({});

  const loadSixElements = () => {
    const sixItems = [];

    axios.get(`${url}?limit=6&page=${currentPage}`).then(({ data }) => {
      data.data.forEach((item) => sixItems.push(item));
      setItemsList((itemsList) => [...itemsList, ...sixItems]);
      setData(data);
      setCurrentPage((currentPage += 1));
    });
  };

  useEffect(() => {
    loadSixElements();
  }, []);

  const handleLoadMore = () => {
    loadSixElements();
  };

  return (
    <>
      <div className={style.profileItem}>
        <div className={style.profileList}>
          {itemsList && itemsList.length
            ? itemsList.map((item, index) => (
                <div key={index} className={style.profileCard}>
                  <ChubieCard
                    nftImage={item.nftImage}
                    favorite={item.favorite}
                    link={'/'}
                    title={item.title}
                    price={item.price}
                    inStock={item.inStock}
                    highestBid={item.highestBid}
                  ></ChubieCard>
                </div>
              ))
            : null}
        </div>
        {data.totalItems !== itemsList.length && (
          <div className={style.catalogBtn}>
            <Button onClick={handleLoadMore} variant="secondary">
              Load more
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Items;
