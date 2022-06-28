import { Avatar, Button } from '@mui/material';
import Control from '../../ui/Control/Controls';
import ChubieInput from '../../ui/Input/ChubieInput';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useState, useEffect } from 'react';
import ChubieTextarea from '../../ui/Textarea/ChubieTextarea';

const style = {
  editProfileSection: `pt-[5rem] pb-[8rem]`,
  editProfileCenter: `max-w-[56rem] mx-auto w-full`,
  detailsTop: `mb-[4rem]`,
  detailsTitle: `mb-[1rem] text-[3rem] font-dm-sans leading-[1.166667] font-bold`,
  detailsInfo: `text-[#777E90]`,
  profileUrl: `text-[#FCFCFD] font-medium`,
  detailsRow: `flex mx-[-1rem]`,
  detailsCol: `flex-[0_0_calc(50%-2rem)] w-[calc(50%-2rem)] mx-[1rem]`,
  detailsUser: `flex`,
  detailsAvatar: `shrink-0 w-[8rem] h-[8rem] mr-[2rem]`,
  detailsWrap: `grow`,
  detailsStage: `mb-[0.5rem] text-[1rem] leading-[1.5] font-medium`,
  detailsText: `mb-[1rem] text-[0.75rem] leading-[1.66667] text-[#777E90]`,
  detailsFile: `inline-block relative overflow-hidden`,
  detailsButtonInput: `shadow-[0_0_0_2px_#353945_inset] text-[#FCFCFD] h-[2.5rem] rounded-[1.25rem] px-[1rem] text-[0.875rem] cursor-pointer`,
  detailsLoadInput: `absolute top-0 left-0 text-[140rem] opacity-0 cursor-pointer`,
  detailsList: `mb-[2.5rem]`,
  detailsItem: `mb-[2.5rem] last:mb-0`,
  detailsCategory: `mb-[2rem] text-[1rem] leading-[1.5] font-medium`,
  detailsField: `mb-[2rem] last:mb-0`,
  detailsFieldLabel: `mb-[0.75rem] text-[0.75rem] leading-[1] font-bold uppercase text-[#B1B5C3]`,
  detailsFieldWrap: `relative`,
  classNameFormControl: `ml-0`,
  detailsNote: `text-[#777E90] text-[0.875rem] leading-[1.71429]`,
  detailsBtns: `flex mt-[2.5rem] pt-[2.5rem] border-t border-[#353945]`,
  detailsBtn: `bg-[#3772FF] mr-[2rem]`,
  detailClear: `text-[1rem] text-[#777E90]`,
  resetIcon: `mr-[0.5rem]`
};

const EditProfile = () => {
  const initialValue = {
    userName: '',
    bio: '',
    websiteUrl: '',
    twitter: '',
    instagram: '',
    discord: '',
    userPhoto: ''
  };

  const [formValue, setFormValue] = useState(initialValue);
  const [fileDataURL, setFileDataURL] = useState(null);

  const handleChangeForm = (e) => {
    const target = e.target;
    const { name, value } = target;

    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      setFormValue({ ...formValue, userPhoto: file });
    } else {
      setFormValue({
        ...formValue,
        [name]: value
      });
    }
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (formValue.userPhoto !== '') {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;

        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(formValue.userPhoto);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [formValue.userPhoto]);

  return (
    <>
      <Control backLink="/profile" backText="Back to profile" />
      <div className={style.editProfileSection}>
        <div className={style.editProfileCenter}>
          <div className={style.detailsTop}>
            <h1 className={style.detailsTitle}>Edit profile</h1>
            <div className={style.detailsInfo}>
              You can set preferred display name, create <strong className={style.profileUrl}>your profile URL</strong>
              and manage other personal settings.
            </div>
          </div>
          <div className={style.detailsRow}>
            <div className={style.detailsCol}>
              <div className={style.detailsUser}>
                <Avatar
                  className={style.detailsAvatar}
                  src={fileDataURL ? fileDataURL : '/images/avatar-creator.jpeg'}
                />
                <div className={style.detailsWrap}>
                  <div className={style.detailsStage}>Profile photo</div>
                  <div className={style.detailsText}>We recommend an image of at least 400x400. Gifs work too 🙌</div>
                  <div className={style.detailsFile}>
                    <Button className={style.detailsButtonInput}>Upload</Button>
                    <input
                      className={style.detailsLoadInput}
                      type="file"
                      name="userPhoto"
                      onChange={handleChangeForm}
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.detailsCol}>
              <div className={style.detailsList}>
                <div className={style.detailsItem}>
                  <div className={style.detailsCategory}>Account info</div>
                  <div className={style.detailsFieldset}>
                    <div className={style.detailsField}>
                      <div className={style.detailsFieldLabel}>display name</div>
                      <div className={style.detailsFieldWrap}>
                        <ChubieInput
                          placeholder="Enter your display name"
                          value={formValue.userName}
                          handleChange={handleChangeForm}
                          name="userName"
                          classNameFormControl={style.classNameFormControl}
                        />
                      </div>
                    </div>
                    <div className={`${style.detailsField} ${style.detailsFieldTextarea}`}>
                      <div className={style.detailsFieldLabel}>bio</div>
                      <div className={style.detailsFieldWrap}>
                        <ChubieTextarea
                          placeholder="ui8.net/Your custom URL"
                          value={formValue.bio}
                          handleChange={handleChangeForm}
                          name="bio"
                          isTextarea={true}
                          classNameFormControl={style.classNameFormControl}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.detailsItem}>
                  <div className={style.detailsCategory}>Social</div>
                  <div className={style.detailsFieldset}>
                    <div className={style.detailsField}>
                      <div className={style.detailsFieldLabel}>portfolio or website</div>
                      <div className={style.detailsFieldWrap}>
                        <ChubieInput
                          placeholder="Enter URL"
                          value={formValue.websiteUrl}
                          handleChange={handleChangeForm}
                          name="websiteUrl"
                          classNameFormControl={style.classNameFormControl}
                        />
                      </div>
                    </div>
                    <div className={style.detailsField}>
                      <div className={style.detailsFieldLabel}>twitter</div>
                      <div className={style.detailsFieldWrap}>
                        <ChubieInput
                          placeholder="@twitter username"
                          value={formValue.twitter}
                          handleChange={handleChangeForm}
                          name="twitter"
                          classNameFormControl={style.classNameFormControl}
                        />
                      </div>
                    </div>
                    <div className={style.detailsField}>
                      <div className={style.detailsFieldLabel}>instagram</div>
                      <div className={style.detailsFieldWrap}>
                        <ChubieInput
                          placeholder="@instagram username"
                          value={formValue.instagram}
                          handleChange={handleChangeForm}
                          name="instagram"
                          classNameFormControl={style.classNameFormControl}
                        />
                      </div>
                    </div>
                    <div className={style.detailsField}>
                      <div className={style.detailsFieldLabel}>discord</div>
                      <div className={style.detailsFieldWrap}>
                        <ChubieInput
                          placeholder="#discord username"
                          value={formValue.discord}
                          handleChange={handleChangeForm}
                          name="discord"
                          classNameFormControl={style.classNameFormControl}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.detailsNote}>
                To update your settings you should sign message through your wallet. Click &apos;Update profile&apos;
                then sign the message
              </div>
              <div className={style.detailsBtns}>
                <Button variant="primary" className={`${style.button} ${style.detailsBtn}`}>
                  Update Profile
                </Button>
                <Button onClick={() => setFormValue(initialValue)} className={`${style.button} ${style.detailClear}`}>
                  <HighlightOffIcon className={style.resetIcon} />
                  Clear all
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
