import { Avatar, Button } from '@mui/material';

const style = {
  control: `bg-[#23262F] p-[1.5rem] border-[#353945] mt-[2rem] rounded-[1rem] shadow-[0px_64px_64px_-24px_rgb(31_47_70_/_12%)] border`,
  head: `flex items-center`,
  userAvatar: `relative w-[3rem] h-[3rem] mr-[1rem]`,
  description: `grow`,
  info: `text-[1rem] leading-[1.5] font-medium text-[#777E90]`,
  name: `text-[#FCFCFD]`,
  currency: `flex`,
  price: `mr-[0.75rem] last:mr-0 text-[1.5rem] leading-[1.33333] font-semibold even:text-[#777E90]`,
  btns: `flex mt-[2rem] justify-center`,
  btn: `bg-[#3772FF]`,
  variants: `mt-[2rem] font-medium text-[#777E90] text-[0.875rem] justify-between`,
  percent: `text-[#FCFCFD] ml-[0.75rem] font-normal`,
  ethPrice: `ml-[0.75rem] font-normal`,
  fiatPrice: `ml-[0.75rem] font-normal`
};

const Control = () => {
  return (
    <>
      <div className={style.control}>
        <div className={style.head}>
          <Avatar className={style.userAvatar} alt="creator avatar" src="/images/avatar-creator.jpeg" />
          <div className={style.description}>
            <div className={style.info}>
              Highest bid by <span className={style.name}>Kohaku Tora</span>
            </div>
            <div className={style.currency}>
              <div className={style.price}>
                <span className={style.bnbValue}>2 </span>BNB
              </div>
              <div className={style.price}>$2,700.00</div>
            </div>
          </div>
        </div>
        <div className={style.btns}>
          <Button className={style.btn} variant="primary">
            Purchase now
          </Button>
        </div>
        <div className={style.variants}>
          Service fee <span className={style.percent}>1.5%</span>
          <span className={style.ethPrice}>2 BNB</span>
          <span className={style.fiatPrice}>$2,700.00</span>
        </div>
      </div>
    </>
  );
};

export default Control;
