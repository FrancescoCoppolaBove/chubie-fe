import DropZone from '../../ui/Dropzone/Dropzone';
import NextLink from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import User from './User/User';
import Items from './Items/Items';
import Followers from './Followers/Followers';

const customStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#FCFCFD',
  transition: 'all .2s',
  background: 'transparent',
  fontFamily: 'Poppins',
  fontSize: '1.5rem',
  fontWeight: 600,
  lineHeight: 1.33333,
  zIndex: 3
};

const style = {
  profileHead: `relative flex items-end h-[20.375rem] py-[2rem] bg-no-repeat bg-center bg-cover overflow-hidden`,
  profileTopCenter: `max-w-7xl mx-auto w-full`,
  profileBottomCenter: `max-w-7xl flex mx-auto w-full`,
  dropZone: `opacity-0 hidden before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-slate-800/30 before:absolute after:content-[''] after:absolute after:top-[0.5rem] after:left-[0.5rem] after:right-[0.5rem] after:bottom-[0.5rem] after:border-2 after:border-dashed after:border-[#E6E8EC] after:rounded-[0.75rem]`,
  dropZoneInnerBox: `z-[3]`,
  dropZoneUploadIcon: `mb-[1.5rem] w-[3rem] h-[3rem]`,
  dropZoneSaveBtn: `opacity-0 invisible absolute right-[1rem] bottom-[1rem] z-[10] h-[2.5rem] rounded-[1.25rem] px-[1rem] inline-flex items-center align-center bg-[#3772FF] hover:bg-[#044eff] font-dm-sans font-bold leading-[1] text-center text-[#FCFCFD] transition-all duration-200 text-[0.875rem] capitalize`,
  profileBtns: `flex justify-end transition-all duration-200 relative z-[4]`,
  profileBtn: `h-[2.5rem] rounded-[1.25rem] px-[1rem] text-[0.875rem] mr-[1rem] shadow-[0_0_0_2px_#777e90_inset]`,
  profileBtnIcon: `ml-[1rem] w-[1.25rem]`,
  dropZoneActive: `opacity-100 visible`,
  profileWrapper: `flex-[0_0_calc(100%-16rem)] w-[calc(100%-16rem)] pl-[4rem]`,
  profileBody: `relative z-[3] py-[5rem]`,
  navWrapper: `flex mx-[-0.375rem] mb-[2rem]`,
  navLink: `cursor-pointer shrink-0 mx-[0.375rem] py-[0.375rem] px-[0.75rem] rounded-[0.875rem] bg-none font-dm-sans text-[0.875rem] leading-[1.14286] font-bold text-[#777E90] transition-all duration-200 capitalize`,
  activeIndex: `text-[#23262F] bg-[#FCFCFD]`
};

const Profile = () => {
  const navLinks = ['On Sale', 'Collectibles', 'Created', 'Likes'];
  const [files, setFiles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropZoneActive, setIsDropZoneActive] = useState(false);

  const handleSaveBtn = (e) => {
    e.preventDefault();
    console.log('ECCOMI!');
  };

  const copyAddressToClipboard = () => {
    /* navigator.clipboard.writeText(user.attributes.ethAddress).then(() => {
        alert('Copied to clipboard!');
      }) */
  };

  useEffect(() => {
    console.log('FILES: ', files);
  }, [files]);

  return (
    <>
      <div className={style.profile}>
        <div className={`${style.profileHead} bg-[url('/images/bg-profile.jpg')]`}>
          <div className={style.profileTopCenter}>
            <div className={`${style.profileFile}`}>
              <DropZone
                dropZoneInnerBox={style.dropZoneInnerBox}
                dropZoneUploadIcon={style.dropZoneUploadIcon}
                styleButton
                className={`${isDropZoneActive ? 'active' : ''} ${style.dropZone}`}
                customStyle={customStyle}
                files={files}
                setFiles={setFiles}
                showSaveButton={true}
                styleSaveButton={`${style.dropZoneSaveBtn} ${isDropZoneActive ? 'active' : ''}`}
                handleSaveBtn={() => setIsDropZoneActive(!isDropZoneActive)}
              />
            </div>
            <div className={`${style.profileBtns} ${isDropZoneActive ? 'disable' : ''}`}>
              <Button
                onClick={() => setIsDropZoneActive(!isDropZoneActive)}
                className={style.profileBtn}
                variant="secondary"
              >
                Edit cover photo <InsertPhotoIcon className={style.profileBtnIcon} />
              </Button>
              <NextLink href="profile-edit">
                <Button className={style.profileBtn} variant="secondary">
                  Edit profile
                  <EditIcon className={style.profileBtnIcon} />
                </Button>
              </NextLink>
            </div>
          </div>
        </div>
        <div className={style.profileBody}>
          <div className={style.profileBottomCenter}>
            <User />
            <div className={style.profileWrapper}>
              <div className={style.navWrapper}>
                {navLinks.map((link, index) => {
                  return (
                    <a
                      key={index}
                      className={`${style.navLink} ${activeIndex === index ? style['activeIndex'] : null}`}
                      onClick={() => setActiveIndex(index)}
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
              <div className={style.profileContainer}>
                {activeIndex === 0 && <Items url="/api/discover" />}
                {activeIndex === 1 && <Items url="/api/discover" />}
                {activeIndex === 2 && <Items url="/api/discover" />}
                {activeIndex === 3 && <Items url="/api/discover" />}
                {activeIndex === 4 && <Followers url="/api/discover" />}
                {activeIndex === 5 && <Followers url="/api/discover" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
