import NextLink from 'next/link';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import React, { useEffect, useState } from 'react';

const style = {
  section: `pt-[10rem]`,
  wrapper: `max-w-7xl mx-auto items-center flex flex-col w-full`,
  topMain: `mb-[5rem] text-center`,
  claimText: `font-poppins uppercase leading-[1] text-[#777E90] font-bold text-[0.75rem]`,
  title: `text-[2.5rem] font-dm-sans text-brand-light font-bold mb-[1rem]`,
  bottomMain: `flex flex-col md:flex-row w-full`,
  nftImageContainer: `w-2/4 mr-[8rem]`,
  imageNft: `rounded-[1.25rem]`,
  infoCreate: `flex flex-col`,
  nameCreator: `text-[4rem] font-bold`,
  creatorInfo: `flex flex-row`,
  creatorProfile: `flex flex-row w-1/2 items-center`,
  infoPrice: `flex flex-row w-1/2 items-center`,
  containerFields: `ml-[1rem] flex flex-col`,
  creatorLabel: `text-[#777E90] heading-[1.66667] text-[0.75rem] font-poppins capitalize`,
  creatorField: `text-brand-light text-[0.875rem] font-poppins font-medium`,
  bidContainer: `py-[1.875rem] px-[1rem] flex flex-col text-center rounded-[1.5rem] bg-[#23262F] mt-[3rem]`,
  currentBid: `heading-[1.5] font-poppins text-[1rem] text-brand-light font-medium`,
  bnbPrice: `text-[3rem] heading-[1.66667] font-dm-sans font-bold`,
  usdPrice: `text-[1.5rem] text-[#777E90] font-poppins text-semi-bold mb-[1.5rem]`,
  timerHeader: `font-poppins font-medium text-[1rem] heading-[1.5]`,
  buttons: `flex flex-col mt-[4rem] gap-5`,
  buttonPrimary: `bg-[#3772FF]`,
  timerContainer: `flex flex-row justify-center gap-12`,
  time: `flex flex-col`,
  timeValue: `font-dm-sans text-[2rem] heading-[1.25] font-bold text-brand-light`,
  timeLabel: `font-poppins heading-[1.5] text-[1rem] text-[#777E90]`
};

const Main = () => {
  const [bidEndedTime, setBidEndedTime] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let year = new Date().getFullYear();
      const difference = +new Date(`${year}-10-1`) - +new Date();

      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);

      setHours(h);
      const m = Math.floor((difference / 1000 / 60) % 60);
      setMinutes(m);
      const s = Math.floor((difference / 1000) % 60);
      setSeconds(s);

      if (h <= 0 && m <= 0 && s <= 0) {
        setBidEndedTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.topMain}>
          <span className={style.claimText}>create, explore &amp; collect digital art nfts</span>
          <h3 className={style.title}>The new creative economy.</h3>
          <NextLink href="/search">
            <Button variant="secondary" className={`${style.buttonSecondary} ${style.searchButton}`}>
              Start your search
            </Button>
          </NextLink>
        </div>
        <div className={style.bottomMain}>
          <div className={style.nftImageContainer}>
            <img className={style.imageNft} alt="nft" src="/images/nft-preview.jpeg" />
          </div>
          <div className={style.infoCreate}>
            <h2 className={style.nameCreator}>Creator Name®</h2>
            <div className={style.creatorInfo}>
              <div className={style.creatorProfile}>
                <div className={style.photoCreator}>
                  <Avatar alt="image creator" src="/images/avatar-creator.jpeg" />
                </div>
                <div className={style.containerFields}>
                  <span className={style.creatorLabel}>Creator</span>
                  <span className={style.creatorField}>Enrico Cole</span>
                </div>
              </div>
              <div className={style.infoPrice}>
                <div className={style.photoCreator}>
                  <Avatar alt="image creator" src="/images/bnb-logo.png" />
                </div>
                <div className={style.containerFields}>
                  <span className={style.creatorLabel}>Instant price</span>
                  <span className={style.creatorField}>3.5 BNB</span>
                </div>
              </div>
            </div>
            <div className={style.bidContainer}>
              <span className={style.currentBid}>Current Bid</span>
              <span className={style.bnbPrice}>1.00 BNB</span>
              <span className={style.usdPrice}>$ 3,618.36</span>
              <span className={style.timerHeader}>Auction ending in</span>
              <div className={style.timer}>
                {bidEndedTime ? (
                  <>
                    <span>Bid Ended!</span>
                  </>
                ) : (
                  <>
                    <div className={style.timerContainer}>
                      <div className={style.time}>
                        <span className={style.timeValue}>{hours}</span>
                        <span className={style.timeLabel}>Hrs</span>
                      </div>
                      <div className={style.time}>
                        <span className={style.timeValue}>{minutes}</span>
                        <span className={style.timeLabel}>mins</span>
                      </div>
                      <div className={style.time}>
                        <span className={style.timeValue}>{seconds}</span>
                        <span className={style.timeLabel}>secs</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className={style.buttons}>
              <Button disabled={bidEndedTime} variant="primary" className={`${style.buttonPrimary} ${style.bidButton}`}>
                Place a bid
              </Button>
              <Button variant="secondary" className={`${style.buttonSecondary} ${style.viewItemButton}`}>
                View item
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
