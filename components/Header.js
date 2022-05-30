import NextLink from 'next/link';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const style = {
  header: `items-center content-center border-b-[1px] border-b-[#666666] py-[1.25rem]`,
  wrapper: `relative max-w-7xl items-center flex px-[2rem] md:px-[0] flex-row w-full justify-between content-center`,
  logo: `mr-[2rem] text-[2rem] cursor-pointer`,
  leftHeader: `items-center`,
  rightHeader: `hidden md:flex items-center`,
  form: `relative w-[17rem] mr-[1rem]`,
  divider: `hidden md:block bg-[#666666]`,
  containerLeft: `hidden md:flex`,
  nav: `flex`,
  navItem: `ml-[2rem] cursor-pointer `,
  navLink: `hover:text-brand-blue text-[#777E90]`,
  searchButton: `absolute top-0 right-0 bottom-0 `,
  searchIcon: `hover:text-brand-blue`,
  inputSearch: `w-full`,
  mobileMenuIcon: `block md:hidden`,
  menuMobile: `absolute md:hidden flex flex-col top-[77px] left-0 right-0 h-[calc(100vh-97px)] px-[3rem] py-[2rem] justify-between`,
  buttonMobile: `w-full h-[3rem]`,
  navLinkMobile: `text-[2rem] cursor-pointer`,
  navItemMobile: `mb-[2rem]`
};

const Header = () => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  return (
    <AppBar position="static" className={style.header}>
      <div className={style.wrapper}>
        <Stack
          className={style.leftHeader}
          direction="row"
          divider={<Divider className={style.divider} orientation="vertical" flexItem />}
        >
          <NextLink href="/">
            <span className={style.logo}>chubie</span>
          </NextLink>
          <div className={style.containerLeft}>
            <ul className={style.nav}>
              <li className={style.navItem}>
                <NextLink href="/">
                  <span className={style.navLink}>Discover</span>
                </NextLink>
              </li>
              <li className={style.navItem}>
                <NextLink href="/">
                  <span className={style.navLink}>How it works</span>
                </NextLink>
              </li>
            </ul>
          </div>
        </Stack>
        <div className={style.rightHeader}>
          <form className={style.form}>
            <InputBase className={style.inputSearch} type="text" placeholder="Search..." />
            <IconButton className={style.searchButton} type="submit">
              <SearchIcon sx={{ color: '#777E90' }} className={style.searchIcon} />
            </IconButton>
          </form>
          <Button variant="small" disableElevation>
            Connect Wallet
          </Button>
        </div>

        {/* MENU MOBILE ICON */}
        <div className={style.mobileMenuIcon}>
          <IconButton>
            {!menuMobileOpen ? (
              <MenuIcon
                onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                sx={{ color: '#777E90', width: '40px', height: '40px' }}
              />
            ) : (
              <CloseIcon
                onClick={() => setMenuMobileOpen(!menuMobileOpen)}
                sx={{ color: '#777E90', width: '40px', height: '40px' }}
              />
            )}
          </IconButton>
        </div>

        {/* MENU MOBILE */}
        <div className={`${style.menuMobile} ${menuMobileOpen ? 'flex' : 'hidden'}`}>
          <div className={style.containerLinkMobile}>
            <ul className={style.navMobile}>
              <li className={style.navItemMobile}>
                <NextLink href="/">
                  <span className={`${style.navLinkMobile} ${style.navLink}`}>Discover</span>
                </NextLink>
              </li>
              <li className={style.navItemMobile}>
                <NextLink href="/">
                  <span className={`${style.navLinkMobile} ${style.navLink}`}>How it works</span>
                </NextLink>
              </li>
            </ul>
          </div>
          <div className={style.containerActionsMobile}>
            <Button className={style.buttonMobile} variant="small" disableElevation>
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default Header;
