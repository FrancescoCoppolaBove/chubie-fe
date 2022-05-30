import NextLink from 'next/link';

const style = {
  footer: `mt-[30rem] border-t-[#666666] border-t-[1px]`,
  footerContainer: `flex flex-col max-w-7xl mx-auto `,
  topFooter: `border-b-[1px] border-b-[#666666] pt-[4rem] pb-[2rem]`,
  leftFooter: `w-4/12`,
  rightFooter: `flex flex-row w-8/12`,
  ul: `w-1/2`,
  bottomFooter: `pt-[1.5rem]`,
  footerRow: `flex flex-row`
};

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={`${style.footerRow} ${style.topFooter}`}>
          <div className={style.leftFooter}>
            <div className={style.logoContainer}>
              <div className={style.logo}>Chubie</div>
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
                <NextLink href="/">
                  <span className={style.navLink}>How it works</span>
                </NextLink>
              </li>
              <li className={style.li}></li>
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
                <NextLink href="/">
                  <span className={style.navLink}>Contact</span>
                </NextLink>
              </li>
              <li className={style.li}></li>
            </ul>
          </div>
        </div>
        <div className={`${style.footerRow} ${style.bottomFooter}`}>
          <span>Copyright © 2022 Chubie. All Rights reserved</span>
          <div className={style.social}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
