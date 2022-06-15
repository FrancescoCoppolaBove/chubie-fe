import Skeleton from '@mui/material/Skeleton';
import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';
import useSWR from 'swr';

import { fetcher } from '../../../lib/fetch-utils';
import ChubieCard from '../../ui/Card/ChubieCard';

const style = {
  hotSection: `py-[8rem]`,
  hotCenter: `max-w-7xl mx-auto flex flex-col w-full px-[5rem]`,
  hotTitle: `mb-[4rem] text-[2.5rem] leading-[1.2] font-dm-sans font-bold`,
  hotInner: `w-full`,
  bidSlide: `px-[1rem] flex h-full w-[256px]`,
  bidCard: `bid-card w-full h-full flex flex-col`
};

const HotBid = () => {
  const { data, error } = useSWR('/api/hot-bids', fetcher);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  const SliderStyle = createGlobalStyle`
   &.slick-track {
    display: flex;
  }
  &.slick-slide {
      height: auto
  }
    `;

  return (
    <section className={style.hotSection}>
      <div className={style.hotCenter}>
        <h3 className={style.hotTitle}>Hot bid</h3>
        <div className={style.hotInner}>
          <SliderStyle />
          <Slider {...settings}>
            {!data ? (
              <Skeleton></Skeleton>
            ) : (
              data.bids.map((bid, index) => {
                return (
                  <div key={index} className={style.bidSlide}>
                    <div className={style.bidCard}>
                      <ChubieCard
                        nftImage={bid.nftImage}
                        favorite={bid.favorite}
                        link={'/'}
                        title={bid.title}
                        price={bid.price}
                        inStock={bid.inStock}
                        highestBid={bid.highestBid}
                      ></ChubieCard>
                    </div>
                  </div>
                );
              })
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HotBid;
