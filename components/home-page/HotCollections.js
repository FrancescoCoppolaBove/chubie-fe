import Slider from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';
import NextLink from 'next/link';
import Avatar from '@mui/material/Avatar';

const style = {
  collectionsSection: `bg-[#23262F] py-[8rem] antialiased`,
  collectionCenter: `max-w-7xl mx-auto flex flex-col w-full px-[5rem]`,
  collectionWrapper: `relative`,
  collectionTitle: `mb-[5rem] text-[2.5rem] font-dm-sans leading-[1.2] font-bold`,
  collectionInner: `w-full`,
  collectionItem: `collection-item px-[1rem] cursor-pointer`,
  collectionGallery: `flex flex-wrap mx-[-0.25rem] mb-[1rem] mt-[-0.5rem]`,
  collectionPreview: `first:flex-[0_0_calc(100%-8px)] first:w-[calc(100%-8px)] mt-[0.5rem] mx-[0.25rem] flex-[0_0_calc(33.333%-8px)] w-[calc(33.333% - 8px)]`,
  collectionImage: `w-full rounded-[0.5rem] block`,
  collectionSubtitle: `collection-subtitle text-[#FCFCFD] mb-[0.5rem] text-[1.5rem] leading-[1.33333] font-semibold transition-color duration-200`,
  collectionLine: `flex items-center`,
  collectionUser: `text-[#E6E8EC] flex items-center mr-auto`,
  collectionAvatar: `w-[2rem] h-[2rem] shrink-0 mr-[0.75rem]`,
  collectionAuthorName: `font-bold`,
  collectionCounter: `shadow-[inset_0_0_0_2px_#353945] text-[#FCFCFD] shrink-0 inline-block px-[0.5rem] leading-[1.563rem] font-bold uppercase rounded-[0.25rem]`
};

const HotCollections = ({ hotCollections }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1
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
    <section className={style.collectionsSection}>
      <div className={style.collectionCenter}>
        <div className={style.collectionWrapper}>
          <h3 className={style.collectionTitle}>Hot collections</h3>
          <div className={style.collectionInner}>
            <SliderStyle />
            <Slider {...settings}>
              {hotCollections.hotCollections.map((collection, index) => {
                return (
                  <a key={index} href={`/${collection.id}`} className={style.collectionItem}>
                    <div className={style.collectionGallery}>
                      {collection.nftImages.map((nftImage, index) => {
                        return (
                          <div key={index} className={style.collectionPreview}>
                            <img className={style.collectionImage} alt="nft image" src={nftImage.src} />
                          </div>
                        );
                      })}
                    </div>
                    <div className={style.collectionSubtitle}>{collection.collectionTitle}</div>
                    <div className={style.collectionLine}>
                      <div className={style.collectionUser}>
                        <Avatar
                          className={style.collectionAvatar}
                          alt="creator"
                          src={collection.author.avatar}
                        ></Avatar>
                        <div className={style.collectionAuthor}>
                          By{' '}
                          <span className={style.collectionAuthorName}>
                            {collection.author.name + ' ' + collection.author.surname}
                          </span>
                        </div>
                      </div>
                      <div className={style.collectionCounter}>{collection.inStock + ' items'}</div>
                    </div>
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
