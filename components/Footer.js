import NextLink from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const style = {
  footer: `border-t-[#666666] border-t-[1px]`,
  footerContainer: `flex flex-col max-w-7xl mx-auto px-[3rem]`,
  topFooter: `flex flex-col md:flex-row border-b-[1px] border-b-[#666666] pt-[4rem] pb-[2rem]`,
  leftFooter: `w-full md:w-4/12 pb-[2.5rem] md:pb-[0] text-center md:text-left`,
  logo: `text-brand-light text-[2rem] font-bold pb-[1.2rem] cursor-pointer`,
  logoClaim: `font-poppins text-brand-light capitalize text-[1.4rem] font-light`,
  rightFooter: `flex flex-row w-full md:w-8/12`,
  ul: `w-1/2 flex flex-col`,
  li: `pb-[1rem]`,
  bottomFooter: `pt-[1.5rem] pb-[1rem] flex flex-col md:flex-row justify-between text-center md:text-left`,
  footerRow: `flex flex-row`,
  header: `font-poppins text-brand-light pb-[2.6rem]`,
  navLink: `font-dm-sans text-[1rem] text-[#777E90] cursor-pointer hover:text-brand-blue transition-[color] duration-200 ease-out`,
  copyright: `font-poppins text-[0.75rem] text-[#777E90]`,
  social: `flex gap-10 text-[#777E90] justify-center md:justify-start py-[1.2rem] md:py-[0]`,
  socialIcon: `cursor-pointer hover:text-brand-blue transition-[color] duration-200 ease-out`
};

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={`${style.footerRow} ${style.topFooter}`}>
          <div className={style.leftFooter}>
            <div className={style.logoContainer}>
              <NextLink href="/">
                <div className={style.logo}>Chubie</div>
              </NextLink>
              <div className={style.logoClaim}>The new Creative Economy</div>
            </div>
          </div>
          <div className={style.rightFooter}>
            <ul className={style.ul}>
              <li className={`${style.li} ${style.header}`}>
                <span>Chubie</span>
              </li>
              <li className={style.li}>
                <NextLink href="/">
                  <span className={style.navLink}>Discover</span>
                </NextLink>
              </li>
              <li className={style.li}>
                <NextLink href="/">
                  <span className={style.navLink}>How it works</span>
                </NextLink>
              </li>
            </ul>
            <ul className={style.ul}>
              <li className={`${style.li} ${style.header}`}>
                <span>Info</span>
              </li>
              <li className={style.li}>
                <NextLink href="/">
                  <span className={style.navLink}>FAQ</span>
                </NextLink>
              </li>
              <li className={style.li}></li>
            </ul>
            <ul className={style.ul}>
              <li className={`${style.li} ${style.header}`}>
                <span>Resources</span>
              </li>
              <li className={style.li}>
                <NextLink href="/">
                  <span className={style.navLink}>Terms of Use</span>
                </NextLink>
              </li>
              <li className={style.li}>
                <NextLink href="/">
                  <span className={style.navLink}>Contact</span>
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.footerRow} ${style.bottomFooter}`}>
          <span className={style.copyright}>Copyright © 2022 Chubie. All Rights reserved</span>
          <div className={style.social}>
            <InstagramIcon className={style.socialIcon} />
            <LinkedInIcon className={style.socialIcon} />
            <TwitterIcon className={style.socialIcon} />
            <FacebookIcon className={style.socialIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
