import LanguageIcon from '@mui/icons-material/Language';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import IosShareIcon from '@mui/icons-material/IosShare';
import FlagIcon from '@mui/icons-material/Flag';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { Avatar, Button } from '@mui/material';

const style = {
  pasteIcon: `h-[17px] w-[17px] text-[#3772FF] cursor-pointer hover:text-[#044eff] transition-color ml-[0.5rem]`,
  profileBody: `relative z-[3] py-[5rem]`,
  profileUser: `h-[47rem] relative z-[3] bg-[#23262F] text-center border-[#353945] border shrink-0 w-[16rem] mt-[-12.063rem] px-[1.75rem] py-[2rem] rounded-[1rem] shadow-[0px_40px_32px_-24px_rgb(15_15_15_/_12%)]`,
  userAvatar: `w-[10rem] h-[10rem] mx-auto mb-[1.5rem]`,
  userName: `mb-[0.25rem] text-[1.5rem] leading-[1.33333] font-semibold`,
  userCode: `inline-flex items-center mb-[1.25rem]`,
  userWalletAddress: `text-[#FCFCFD] font-dm-sans text-[0.875rem] leading-[1.4286] font-bold`,
  userInfo: `mb-[1.25rem] text-[0.75rem] leading-[1.66667] text-[#777E90]`,
  userSite: `text-[#FCFCFD] inline-flex items-center mb-[3rem] font-dm-sans text-[0.75rem] leading-[1.4286] font-bold`,
  userSiteIcon: `w-[1rem] mr-[0.5rem] text-[#777E90]`,
  userControl: `inline-block relative mb-[3rem]`,
  userBtns: `flex items-center justify-center`,
  followBtn: `bg-[#3772FF] shadow-[inset_0_0_0_2px_#3772ff] mr-[0.5rem] h-[2.5rem] rounded-[1.25rem] px-[1rem] text-[0.875rem]`,
  userBtnIcon: `shadow-[0_0_0_2px_#353945_inset] mr-[0.5rem] flex-[0_0_2.5rem] w-[2.5rem] h-[2.5rem] px-[0] rounded-[50%] text-[#777E90] items-center align-center flex hover:bg-[#353945] hover:text-[#FCFCFD]`,
  userActionBtnIcon: `w-[1.4rem]`,
  userSocials: `flex justify-center`,
  userSocialsLink: `mr-[1.5rem] last:mr-0 `,
  userSocialsIcon: `w-[1.25rem] text-[#777E90] transition-all duration-200 hover:text-[#3772FF]`,
  userNote: `border-[#353945] border-t mt-[3rem] pt-[3rem] text-[0.75rem] leading-[1.66667] text-[#777E90]`
};

const User = () => {
  return (
    <>
      <div className={style.profileUser}>
        <Avatar className={style.userAvatar} src="/images/avatar-creator.jpeg"></Avatar>
        <div className={style.userName}>Enrico Cole</div>
        <div className={style.userCode}>
          <div className={style.userWalletAddress}>0xc4c16a645...b21a</div>
          <ContentPasteIcon onClick={() => copyAddressToClipboard()} className={style.pasteIcon} />
        </div>
        <div className={style.userInfo}>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</div>
        <a className={style.userSite} target="_blank" rel="noreferrer" href="https://ui8.net">
          <LanguageIcon className={style.userSiteIcon} /> https://ui8.net
        </a>
        <div className={style.userControl}>
          <div className={style.userBtns}>
            <Button variant="primary" className={style.followBtn}>
              Follow
            </Button>
            <IconButton className={style.userBtnIcon}>
              <IosShareIcon className={style.userActionBtnIcon} />
            </IconButton>
            <IconButton className={style.userBtnIcon}>
              <FlagIcon className={style.userActionBtnIcon} />
            </IconButton>
          </div>
          <div className={style.userBox}></div>
        </div>
        <div className={style.userSocials}>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={style.userSocialsLink}>
            <InstagramIcon className={style.userSocialsIcon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className={style.userSocialsLink}>
            <LinkedInIcon className={style.userSocialsIcon} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className={style.userSocialsLink}>
            <FacebookIcon className={style.userSocialsIcon} />
          </a>
        </div>
        <div className={style.userNote}>Member since 15 March 2021</div>
      </div>
    </>
  );
};

export default User;
