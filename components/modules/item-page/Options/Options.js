import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IosShareIcon from '@mui/icons-material/IosShare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const style = {
  options: `absolute top-auto left-[50%] bottom-[1.5rem] translate-x-[-50%]`,
  list: `bg-[#23262F] flex p-[0.5rem] rounded-[2rem]`,
  iconButton: `shadow-[0_0_0_2px_#353945_inset] mr-[1.5rem] last:mr-0 flex-[0_0_1.5rem] bg-transparent transition-all duration-200 hover:bg-[#353945] hover:text-[#FCFCFD] text-[#777E90]`
};

const Options = () => {
  return (
    <>
      <div className={style.options}>
        <div className={style.list}>
          <IconButton className={style.iconButton}>
            <IosShareIcon />
          </IconButton>
          <IconButton className={style.iconButton}>
            {'false' === 'false' ? (
              <FavoriteBorderIcon className={style.favoriteBid} />
            ) : (
              <FavoriteIcon className={style.favoriteIconFull} />
            )}
          </IconButton>
          <IconButton className={style.iconButton}>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Options;
