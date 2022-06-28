import { Button } from '@mui/material';
import Options from './Options/Options';
import { useState } from 'react';
import Users from './Users/Users';
import Control from './Control/Control';

const navLinks = ['Info', 'Owners', 'History', 'Purchases'];

const categories = [{ category: 'black', content: 'time nft' }];

const users = [
  {
    name: 'Raquel Will',
    position: 'Owner',
    avatar: '/images/avatar-creator.jpeg',
    reward: '/images/reward-1.svg'
  },
  {
    name: 'Selina Mayert',
    position: 'Creator',
    avatar: '/images/avatar-creator.jpeg'
  }
];

const style = {
  itemSection: `py-[6rem]`,
  itemCenter: `max-w-7xl mx-auto flex w-full px-[5rem]`,
  itemBg: `relative grow self-start mr-[6rem]`,
  itemPreview: `relative`,
  itemCategories: `absolute top-[1.5rem] left-[1.5rem] flex flex-wrap mt-[-0.5rem] ml-[-0.5rem]`,
  itemCategory: `inline-block `,
  blackLabel: `bg-[#23262F] px-[0.5rem] rounded-[0.25rem] text-[0.75rem] leading-[1.625rem] font-bold uppercase text-[#FCFCFD] mt-[0.5rem] ml-[0.5rem]`,
  previewPhoto: `w-full rounded-[1rem]`,
  itemDetails: `flex flex-col shrink-0 w-[24rem]`,
  itemTitle: `mb-[0.5rem] text-[2.5rem] leading-[1.2] font-dm-sans font-bold`,
  itemCost: `flex items-center mb-[2.5rem]`,
  itemPrice: `mr-[0.5rem] last:mr-0 inline-block px-[0.5rem] rounded-[0.25rem] font-semibold text-[1rem] leading-[1.875rem]`,
  itemPriceGreen: `shadow-[inset_0_0_0_2px_#45b26b] text-brand-green`,
  itemPriceBlack: `shadow-[inset_0_0_0_2px_#353945] text-[#FCFCFD]`,
  itemCounter: `font-dm-sans text-[1rem] font-semibold leading-[1] text-[#777E90]`,
  itemText: `mb-[2.5rem] text-[1rem] leading-[1.5] text-[#777E90]`,
  itemTabs: `mb-[2rem]`,
  nav: `shadow-[inset_0_0_0_2px_#353945] items-center flex mb-[2rem] p-[0.375rem] rounded-[1.25rem]`,
  itemLinkBtn: `mr-[0.5rem] h-[1.875rem] last:mr-0 bg-none font-dm-sans text-[0.875rem] leading-[1.14286] font-semibold text-[#777E90] transition-all duration-200 hover:bg-transparent hover:text-[#E6E8EC]`,
  active: `bg-[#FCFCFD] text-[#23262F] hover:text-[#23262F] hover:bg-[#FCFCFD]`
};

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={style.itemSection}>
        <div className={style.itemCenter}>
          <div className={style.itemBg}>
            <div className={style.itemPreview}>
              <div className={style.itemCategories}>
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.category === 'black' ? style['blackLabel'] : ''} ${style.itemCategory}`}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
              <img className={style.previewPhoto} src="/images/nft-preview.jpeg" alt="preview nft" />
            </div>
            <Options />
          </div>
          <div className={style.itemDetails}>
            <h1 className={style.itemTitle}>The amazing art</h1>
            <div className={style.itemCost}>
              <div className={`${style.itemPrice} ${style.itemPriceGreen}`}>2.5 BNB</div>
              <div className={`${style.itemPrice} ${style.itemPriceBlack}`}>$4,428.87</div>
              <div className={style.itemCounter}>10 in stock</div>
            </div>
            <div className={style.itemText}>
              This NFT Card will give you Access to Special Airdrops. To learn more about it please visit
            </div>
            <div className={style.itemTabs}>
              <div className={style.nav}>
                {navLinks.map((navItem, index) => {
                  const className = activeIndex === index ? 'active' : null;
                  return (
                    <Button
                      onClick={() => setActiveIndex(index)}
                      className={`${style.itemLinkBtn} ${style[className]}`}
                      key={index}
                    >
                      {navItem}
                    </Button>
                  );
                })}
              </div>
            </div>
            <Users className={style.itemUsers} items={users} />
            <Control className={style.itemControl} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
