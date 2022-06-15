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
import { useState, useEffect, useRef } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import LoginDialog from '../components/login-dialog/Dialog';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const style = {
  header: `items-center content-center border-b-[1px] border-b-[#666666] py-[1.25rem] px-[1.5rem]  md:px-[3rem] relative`,
  wrapper: `relative max-w-7xl items-center flex px-[2rem] md:px-[0] flex-row w-full justify-between content-center`,
  logo: `pr-[2rem] text-[2rem] cursor-pointer md:border-r-[1px] md:border-[#666666]`,
  leftHeader: `items-center`,
  rightHeader: `flex items-center`,
  form: `hidden md:block relative w-[17rem] mr-[1rem]`,
  containerLeft: `hidden md:flex`,
  nav: `flex`,
  navItem: `ml-[2rem] cursor-pointer `,
  navLink: `hover:text-brand-blue text-[#777E90]`,
  searchButton: `absolute top-0 right-0 bottom-0 `,
  searchIcon: `hover:text-brand-blue`,
  inputSearch: `w-full`,
  mobileMenuIcon: `block md:hidden`,
  menuMobile: `absolute bg-[#141416] md:hidden z-[1] flex flex-col top-[77px] left-0 right-0 h-[calc(100vh-97px)] px-[1.5rem] pb-[2rem] pt-[4rem] justify-between`,
  buttonMobile: `w-full h-[3rem]`,
  navLinkMobile: `text-[2rem] cursor-pointer`,
  navItemMobile: `mb-[2rem]`,
  containerLinkMobile: `px-[2rem]`,
  menuProfile: `px-[3rem] py-[4rem]`,
  menuProfileButton: `h-[2.5rem] transition-shadow md:shadow-[inset_0_0_0_2px_#353945] relative flex items-center rounded-[1.25rem] text-[1rem] leading-[1.14286] font-bold text-brand-light p-[4px 16px 4px 4px] md:hover:shadow-[inset_0_0_0_2px_#3772ff]  ml-[8rem] md:ml-0`,
  headerAvatar: `w-[32px] h-[32px]`,
  headerWallet: `hidden md:block pl-[0.75rem] text-[0.875rem]`,
  headerCurrency: `text-brand-green font-bold text-[0.875rem] ml-[0.313rem]`,
  userName: `text-[1.5rem] text-brand-light leading-[1.33333] font-bold font-semibold mb-[0.5rem]`,
  balanceContainer: `flex flex-row items-center shadow-[0px_24px_24px_-8px_rgb(15_15_15/20%)] rounded-[1rem] p-[0.5rem] mb-[0.5rem]`,
  logoBnbProfile: `w-[40px] h-[40px]`,
  textBalanceContainer: `flex flex-col ml-[1rem]`,
  balanceLabel: `font-poppins text-[#777E90] text-[0.75rem]`,
  balanceValue: `text-[1.5rem] text-brand-light font-semibold font-poppins leading-[1.33333]`,
  walletAddress: `flex flex-row items-center mb-[0.5rem] gap-3`,
  address: `font-poppins font-medium text-[#777E90] text-[0.875rem]`,
  pasteIcon: `h-[17px] w-[17px] text-[#3772FF] cursor-pointer hover:text-[#044eff] transition-color`,
  menuItem: `flex flex-row gap-4 items-center text-[#777E90] cursor-pointer hover:text-[#3772FF] transition-color`,
  menuItemIcon: `w-[20px] h-[20px]`,
  menuItemLabel: `text-[0.875rem] font-bold`,
  divider: `bg-[#353945]`,
  connectWalletHeaderButton: `hidden md:block`,
  uploadBtn: `hidden md:inline-flex mr-[0.875rem] bg-[#3772FF] h-[2.5rem] rounded-[1.25rem] py-0 px-[1.125rem] text-[0.875rem] inline-flex items-center justify-center font-dm-sans text-center leading-[1]`
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuButtonRef = useRef();
  const Web3Api = useMoralisWeb3Api();
  const [walletBalance, setWalletBalance] = useState(0);

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  const handleClickMenu = () => {
    setAnchorEl(menuButtonRef.current);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setAnchorEl(menuButtonRef.current);
  }, [menuButtonRef]);

  const openMenu = Boolean(anchorEl);
  const id = openMenu ? 'simple-popover' : undefined;

  const fetchNativeBalance = async () => {
    const options = {
      chain: 'bsc',
      address: user.attributes.ethAddress
    };
    const bscBalance = await Web3Api.account.getNativeBalance(options);
    setWalletBalance(+(+bscBalance.balance * Math.pow(10, -18)).toFixed(4));
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchNativeBalance();
    }
  }, [isAuthenticated]);

  const login = async (provider) => {
    if (!isAuthenticated) {
      await authenticate({ provider })
        .then((user) => {
          console.log(user.get('ethAddress'));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const printTruncAddress = () => {
    if (user) {
      const address = user.attributes.ethAddress;
      return address
        .substr(0, 13)
        .concat('...')
        .concat(address.substr(address.length - 4, address.length));
    }
  };

  const logOut = async () => {
    await logout();
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      setSelectedValue(newValue);
      if (typeof window.ethereum === 'undefined') {
        window.open('https://metamask.io/download/', '_blank').focus();
      }
      if (['metamask', 'walletconnect'].includes(newValue)) {
        login(newValue);
      }
    }
  };

  const copyAddressToClipboard = () => {
    if (user) {
      navigator.clipboard.writeText(user.attributes.ethAddress).then(() => {
        alert('Copied to clipboard!');
      });
    }
  };

  return (
    <AppBar position="static" className={style.header}>
      <div className={style.wrapper}>
        <Stack className={style.leftHeader} direction="row">
          <NextLink href="/">
            <span className={style.logo}>chubie</span>
          </NextLink>
          <div className={style.containerLeft}>
            <ul className={style.nav}>
              <li className={style.navItem}>
                <NextLink href="/discover">
                  <span className={style.navLink}>Discover</span>
                </NextLink>
              </li>
              <li className={style.navItem}>
                <NextLink href="/how-it-works">
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
          {isAuthenticated && (
            <NextLink href="/upload-variants">
              <Button variant="primary" className={style.uploadBtn}>
                Upload
              </Button>
            </NextLink>
          )}
          {!isAuthenticated ? (
            <Button
              className={style.connectWalletHeaderButton}
              onClick={handleOpenDialog}
              variant="small"
              disableElevation
            >
              Connect Wallet
            </Button>
          ) : (
            <IconButton
              ref={menuButtonRef}
              aria-describedby={id}
              className={style.menuProfileButton}
              onClick={handleClickMenu}
            >
              <Avatar className={style.headerAvatar} src="/images/avatar-creator.jpeg"></Avatar>
              <span className={style.headerWallet}>
                {+walletBalance}
                <span className={style.headerCurrency}>BNB</span>
              </span>
            </IconButton>
          )}
          {isAuthenticated && (
            <Menu
              id={id}
              open={openMenu}
              anchorEl={anchorEl}
              onClose={handleCloseMenu}
              className={style.menuProfile}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  backgroundColor: '#23262F',
                  padding: '32px 16px 20px',
                  '& .MuiPaper-root': {
                    top: 74
                  },
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: '#23262F',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <div className={style.userContainer}>
                <h4 className={style.userName}>Enrico Cole</h4>
                <span className={style.walletAddress}>
                  <span className={style.address}>{printTruncAddress()}</span>
                  <ContentPasteIcon onClick={() => copyAddressToClipboard()} className={style.pasteIcon} />
                </span>
                <div className={style.balanceContainer}>
                  <img className={style.logoBnbProfile} alt="logo bnb" src="/images/bnb-logo-profile.png"></img>
                  <div className={style.textBalanceContainer}>
                    <span className={style.balanceLabel}>Balance</span>
                    <span className={style.balanceValue}>
                      {+walletBalance} <span className={style.balanceCurrency}>BNB</span>
                    </span>
                  </div>
                </div>
                <MenuItem className={style.menuItem} disableRipple>
                  <PersonIcon className={style.menuItemIcon} />
                  <span className={style.menuItemLabel}>My profile</span>
                </MenuItem>
                <Divider className={style.divider} sx={{ my: 0.5 }} />
                <MenuItem className={style.menuItem} disableRipple>
                  <ImageIcon className={style.menuItemIcon} />
                  <span className={style.menuItemLabel}>My items</span>
                </MenuItem>
                <Divider className={style.divider} sx={{ my: 0.5 }} />
                <MenuItem className={style.menuItem} onClick={() => logOut()} disableRipple>
                  <LogoutIcon className={style.menuItemIcon} />
                  <span className={style.menuItemLabel}>Logout</span>
                </MenuItem>
              </div>
            </Menu>
          )}
        </div>

        {/* MENU MOBILE ICON */}
        <div className={style.mobileMenuIcon}>
          <IconButton onClick={() => setMenuMobileOpen(!menuMobileOpen)}>
            {!menuMobileOpen ? (
              <MenuIcon sx={{ color: '#777E90', width: '40px', height: '40px' }} />
            ) : (
              <CloseIcon sx={{ color: '#777E90', width: '40px', height: '40px' }} />
            )}
          </IconButton>
        </div>
      </div>
      {/* MENU MOBILE */}
      <div className={`${style.menuMobile} ${menuMobileOpen ? 'flex' : 'hidden'}`}>
        <div className={style.containerLinkMobile}>
          <ul className={style.navMobile}>
            <li className={style.navItemMobile}>
              <NextLink href="/discover">
                <span className={`${style.navLinkMobile} ${style.navLink}`}>Discover</span>
              </NextLink>
            </li>
            <li className={style.navItemMobile}>
              <NextLink href="/how-it-works">
                <span className={`${style.navLinkMobile} ${style.navLink}`}>How it works</span>
              </NextLink>
            </li>
          </ul>
        </div>
        <div className={style.containerActionsMobile}>
          {!isAuthenticated && (
            <Button onClick={handleOpenDialog} className={style.buttonMobile} variant="small" disableElevation>
              Connect Wallet
            </Button>
          )}
        </div>
      </div>

      <LoginDialog
        id="login-dialog"
        keepMounted
        open={open}
        onClose={handleClose}
        selectedValue={selectedValue}
      ></LoginDialog>
    </AppBar>
  );
};

export default Header;
