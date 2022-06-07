import Button from '@mui/material/Button';
import { useState } from 'react';

const style = {
  sectionDescription: `relative flex flex-row items-center py-[5rem] border-t-[1px] border-t-[#353945] mt-[3rem] min-h-[50rem]`,
  wrapperDescription: `w-full max-w-7xl mx-auto items-center px-[2rem] md:px-[5rem] flex`,
  rowDescription: `w-full mb-[2.5rem] md:mb-0 md:max-w-[26.25rem] lg:max-w-[30rem] z-[3] relative`,
  descriptionStage: `mb-[0.75rem] text-[1rem] leading-[1] font-bold uppercase text-[#777E90]`,
  descriptionTitle: `mb-[1.25rem] text-[4rem] font-dm-sans leading-[1] font-bold tracking-[-.02em]`,
  descriptionText: `mb-[2.5rem] text-[1rem] leading-[1.5] text-[#777E90]`,
  galleryDescription: `static md:absolute top-[50%] right-[calc(50%-27.5rem)] md:right-[calc(50%-35rem)] w-[29.375rem] md:w-[42.75rem] translate-y-[-50%]`,
  descriptionPreview: `relative z-[2]`,
  cubes: `w-full inline-block`,
  descriptionPreviewCube: `absolute right-[-11%] bottom-[-3.5%] z-[3] w-[47%]`
};

const Description = () => {
  return (
    <section className={style.sectionDescription}>
      <div className={style.wrapperDescription}>
        <div className={style.rowDescription}>
          <div className={style.descriptionStage}>save your time with stacks</div>
          <h1 className={style.descriptionTitle}>Earn free crypto with Chubie</h1>
          <div className={style.descriptionText}>A creative agency that lead and ispire</div>
          <div className={style.descriptionButtons}>
            <Button variant="primary">Create item</Button>
            <Button variant="secondary">Discover more</Button>
          </div>
        </div>
        <div className={style.galleryDescription}>
          <div className={style.descriptionPreview}>
            <img className={style.cubes} alt="gallery img" src="images/cubes-dark.png"></img>
          </div>
          <div className={style.descriptionPreviewCube}>
            <img alt="gallery img" src="images/cube-dark.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
