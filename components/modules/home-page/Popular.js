import ChubieSelect from '../../ui/Select/ChubieSelect';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { fromWeiToEth } from '../../../utils/index';
import useSWR from 'swr';
import { fetcher } from '../../../lib/index';
import Skeleton from '@mui/material/Skeleton';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';

const style = {
  popularSection: `bg-[#23262F] overflow-hidden py-[8rem]`,
  popularWrapper: `max-w-7xl mx-auto items-center flex flex-col w-full px-[5rem]`,
  popularTop: `flex items-center mb-[3.375rem] justify-between w-full`,
  popularBox: `w-4/5`,
  popularCarouselWrapper: `w-full`,
  popularSlide: `h-auto px-[1rem]`,
  popularItem: `popular-item bg-[#141416] p-[1.5rem] rounded-[1rem] hover:shadow-[0px_64px_64px_-48px_rgb(31_47_70_/_12%)] transition-shadow`,
  popularHead: `border-b-[1px] border-b-[#353945] items-center flex flex-row pb-[1rem] mb-[1.5rem] justify-end`,
  popularControl: ``,
  popularRating: `flex items-center h-[1.5rem] mr-auto px-[0.5rem] py-0 rounded-[0.75rem] text-[0.75rem] leading-[1.66667] font-semibold text-[#FCFCFD]`,
  popularRatingBg1: `bg-brand-red`,
  rankIcon: `mr-[0.25rem] text-[1.2rem]`,
  popularButton: ``,
  popularArrow: `text-[#B1B5C3] hover:text-[#3772FF] transition-[color] text-[2rem] rotate-[-45deg]`,
  popularBody: `flex flex-col align-center items-center`,
  avatarBody: `relative`,
  popularAvatar: `popular-avatar relative w-[4rem] h-[4rem] transition-all mx-auto mb-[1rem]`,
  reward: `absolute right-[-4px] bottom-[10px]`,
  popularName: `mb-[0.125rem] font-medium whitespace-nowrap`,
  popularPrice: `text-[#777E90] leading-[1.66667] text-[0.75rem]`,
  priceValue: `font-semibold text-[#E6E8EC]`,
  discoverFieldLabel: `mb-[0.625rem] text-[1.5rem] capitalize leading-[1.33333] font-semibold text-[#B1B5C3] ml-[0.625rem]`,
  bg1: `bg-[#3772FF]`,
  bg2: `bg-[#9757D7]`,
  bg3: `bg-[#45B26B]`,
  bg4: `bg-[#23262F]`,
  bg5: `bg-[#777E90]`
};

const Popular = () => {
  const [type, setType] = useState('sellers');
  const [timeframe, setTimeframe] = useState('');
  const [popular, setPopular] = useState(false);
  const { data, error } = useSWR(popular ? `/api/popular-creators?type=${type}` : null, fetcher);

  useEffect(() => {
    setPopular(true);
  }, [type]);

  const handleChangeTimeframeBox = (event) => {
    setTimeframe(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const optionsType = [
    { value: 'sellers', description: 'Sellers' },
    { value: 'buyers', description: 'Buyers' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const renderIcon = (param) => {
    switch (param) {
      case 1:
        return <EmojiEventsOutlinedIcon className={style.rankIcon} />;
      case 2:
        return <DiamondOutlinedIcon className={style.rankIcon} />;
      case 3:
        return <SentimentSatisfiedOutlinedIcon className={style.rankIcon} />;
      case 4:
      case 5:
        return <EmojiFlagsOutlinedIcon className={style.rankIcon} />;
    }
  };

  return (
    <section className={style.popularSection}>
      <div className={style.popularWrapper}>
        <div className={style.popularTop}>
          <div className={style.popularBox}>
            <div className={style.discoverFieldLabel}>Popular</div>
            <ChubieSelect type="lighter" options={optionsType} value={type} handleChange={handleChangeType} />
          </div>
          {/* <div className={style.timeFrameBox}>
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
          </div> */}
          <div className={style.popularTimeframe}></div>
        </div>
        <div className={style.popularCarouselWrapper}>
          <Slider {...settings}>
            {!data ? (
              <Skeleton></Skeleton>
            ) : (
              data.creators?.map((creator, index) => {
                return (
                  <div key={index} className={style.popularSlide}>
                    <div className={style.popularItem}>
                      <div className={style.popularHead}>
                        <div className={`${style.popularRating} ${style['bg' + creator.rank]}`}>
                          <div className={style.popularIcon}>{renderIcon(creator.rank)}</div>
                          <div className={style.popularNumber}>#{creator.rank}</div>
                        </div>
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
              })
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Popular;
