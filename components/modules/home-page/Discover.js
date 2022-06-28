import CloseIcon from '@mui/icons-material/Close';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  navFilters,
  optionsLikes,
  optionsPrice,
  optionsCreator,
  options,
  optionsRangeCurrency
} from '../../../const/const';

import ChubieCard from '../../ui/Card/ChubieCard';
import ChubieInput from '../../ui/Input/ChubieInput';
import ChubieSelect from '../../ui/Select/ChubieSelect';

const style = {
  discoverSection: `py-[8rem]`,
  discoverCenter: `max-w-7xl mx-auto items-center w-full`,
  discoverTitle: `mb-[4rem] text-[2.5rem] leading-[1.2] font-dm-sans font-bold`,
  discoverTop: `relative flex justify-between mb-[2rem] items-center`,
  discoverNav: `flex items-center justify-center`,
  active: `bg-[#FCFCFD] text-[#23262F]`,
  discoverButtonNav: `my-0 mx-[0.375rem] py-[0.375rem] px-[0.75rem] rounded-[0.875rem] bg-none font-dm-sans text-[0.875rem] leading-[1.14286] font-bold text-[#777E90] capitalize transition-all duration-200 hover:text-[#E6E8EC] hover:bg-transparent`,
  discoverButtonFilters: `relative flex items-center justify-center pl-[1.5rem] bg-[#3772FF] text-[#FCFCFD] font-dm-sans shrink-0 text-[1rem] leading-[3rem] rounded-[1.5rem] h-[3rem] hover:bg-[#3772FF]`,
  discoverIconOpenFilter: `flex items-center justify-center w-[3.25rem]`,
  discoverFilters: `border-t-[1px] border-[#353945] py-[2rem] transition-all duration-[300ms]`,
  discoverSorting: `flex flex-wrap py-[-1rem] pt-[-2rem]`,
  discoverCell: `flex-[0_0_calc(20%-32px)] max-w-[calc(20% - 32px)] my-[1rem] my-[2rem]`,
  discoverPriceCell: `flex-[0_0_calc(15%-32px)] max-w-[calc(15% - 32px)] my-[1rem] my-[2rem]`,
  borderCell: `border-r-[1px] border-r-[#353945]`,
  discoverField: ``,
  discoverFieldLabel: `mb-[0.625rem] text-[0.75rem] uppercase leading-[1] font-bold text-[#B1B5C3] ml-[0.625rem]`,
  selectFilter: `w-[13rem]`,
  selectFilterPrice: `w-[7rem]`,
  discoverInputPrice: `w-[7rem]`,
  discoverInfiniteScroll: ``,
  bidCard: `bid-card flex flex-col flex-[0_0_calc(25%-2rem)] max-w-[calc(25%-2rem) mt-[2rem] mx-[1rem]`,
  discoverBtns: `text-center mt-[2rem]`
};

const Discover = () => {
  const [data, setData] = useState({});
  const [minPrice, setMinPriceValue] = useState(null);
  const [maxPrice, setMaxPriceValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rangeCurrency, setRangeCurrencyValue] = useState('eur');
  const [value, setValue] = useState('recently');
  const [price, setPriceValue] = useState('lowest');
  const [likes, setLikesValue] = useState('mostLiked');
  const [creator, setCreatorValue] = useState('verified');
  const [nfts, setNfts] = useState([]);
  const [stateNav, setStateNav] = useState(0);
  const [openFilters, setOpenFilters] = useState(false);

  const loadEightNfts = () => {
    const eightNfts = [];
    axios.get(`/api/discover?limit=8&page=${currentPage}`).then(({ data }) => {
      data.data.forEach((nft) => eightNfts.push(nft));
      setNfts((nfts) => [...nfts, ...eightNfts]);
      setData(data);
    });
    setCurrentPage((currentPage += 1));
  };

  const handleLoadMore = (e) => {
    loadEightNfts();
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

  const handleChangeRangeCurrency = (event) => {
    setRangeCurrencyValue(event.target.value);
  };

  const handleChangeMinPrice = (event) => {
    setMinPriceValue(event.target.value);
  };

  const handleChangeMaxPrice = (event) => {
    setMaxPriceValue(event.target.value);
  };

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
                <ChubieSelect
                  className={style.selectFilter}
                  options={optionsPrice}
                  value={price}
                  handleChange={handleChangePrice}
                />
              </div>
            </div>
            <div className={style.discoverCell}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Likes</div>
                <ChubieSelect
                  className={style.selectFilter}
                  options={optionsLikes}
                  value={likes}
                  handleChange={handleChangeLikes}
                />
              </div>
            </div>
            <div className={`${style.discoverCell} ${style.borderCell}`}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Creator</div>
                <ChubieSelect
                  className={style.selectFilter}
                  options={optionsCreator}
                  value={creator}
                  handleChange={handleChangeCreator}
                />
              </div>
            </div>
            <div className={`${style.discoverPriceCell}`}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Price</div>
                <ChubieSelect
                  className={style.selectFilterPrice}
                  options={optionsRangeCurrency}
                  value={rangeCurrency}
                  handleChange={handleChangeRangeCurrency}
                />
              </div>
            </div>
            <div className={style.discoverPriceCell}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Min Price</div>
                <ChubieInput
                  className={style.discoverInputPrice}
                  type="text"
                  value={minPrice}
                  handleChange={handleChangeMinPrice}
                />
              </div>
            </div>
            <div className={style.discoverPriceCell}>
              <div className={style.discoverField}>
                <div className={style.discoverFieldLabel}>Max Price</div>
                <ChubieInput
                  className={style.discoverInputPrice}
                  type="text"
                  value={maxPrice}
                  handleChange={handleChangeMaxPrice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={style.discoverList}>
          <div className={style.discoverSorting}>
            {nfts && nfts.length
              ? nfts.map((collection, index) => {
                  return (
                    <div key={index} className={style.bidCard}>
                      <ChubieCard
                        nftImage={collection.nftImage}
                        favorite={collection.favorite}
                        link={'/'}
                        title={collection.title}
                        price={collection.price}
                        inStock={collection.inStock}
                        highestBid={collection.highestBid}
                      ></ChubieCard>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        {data.totalItems !== nfts.length && (
          <div className={style.discoverBtns}>
            <Button onClick={handleLoadMore} variant="secondary">
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Discover;
