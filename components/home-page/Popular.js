import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { fromWeiToEth } from '../../utils/utils';

const style = {
  popularSection: `bg-[#23262F] overflow-hidden py-[8rem]`,
  popularWrapper: `max-w-7xl mx-auto items-center flex flex-col w-full px-[5rem]`,
  popularTop: `flex items-center mb-[3.375rem] justify-between w-full`,
  popularBox: `w-4/5`,
  popularCarouselWrapper: `w-full`,
  popularSlide: `h-auto px-[1rem]`,
  popularItem: `popular-item bg-[#141416] p-[1.5rem] rounded-[1rem] hover:shadow-[0px_64px_64px_-48px_rgb(31_47_70_/_12%)] transition-shadow`,
  popularHead: `border-b-[1px] border-b-[#353945] items-center flex pb-[1rem] mb-[1.5rem] justify-end`,
  popularControl: ``,
  popularButton: ``,
  popularArrow: `text-[#B1B5C3] hover:text-[#3772FF] transition-[color] text-[2rem] rotate-[-45deg]`,
  popularBody: `flex flex-col align-center items-center`,
  avatarBody: `relative`,
  popularAvatar: `popular-avatar relative w-[4rem] h-[4rem] transition-all mx-auto mb-[1rem]`,
  reward: `absolute right-[-4px] bottom-[10px]`,
  popularName: `mb-[0.125rem] font-medium`,
  popularPrice: `text-[#777E90] leading-[1.66667] text-[0.75rem]`,
  priceValue: `font-semibold text-[#E6E8EC]`
};

const Popular = (props) => {
  const [type, setType] = useState('sellers');
  const [timeframe, setTimeframe] = useState('');
  const [popular, setPopular] = useState(null);

  /* useEffect(() => {
    const res = getPopularCreators(type);
    setPopular(res);
  }, [type]); */

  const getPopularCreators = async (type) => {
    const res = await fetch(`${process.env.BASE_URL}popular?type=${type}`);
    const popular = await res.json();
    return popular;
  };

  const handleChangeTimeframeBox = (event) => {
    setTimeframe(event.target.value);
  };

  const handleChangeBox = (event) => {
    setType(event.target.value);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <section className={style.popularSection}>
      <div className={style.popularWrapper}>
        <div className={style.popularTop}>
          <div className={style.popularBox}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select autoWidth labelId="box-popular-label" id="box-popular" value={type} onChange={handleChangeBox}>
                <MenuItem key="sellers" value="sellers">
                  Sellers
                </MenuItem>
                <MenuItem key="buyers" value="buyers">
                  Buyers
                </MenuItem>
              </Select>
            </FormControl>
            {/* <CustomSelect value={type} onChange={handleChangeBox} /> */}
          </div>
          <div className={style.timeFrameBox}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select id="box-timeframe" value={timeframe} label="Timeframe" onChange={handleChangeTimeframeBox}>
                <MenuItem key="today" value="today">
                  Today
                </MenuItem>
                <MenuItem key="morning" value="morning">
                  Morning
                </MenuItem>
                <MenuItem key="dinner" value="dinner">
                  Dinner
                </MenuItem>
                <MenuItem key="evening" value="evening">
                  Evening
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className={style.popularTimeframe}></div>
        </div>
        <div className={style.popularCarouselWrapper}>
          <Slider {...settings}>
            {props.popular?.creators?.map((creator, index) => {
              return (
                <div key={index} className={style.popularSlide}>
                  <div className={style.popularItem}>
                    <div className={style.popularHead}>
                      <div className={style.popularControl}>
                        <IconButton className={style.popularButton}>
                          <ArrowRightAltIcon className={style.popularArrow} />
                        </IconButton>
                      </div>
                    </div>
                    <div className={style.popularBody}>
                      <div className={style.avatarBody}>
                        <Avatar
                          className={style.popularAvatar}
                          alt="popular avatar"
                          src={creator.author.avatar}
                        ></Avatar>

                        <div className={style.reward}>
                          <img src="images/reward-1.svg" alt="reward"></img>
                        </div>
                      </div>

                      <div className={style.popularName}>{creator.author.name + ' ' + creator.author.surname}</div>
                      <div className={style.popularPrice}>
                        <span className={style.priceValue}>{fromWeiToEth(creator.price, 3)}</span> BNB
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Popular;
