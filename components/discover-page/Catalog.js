import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

import ChubieInput from '../Input/ChubieInput';
import { useState } from 'react';
import ChubieSelect from '../Select/ChubieSelect';
import { optionsTime, navFilters } from '../../const/const';
import CatalogForm from '../forms/catalog-form/CatalogForm';

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

  catalogSorting: `flex items-center mb-[3rem]`,
  catalogRow: `flex`,
  catalogFilters: `w-[16rem] shrink-0`
};

const Catalog = () => {
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

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTimeValue(e.target.value);
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
        </div>
      </div>
    </section>
  );
};

export default Catalog;
