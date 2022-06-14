import ChubieSelect from '../Select/ChubieSelect';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

const style = {
  discoverSection: `py-[8rem]`,
  discoverCenter: `max-w-7xl mx-auto items-center w-full`,
  discoverTitle: `mb-[4rem] text-[2.5rem] leading-[1.2] font-dm-sans font-bold`,
  discoverTop: `relative flex justify-between mb-[2rem] items-center`,
  discoverNav: `flex items-center justify-center`,
  active: `bg-[#FCFCFD] text-[#23262F]`,
  discoverButtonNav: `my-0 mx-[0.375rem] py-[0.375rem] px-[0.75rem] rounded-[0.875rem] bg-none font-dm-sans text-[0.875rem] leading-[1.14286] font-bold text-[#777E90] capitalize transition-all duration-200 hover:text-[#E6E8EC] hover:bg-transparent`,
  discoverButtonFilters: `relative flex items-center justify-center pl-[1.5rem] bg-[#3772FF] text-[#FCFCFD] font-dm-sans shrink-0 text-[1rem] leading-[3rem] rounded-[1.5rem] h-[3rem] hover:bg-none`,
  discoverIconOpenFilter: `flex items-center justify-center w-[3.25rem]`,
  discoverFilters: `border-t-[1px] border-[#353945] py-[2rem] transition-all duration-[300ms]`,
  discoverSorting: `flex flex-wrap py-[-1rem] pt-[-2rem]`,
  discoverCell: `flex-[0_0_calc(25%-32px)] max-w-[calc(25% - 32px)] my-[1rem] my-[2rem]`,
  discoverField: ``,
  discoverFieldLabel: `mb-[0.625rem] text-[0.75rem] uppercase leading-[1] font-bold text-[#B1B5C3] ml-[0.625rem]`
};

const Discover = () => {
  let currentOffset = 0;
  const [value, setValue] = useState('recently');
  const [price, setPriceValue] = useState('lowest');
  const [likes, setLikesValue] = useState('mostLiked');
  const [creator, setCreatorValue] = useState('verified');
  const [nfts, setNfts] = useState([]);
  const [stateNav, setStateNav] = useState(0);
  const [openFilters, setOpenFilters] = useState(false);

  const loadEightNfts = () => {
    const eightNfts = [];
    axios.get(`http://localhost:3001/discover?limit=8&page=${currentOffset}`).then(({ data }) => {
      data.bids.forEach((nft) => eightNfts.push(nft));
      setNfts((nfts) => [...nfts, ...eightNfts]);
    });
    currentOffset += 8;
  };

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeCreator = (event) => {
    setCreatorValue(event.target.value);
  };

  const handleClickButton = (event, index) => {
    setStateNav(index);
  };

  const handleChangeLikes = (event) => {
    setLikesValue(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPriceValue(event.target.value);
  };

  const optionsLikes = [
    { value: 'mostLiked', description: 'Most liked' },
    { value: 'leastLiked', description: 'Least liked' }
  ];

  const optionsPrice = [
    { value: 'lowest', description: 'The lowest price' },
    { value: 'highest', description: 'Highest price' }
  ];

  const optionsCreator = [
    { value: 'verified', description: 'Verified only' },
    { value: 'all', description: 'All' },
    { value: 'mostLiked', description: 'Most liked' }
  ];

  const navFilters = [
    { value: 'all', description: 'All items' },
    { value: 'art', description: 'Art' },
    { value: 'game', description: 'Game' },
    { value: 'photography', description: 'Photography' },
    { value: 'music', description: 'Music' },
    { value: 'video', description: 'Video' }
  ];

  const options = [
    { value: 'recently', description: 'Recently added' },
    { value: 'long', description: 'Long added' }
  ];

  useEffect(() => {
    loadEightNfts();
  }, []);

  return (
    <section className={style.discoverSection}>
      <div className={style.discoverCenter}>
        <h3 className={style.discoverTitle}>Discover</h3>
        <div className={style.discoverTop}>
          <ChubieSelect options={options} value={value} handleChange={handleChange} />
          <div className={style.discoverNav}>
            {navFilters.map((filter, index) => {
              const className = stateNav === index ? 'active' : null;
              return (
                <Button
                  key={index}
                  onClick={(e) => handleClickButton(e, index)}
                  className={`${style.discoverButtonNav} ${style[className]}`}
                >
                  {filter.description}
                </Button>
              );
            })}
          </div>
          {/* TODO: NAV FOR MOBILE */}
          {/* <ChubieSelect></ChubieSelect> */}
          <Button className={style.discoverButtonFilters} onClick={handleOpenFilters}>
            Filters
            {!openFilters ? (
              <FilterAltOutlinedIcon className={style.discoverIconOpenFilter} />
            ) : (
              <CloseIcon className={style.discoverIconOpenFilter} />
            )}
          </Button>
        </div>
        <div className={`${style.discoverFilters} ${openFilters ? 'block opacity-100' : 'hidden opacity-0'}`}>
          <div className={style.discoverSorting}>
            <div className={style.discoverCell}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Price</div>
                <ChubieSelect options={optionsPrice} value={price} handleChange={handleChangePrice} />
              </div>
            </div>
            <div className={style.discoverCell}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Price</div>
                <ChubieSelect options={optionsLikes} value={likes} handleChange={handleChangeLikes} />
              </div>
            </div>
            <div className={style.discoverCell}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Price</div>
                <ChubieSelect options={optionsCreator} value={creator} handleChange={handleChangeCreator} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.discoverList}>
          <div className={style.discoverSorting}>
            {/* <InfiniteScroll
              pageStart={0}
              loadMore={loadEightNfts}
              hasMore={true || false}
              loader={
                <div className="loader" key={0}>
                  Loading...
                </div>
              }
              useWindow={false}
            ></InfiniteScroll> */}
          </div>
        </div>
        <div className={style.discoverBtns}></div>
      </div>
    </section>
  );
};

export default Discover;
