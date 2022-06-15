import { useState } from 'react';
import { optionsLikes, optionsColors, optionsCreator, optionsRangeCurrency } from '../../../const/const';
import ChubieInput from '../../Input/ChubieInput';
import ChubieSelect from '../../Select/ChubieSelect';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from '@mui/material';

const style = {
  catalogGroup: `border-y border-[#353945] mb-[1.5rem] py-[1.5rem]`,
  field: `mb-[1.5rem] last-of-type:mb-0`,
  fieldLabel: `mb-[0.75rem] text-[0.75rem] leading-[1] font-bold uppercase text-[#B1B5C3] ml-[0.5rem]`,
  fieldPriceSelect: `mb-[0.75rem]`,
  fieldPrice: `flex-[0_0_calc(50%-1.25rem)] max-w-[calc(50%-1.25rem)]`,
  priceRangeBox: `flex gap-5`,
  applyBtn: `my-[1rem] w-full bg-[#3772FF]`,
  catalogPriceSelect: ``,
  resetFilterBtn: `inline-flex items-center hover:bg-transparent capitalize text-[#FCFCFD] font-dm-sans text-[0.875rem] leading-[1.14286] font-bold transition-all duration-200 hover:text-[#3772FF]`,
  resetFilterIcon: `mr-[0.5rem]`
};

const CatalogForm = ({ resetFilters, formValue, handleFormChange }) => {
  return (
    <>
      <div className={style.priceRange}>
        <div className={style.fieldLabel}>Price</div>
        <div className={style.fieldPriceSelect}>
          <ChubieSelect
            className={style.catalogPriceSelect}
            name="priceCurrency"
            options={optionsRangeCurrency}
            handleChange={handleFormChange}
            value={formValue.priceCurrency}
          />
        </div>
        <div className={style.priceRangeBox}>
          <div className={style.fieldPrice}>
            <div className={style.fieldLabel}>Min price</div>
            <ChubieInput
              placeholder="Min price"
              name="minPrice"
              handleChange={handleFormChange}
              value={formValue.minPrice}
            />
          </div>
          <div className={style.fieldPrice}>
            <div className={style.fieldLabel}>Max price</div>
            <ChubieInput
              placeholder="Max price"
              name="maxPrice"
              handleChange={handleFormChange}
              value={formValue.maxPrice}
            />
          </div>
        </div>
        <Button className={style.applyBtn} variant="primary">
          Apply
        </Button>
      </div>
      <div className={style.catalogGroup}>
        <div className={style.field}>
          <div className={style.fieldLabel}>Likes</div>
          <ChubieSelect name="likes" options={optionsLikes} handleChange={handleFormChange} value={formValue.likes} />
        </div>
        <div className={style.field}>
          <div className={style.fieldLabel}>Color</div>
          <ChubieSelect
            name="colors"
            options={optionsColors}
            handleChange={handleFormChange}
            value={formValue.colors}
          />
        </div>
        <div className={style.field}>
          <div className={style.fieldLabel}>Creator</div>
          <ChubieSelect
            name="creator"
            options={optionsCreator}
            handleChange={handleFormChange}
            value={formValue.creator}
          />
        </div>
      </div>
      <Button onClick={() => resetFilters()} className={style.resetFilterBtn}>
        <HighlightOffIcon className={style.resetFilterIcon} /> Reset filter
      </Button>
    </>
  );
};

export default CatalogForm;
