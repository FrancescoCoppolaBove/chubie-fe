import { Button } from '@mui/material';
import NextLink from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const style = {
  control: `py-[1.5rem] border-b-[1px] border-[#353945]`,
  controlCenter: `max-w-7xl mx-auto flex flex-col w-full`,
  backHomeBtn: `mr-auto h-[2.5rem] text-[0.875rem]`,
  backHomeIcon: `rotate-180 mr-[0.938rem]`
};

const Control = ({ backLink, backText }) => {
  return (
    <>
      <div className={style.control}>
        <div className={style.controlCenter}>
          <NextLink href={backLink}>
            <Button variant="secondary" className={style.backHomeBtn}>
              <ArrowRightAltIcon className={style.backHomeIcon} /> {backText}
            </Button>
          </NextLink>
        </div>
      </div>
    </>
  );
};

export default Control;
