import { Button } from '@mui/material';
import NextLink from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const style = {
  control: `py-[1.5rem] border-b-[1px] border-[#353945]`,
  controlCenter: `max-w-7xl mx-auto flex flex-col w-full`,
  backHomeBtn: `mr-auto h-[2.5rem] text-[0.875rem]`,
  backHomeIcon: `rotate-180 mr-[0.938rem]`,
  variantsSection: `pt-[5rem] pb-[8rem] text-center`,
  variantsCenter: `max-w-[56rem] mx-auto flex flex-col w-full px-[5rem]`,
  variantsTop: `max-w-[46rem] mx-auto mb-[5rem]`,
  variantsTitle: `mb-[1rem] text-[3rem] leading-[1.166667] font-dm-sans font-bold`,
  variantsInfo: `text-[#777E90]`,
  variantsHightlightText: `text-[#FCFCFD]`,
  variantsList: `flex mx-[-1rem] mb-[2rem]`,
  variantsItem: `flex-[0_0_calc(50%-2rem)] w-[calc(50%-2rem)] mx-[1rem] px-[1rem] pt-[1rem] pb-[1.5rem] rounded-[1rem] border-[1px] border-[#353945] transition-all duration-200`,
  variantsPreview: `mb-[1.5rem]`,
  variantsNote: `text-[#777E90] text-[0.75rem] leading-[1.66667]`
};

const UploadVariants = () => {
  return (
    <>
      <div className={style.control}>
        <div className={style.controlCenter}>
          <NextLink href="/">
            <Button variant="secondary" className={style.backHomeBtn}>
              <ArrowRightAltIcon className={style.backHomeIcon} /> Back to home
            </Button>
          </NextLink>
        </div>
      </div>
      <div className={style.variantsSection}>
        <div className={style.variantsCenter}>
          <div className={style.variantsTop}>
            <h1 className={style.variantsTitle}>Upload item</h1>
            <div className={style.variantsInfo}>
              Choose <span className={style.variantsHightlightText}>&quot;Single&quot;</span> if you want your
              collectible to be one of a kind or
              <span className={style.variantsHightlightText}>&quot;Multiple&quot;</span> if you want to sell one
              collectible multiple items
            </div>
          </div>
          <div className={style.variantsList}>
            <div className={style.variantsItem}>
              <div className={style.variantsPreview}>
                <img alt="upload" src="/images/upload-pic-1.jpg" />
              </div>
              <NextLink href="/upload">
                <Button variant="secondary">Create Single</Button>
              </NextLink>
            </div>
            <div className={style.variantsItem}>
              <div className={style.variantsPreview}>
                <img alt="upload" src="/images/upload-pic-2.jpg" />
              </div>
              <NextLink href="/upload">
                <Button variant="secondary">Create Multiple</Button>
              </NextLink>
            </div>
          </div>
          <div className={style.variantsNote}>
            We do not own your private keys and cannot access your funds without your confirmation.
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVariants;
