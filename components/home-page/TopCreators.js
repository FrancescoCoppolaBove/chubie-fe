import NextLink from 'next/link';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { fromWeiToEth } from '../../utils/utils';
import Button from '@mui/material/Button';

const style = {
  section: `py-[8rem]`,
  wrapper: `max-w-7xl mx-auto items-center flex w-full`,
  selectionRow: `flex flex-grow border-r-[1px] border-r-[#E6E8EC] mr-[2rem]`,
  card: ``,
  containerLittleCreators: `flex flex-row mb-[1.875rem] text-[#FCFCFD] mb-[1.875rem] items-center cursor-pointer grow`,
  primaryCreator: `primary-creator cursor-pointer pr-[2rem] flex-grow`,
  imgContainer: `img-container overflow-hidden relative rounded-[0.75rem]  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full z-[2] before:bg-image-black before:opacity-0 before:invisible`,
  imgBigContainer: `mb-[2rem]`,
  imgLittleContainer: `w-[10rem] mr-[1.5rem] flex-grow`,
  imgPrimary: `img-primary`,
  containerIcon: `icon-container absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[3rem] h-[3rem] z-[10] bg-[#fcfcfd] rounded-[50%] flex items-center justify-center opacity-0 invisible`,
  arrowIcon: `w-[2rem] text-[#777e91]`,
  creatorContainer: `flex flex-row justify-between items-center`,
  info: `flex flex-col`,
  leftSide: `flex flex-row items-center`,
  highestBid: `flex flex-col`,
  avatarPrimary: `w-[3rem] h-[3rem] mr-[1rem]`,
  title: `text-[1.5rem] font-poppins font-semibold leading-[1.3333]`,
  secondTitle: `font-poppins text-[1rem] leading-[1.5] font-medium`,
  userInfoContainer: `flex items-center gap-5 mb-[1rem] mt-[1rem]`,
  inStock: `text-[#E6E8EC] font-medium font-poppins text-[0.875rem]`,
  label: `text-[0.75rem] font-poppins text-[#777E90] leading-[1.66667]`,
  value: `inline-block font-poppins p-[0.438rem] text-[#45B26B] uppercase leading-[1] font-bold text-[0.75rem] rounded-[0.25rem] shadow-[inset_0_0_0_2px_#45b26b]`,
  otherCreators: `flex-[0_0_42.2%] flex-col w-2/5 pr-[0.875rem]`,
  sideBar: `w-[14rem] shrink-0`,
  infoSidebar: `text-[0.75rem] leading-[1.66667] font-semibold text-[#777E90] font-poppins`,
  listSidebar: `m-0 p-0 mb-[0.5rem]`,
  userSidebar: `flex items-center py-[1.5rem] px-0 border-b-[1px] border-b-[#353945] last:border-b-[0]`,
  avatarSidebar: `shrink-0 w-[3.5rem] h-[3.5rem] mr-[1rem]`,
  descriptionSidebar: `grow flex flex-col`,
  nameSidebar: `mb-[0.125rem] font-medium`,
  priceSidebar: `inline-block p-[0.438rem] shadow-[inset_0_0_0_2px_#45b26b] rounded-[0.25rem] text-[0.75rem] leading-[1] uppercase text-[#45B26B] font-bold w-[5rem] text-center`,
  arrowIconSidebarButton: `mt-[0.5rem]`,
  infoContainer: `grow-1`
};

const TopCreators = ({ creators, latestUploadCreators }) => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.selectionRow}>
          <NextLink href="/">
            <div className={style.primaryCreator}>
              <div className={`${style.imgContainer} ${style.imgBigContainer}`}>
                <div className={style.containerIcon}>
                  <ArrowRightAltIcon className={style.arrowIcon} />
                </div>
                <img className={style.imgPrimary} alt="nft image" src={creators.creators[0]?.nftImage}></img>
              </div>
              <div className={style.creatorContainer}>
                <div className={style.leftSide}>
                  <Avatar
                    className={style.avatarPrimary}
                    alt="creator avatar"
                    src={creators.creators[0]?.author.avatar}
                  />
                  <div className={style.info}>
                    <span className={style.title}>{creators.creators[0]?.title}</span>
                    <span className={style.inStock}>1 of {creators.creators[0]?.inStock}</span>
                  </div>
                </div>
                <div className={style.highestBid}>
                  <span className={style.label}>Highest bid</span>
                  <span className={style.value}>{fromWeiToEth(creators.creators[0]?.highestBid, 3) + ' BNB'}</span>
                </div>
              </div>
            </div>
          </NextLink>
          <div className={style.otherCreators}>
            {creators.creators.map((creator, index) => {
              if (index > 0) {
                return (
                  <NextLink href="/">
                    <div key={index} className={style.containerLittleCreators}>
                      <div className={`${style.imgContainer} ${style.imgLittleContainer}`}>
                        <div className={style.containerIcon}>
                          <ArrowRightAltIcon className={style.arrowIcon} />
                        </div>
                        <img className={style.imgPrimary} alt="nft image" src={creator?.nftImage}></img>
                      </div>
                      <div className={style.infoContainer}>
                        <span className={style.secondTitle}>{creator?.title}</span>
                        <div className={style.userInfoContainer}>
                          <Avatar alt="creator avatar" className={style.avatarSecondary} src={creator?.author.avatar} />
                          <span className={style.value}>{fromWeiToEth(creator?.highestBid, 3) + ' BNB'}</span>
                          <span className={style.stockSecondary}>1 of {creator?.inStock}</span>
                        </div>
                        <Button variant="secondary">Place a bid</Button>
                      </div>
                    </div>
                  </NextLink>
                );
              }
            })}
          </div>
        </div>
        <div className={style.sideBar}>
          <span className={style.infoSidebar}>Latest upload from creators</span>
          <div className={style.listSidebar}>
            {latestUploadCreators.creators.map((creator, index) => {
              return (
                <div key={index} className={style.userSidebar}>
                  <Avatar className={style.avatarSidebar} alt="creator avatar" src={creator.author.avatar} />
                  <div className={style.descriptionSidebar}>
                    <span className={style.nameSidebar}>
                      {creator.author.name} {creator.author.surname}
                    </span>
                    <span className={style.priceSidebar}>
                      {fromWeiToEth(creators.creators[0]?.highestBid, 3) + ' BNB'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <Button variant="secondary">
            Discover more <ArrowRightAltIcon className={style.arrowIconSidebarButton} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
