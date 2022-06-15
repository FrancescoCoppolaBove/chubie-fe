import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import axios from 'axios';
import ChubieInput from '../../ui/Input/ChubieInput';
import { useState, useEffect } from 'react';
import ChubieSelect from '../../ui/Select/ChubieSelect';
import { optionsTime, navFilters } from '../../../const/const';
import CatalogForm from '../../forms/catalog-form/CatalogForm';
import { Skeleton } from '@mui/material';
import ChubieCard from '../../ui/Card/ChubieCard';

const style = {
  catalogSection: `py-[8rem]`,
  catalogInner: `max-w-7xl mx-auto flex flex-col w-full`,
  catalogTop: `border-b-[1px] border-b-[#353945] flex mb-[3rem] pb-[2rem] items-center`,
  catalogTitle: `mr-auto text-[1.5rem] leading-[1.33333]`,
  form: `relative w-[22rem] ml-[2rem] shrink-0`,
  timeSelect: `mr-auto`,
  searchButton: `absolute top-[1rem] right-[0.3rem] bottom-[1rem] bg-[#3772FF] w-[2rem] h-[2rem] hover:bg-[#044eff]`,
  inputSearch: `w-full border-[#353945] text-[#FCFCFD] h-[3rem] font-poppins transition-all duration-200 focus:border-[#111]`,
  searchIcon: `text-[#FCFCFD] w-[1.3rem] h-[1.3rem]`,
  discoverNav: `flex items-center justify-center`,
  discoverButtonNav: `my-0 mx-[0.375rem] py-[0.375rem] px-[0.75rem] rounded-[0.875rem] bg-none font-dm-sans text-[0.875rem] leading-[1.14286] font-bold text-[#777E90] capitalize transition-all duration-200 hover:text-[#E6E8EC] hover:bg-transparent`,
  active: `bg-[#FCFCFD] text-[#23262F]`,
  catalogWrapper: `grow-1 pl-[2rem]`,
  catalogList: `flex flex-wrap mt-[2rem] mx-[1rem]`,
  catalogBtn: `text-center mt-[2rem]`,
  catalogCard: `bid-card bg-[#23262F] flex-[0_0_calc(33.333%-2rem)] max-w-[calc(33.333%-2rem)] mt-[2rem] mx-[1rem] p-[0.75rem] shadow-[0px_32px_32px_rgb(31_47_70/12%)] rounded-[1.25rem]`,
  catalogSorting: `flex items-center mb-[3rem]`,
  catalogRow: `flex`,
  catalogFilters: `w-[16rem] shrink-0`
};

const Catalog = () => {
  const [data, setData] = useState({});
  const [catalogList, setCatalogListValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState(null);
  const [stateNav, setStateNav] = useState(0);
  const [formValue, setFormValue] = useState({
    likes: 'mostLiked',
    colors: 'all',
    creator: 'verified',
    priceCurrency: 'usd',
    minPrice: '',
    maxPrice: '',
    timeType: 'newest'
  });

  const loadNineCatalogItems = () => {
    const nineItems = [];

    axios.get(`/api/discover?limit=9&page=${currentPage}`).then(({ data }) => {
      data.data.forEach((item) => nineItems.push(item));
      setCatalogListValue((catalogList) => [...catalogList, ...nineItems]);
      setData(data);
    });
    setCurrentPage((currentPage += 1));
  };

  useEffect(() => {
    loadNineCatalogItems();
  }, []);

  const handleLoadMore = () => {
    loadNineCatalogItems();
  };

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClickNav = (event, index) => {
    setStateNav(index);
  };

  const handleFormChange = (e) => {
    const target = e.target;
    const { name, value } = target;
    setFormValue({ ...formValue, [name]: value });
  };

  const resetFilters = () => {
    setFormValue({
      likes: 'mostLiked',
      colors: 'all',
      creator: 'verified',
      priceCurrency: 'usd',
      minPrice: '',
      maxPrice: '',
      timeType: 'newest'
    });
  };

  return (
    <section className={style.catalogSection}>
      <div className={style.catalogInner}>
        <div className={style.catalogTop}>
          <div className={style.catalogTitle}>Type your keywords</div>
          <form className={style.form}>
            <ChubieInput type="text" placeholder="Search..." value={searchValue} onChange={handleChangeSearchValue} />
            <IconButton className={style.searchButton} type="submit">
              <SearchIcon sx={{ color: '#777E90' }} className={style.searchIcon} />
            </IconButton>
          </form>
        </div>
        <div className={style.catalogSorting}>
          <ChubieSelect
            name="timeType"
            className={style.timeSelect}
            options={optionsTime}
            value={formValue.timeType}
            handleChange={handleFormChange}
          ></ChubieSelect>
          <div className={style.discoverNav}>
            {navFilters.map((filter, index) => {
              const className = stateNav === index ? 'active' : null;
              return (
                <Button
                  key={index}
                  onClick={(e) => handleClickNav(e, index)}
                  className={`${style.discoverButtonNav} ${style[className]}`}
                >
                  {filter.description}
                </Button>
              );
            })}
          </div>
        </div>
        <div className={style.catalogRow}>
          <div className={style.catalogFilters}>
            <CatalogForm resetFilters={resetFilters} formValue={formValue} handleFormChange={handleFormChange} />
          </div>
          <div className={style.catalogWrapper}>
            <div className={style.catalogList}>
              {catalogList && catalogList.length ? (
                catalogList.map((item, index) => {
                  return (
                    <div key={index} className={style.catalogCard}>
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
                  );
                })
              ) : (
                <Skeleton></Skeleton>
              )}
            </div>
            {data.totalItems !== catalogList.length && (
              <div className={style.catalogBtn}>
                <Button onClick={handleLoadMore} variant="secondary">
                  Load more
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
