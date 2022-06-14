import Slider from 'react-slick';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NextLink from 'next/link';
import { fromWeiToEth } from '../../utils/utils';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import styled, { createGlobalStyle } from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useSWR from 'swr';
import { fetcher } from '../../lib/fetch-utils';
import Skeleton from '@mui/material/Skeleton';

const style = {
  hotSection: `py-[8rem]`,
  hotCenter: `max-w-7xl mx-auto flex flex-col w-full px-[5rem]`,
  hotTitle: `mb-[4rem] text-[2.5rem] leading-[1.2] font-dm-sans font-bold`,
  hotInner: `w-full`,
  bidSlide: `px-[1rem] flex h-full w-[256px]`,
  bidCard: `bid-card w-full h-full flex flex-col`,
  bidCardPreview: `relative rounded-[1rem] overflow-hidden`,
  cardControl: `card-control absolute z-[3] top-0 left-0 w-full h-full bg-[rgba(35,38,47,0.2)] rounded-[1rem] transition-all duration-300 opacity-0 invisible`,
  statusGreen: `absolute  top-[0.688rem] left-[0.5rem] bg-[#45B26B] inline-block px-[0.5rem] rounded-[0.25rem] leading-[1.625rem] font-bold uppercase text-[#FCFCFD]`,
  popularButton: `popular-button absolute top-[0.5rem] right-[0.5rem] w-[2rem] h-[2rem] shadow-[0px_8px_16px_rgb(15_15_15_/_20%)] rounded-[50%] bg-[#23262F] items-center justify-center flex`,
  favoriteBid: `favorite-bid-icon w-[1.25rem] h-[1.25rem] text-[#777E90] transition-all duration-200`,
  favoriteIconFull: `w-[1.25rem] h-[1.25rem] text-[#EF466F]`,
  bidButton: `absolute left-[50%] bottom-[1rem] translate-x-[-50%] h-[40px] px-[1rem] text-[0.875rem] min-w-[8.75rem] bg-[#3772FF] justify-center inline-flex shadow-none items-center font-dm-sans font-bold leading-[1] text-[#FCFCFD] transition-all duration-200 hover:bg-[#044eff] hover:shadow-none`,
  arrowIconSidebarButton: `ml-[0.938rem] w-[1.2rem] h-[1.2rem]`,
  bidImage: `bid-image block w-full`,
  cardLink: `text-[#FCFCFD] flex flex-col grow py-[1.25rem] cursor-pointer`,
  cardBody: `flex flex-col grow`,
  cardLine: `mb-[0.75rem] flex items-start last:justify-end`,
  cardTitle: `mr-[auto] pt-[0.063rem] text-[1rem] leading-[1.5] font-medium`,
  cardPrice: `shrink-0 ml-[0.5rem] px-[0.5rem] shadow-[inset_0_0_0_2px_#45b26b] text-[0.75rem] leading-[1.625rem] font-bold uppercase text-[#45B26B] rounded-[0.25rem]`,
  cardCounter: `text-[#E6E8EC]`,
  cardFoot: `border-t-[1px] border-t-[#353945] flex items-center justify-between mt-[0.75rem] pt-[0.75rem] text-[0.75rem] leading-[1.66667] text-[#777E90]`,
  cardStatusIcon: `text-[#777E90] w-[1.25rem] h-[1.25rem] mt-[-0.125rem] mr-[0.25rem]`,
  bidValue: `text-[#FCFCFD] font-semibold ml-[0.125rem]`
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
                      <div className={style.bidCardPreview}>
                        <img alt="nft image" src={bid.nftImage} className={style.bidImage} />
                        <div className={style.cardControl}>
                          <div className={style.statusGreen}>purchasing !</div>
                          <button className={style.popularButton}>
                            {bid.favorite === 'false' ? (
                              <FavoriteBorderIcon className={style.favoriteBid} />
                            ) : (
                              <FavoriteIcon className={style.favoriteIconFull} />
                            )}
                          </button>
                          <Button variant="secondary" className={style.bidButton}>
                            Place a bid <AutoGraphIcon className={style.arrowIconSidebarButton} />
                          </Button>
                        </div>
                      </div>
                      <NextLink href="/">
                        <div className={style.cardLink}>
                          <div className={style.cardBody}>
                            <div className={style.cardLine}>
                              <div className={style.cardTitle}>{bid.title}</div>
                              <div className={style.cardPrice}>{fromWeiToEth(bid.price, 3) + ' BNB'}</div>
                            </div>
                            <div className={style.cardLine}>
                              <div className={style.cardCounter}>{bid.inStock} in stock</div>
                            </div>
                          </div>
                          <div className={style.cardFoot}>
                            <div className={style.cardStatus}>
                              <CandlestickChartIcon className={style.cardStatusIcon} />
                              Highest bid
                              <span className={style.bidValue}>{fromWeiToEth(bid.highestBid, 3) + ' BNB'}</span>
                            </div>
                            <div className={style.cardBid}>
                              New bid <span className={style.emojFire}>🔥</span>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </NextLink>
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
