import DropZone from '../ui/Dropzone/Dropzone';
import ChubieInput from '../ui/Input/ChubieInput';
import ChubieSelect from '../ui/Select/ChubieSelect';
import ChubieSwitch from '../ui/Switch/CubieSwitch';
import ChubieDatepicker from '../ui/Datepicker/ChubieDatepicker';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import ChubieAutocomplete from '../ui/Autocomplete/ChubieAutocomplete';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChubieCard from '../ui/Card/ChubieCard';

import { useState, useEffect } from 'react';
import { optionsRoyalties } from '../../const/const';
import { Button } from '@mui/material';
import { fromWeiToEth } from '../../utils/utils';

const style = {
  uploadSection: `py-[8rem]`,
  uploadInner: `max-w-7xl mx-auto flex w-full flex-start`,
  uploadWrapper: `flex-[0_0_calc(100%-22rem)] w-[calc(100%-22rem)] pr-[8rem]`,
  uploadHead: `flex mb-[2.5rem]`,
  uploadTitle: `mr-auto text-[3rem] leading-[1.16667] font-dm-sans font-bold`,
  uploadForm: ``,
  uploadList: `mb-[2.5rem] pb-[2.5rem] border-b-[1px] border-[#353945]`,
  uploadItem: `mb-[2.5rem] last:mb-0`,
  uploadCategory: `text-[1rem] leading-[1.5] font-medium`,
  uploadNote: `mt-[0.25rem] text-[0.75rem] leading-[1.66667] text-[#777E90]`,
  uploadFile: `mt-[1rem] overflow-hidden h-[11.5rem]`,
  uploadFieldset: `mt-[2rem]`,
  uploadField: `mb-[2rem] last:mb-0`,
  uploadFieldLabel: `mb-[0.75rem] text-[0.75rem] leading-[1] font-bold uppercase text-[#B1B5C3]`,
  uploadRow: `flex mx-[-0.625rem]`,
  uploadCol: `flex-[0_0_calc(50%-1.25rem)] w-[calc(50%-1.25rem)] mx-[0.625rem]`,
  uploadOptions: `mb-[2.5rem]`,
  uploadOption: `mb-[2rem] last:mb-0 flex flex-start`,
  uploadOptionDatePicker: `flex flex-col mb-[2rem]`,
  uploadBox: `grow`,
  uploadCategory: `grow`,
  uploadText: `mt-[0.25rem] text-[0.75rem] leading-[1.66667] text-[#777E90]`,
  uploadSwitch: `shrink-0 ml-[1.5rem]`,
  uploadAddressField: `flex flex-col`,
  uploadWlAddress: `flex gap-6`,
  uploadAddIcon: `mr-[0.25rem] text-[1.25rem]`,
  uploadAddressBtn: `mt-[2rem] flex justify-end`,
  uploadWlAddressInput: `flex-[0_0_calc(40%) w-[40%]]`,
  uploadWlIconButton: `w-[3.75rem]`,
  uploadDeleteIcon: `text-brand-red`,
  uploadSaveIcon: `text-brand-green`,
  uploadInputFormControl: `ml-0`,
  uploadFoot: `flex justify-end items-center`,
  uploadCreateBtn: `bg-[#3772FF]`,
  uploadArrowIcon: `ml-[0.938rem] w-[1.4rem]`,
  uploadPreview: `shrink-0 w-[22rem]`,
  uploadPreviewInner: `bg-[#141416] shadow-[inset_0_0_0_1px_#353945] p-[3rem] rounded-[1rem]`
};

const Upload = () => {
  const initialFormValue = {
    itemName: '',
    itemDescription: '',
    royalties: '1%',
    supply: 1,
    enableMintDate: false,
    enableWlAddress: false,
    mintDate: new Date(),
    addresses: [{ value: '', id: 0 }],
    itemNameValid: true,
    itemDescriptionValid: true,
    supplyValid: true
  };
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState({ itemName: '', itemDescription: '', supply: '' });
  const [isFormValid, setIsFormValid] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    console.log('FILES: ', files);
    setIsFormValid(
      formValue.itemName !== '' && formValue.itemDescription !== '' && formValue.supply && files.length > 0
    );
  }, [files]);

  const validateField = (e) => {
    const target = e.target;
    const { name, value } = target;
    const positiveNumbersRegex = /^[+]?\d+([.]\d+)?$/;

    switch (name) {
      case 'itemName':
        setFormValue({
          ...formValue,
          itemName: value,
          itemNameValid: value && value !== '' && value.trim().length !== 0
        });
        setFormErrors({
          ...formErrors,
          itemName: value && value !== '' && value.trim().length !== 0 ? '' : 'Name is required'
        });
        break;
      case 'itemDescription':
        setFormValue({
          ...formValue,
          itemDescription: value,
          itemDescriptionValid: value && value !== '' && value.trim().length !== 0
        });
        setFormErrors({
          ...formErrors,
          itemDescription: value && value !== '' && value.trim().length !== 0 ? '' : 'Description is required'
        });
        break;
      case 'supply':
        setFormValue({ ...formValue, supply: value, supplyValid: value && positiveNumbersRegex.test(value) });
        setFormErrors({
          ...formErrors,
          supply: !value
            ? 'Supply is required'
            : !positiveNumbersRegex.test(value)
            ? 'Supply must be positive number'
            : ''
        });
      default:
        break;
    }
    setIsFormValid(
      formValue.itemName !== '' && formValue.itemDescription !== '' && formValue.supply && files.length > 0
    );
  };

  const handleBlur = (e) => {
    validateField(e);
    setIsFormValid(
      formValue.itemName !== '' && formValue.itemDescription !== '' && formValue.supply && files.length > 0
    );
  };

  const handleChangeSwitch = (e, type) => {
    const target = e.target;
    const { name, checked } = target;
    setFormValue({
      ...formValue,
      [name]: checked,
      addresses: type === 'enableWlAddresses' && !checked ? [{ value: '', id: 0 }] : formValue.addresses
    });
  };

  const handleChangeForm = (e) => {
    const target = e.target;
    const { name, value } = target;
    setFormValue({
      ...formValue,
      [name]: value
    });
    validateField(e);
  };

  const handleChangeAddress = (e, index) => {
    const target = e.target;
    const { name, value } = target;
    const obj = formValue.addresses.find((item) => item.id === index);
    obj.value = value;
    setFormValue({ ...formValue, addresses: [...formValue.addresses] });
  };

  const handleAddress = (address, index, action) => {
    if (action === 'delete' && index > 0) {
      setFormValue({ ...formValue, addresses: formValue.addresses.filter((x) => x.id !== address.id) });
    }

    if (action === 'save') {
      console.log(formValue);
    }
  };

  const handleAddWlRow = () => {
    setFormValue({
      ...formValue,
      addresses: [...formValue.addresses, { value: '', id: formValue.addresses.length }]
    });
  };

  return (
    <>
      <section className={style.uploadSection}>
        <div className={style.uploadInner}>
          <div className={style.uploadWrapper}>
            <div className={style.uploadHead}>
              <h2 className={style.uploadTitle}>Create Time NFT</h2>
            </div>
            <div className={style.uploadForm}>
              <div className={style.uploadList}>
                <div className={style.uploadItem}>
                  <div className={style.uploadCategory}>Upload file*</div>
                  <div className={style.uploadNote}>Drag or choose your file to upload</div>
                  <div className={style.uploadFile}>
                    <DropZone files={files} setFiles={setFiles} />
                  </div>
                </div>
                <div className={style.uploadItem}>
                  <div className={style.uploadCategory}>Item Details</div>
                  <div className={style.uploadFieldset}>
                    <div className={style.uploadField}>
                      <div className={style.uploadFieldLabel}>Item name *</div>
                      <ChubieInput
                        required={true}
                        error={!formValue.itemNameValid}
                        placeholder="e.g. Redeemable Bitcoin Card with logo"
                        name="itemName"
                        handleChange={handleChangeForm}
                        handleBlur={handleBlur}
                        value={formValue.itemName}
                        helperText={formErrors.itemName}
                      />
                    </div>
                    <div className={style.uploadField}>
                      <div className={style.uploadFieldLabel}>Item Description *</div>
                      <ChubieInput
                        required={true}
                        error={!formValue.itemDescriptionValid}
                        placeholder="e.g. After purchasing you will be able to received the logo..."
                        name="itemDescription"
                        handleChange={handleChangeForm}
                        handleBlur={handleBlur}
                        value={formValue.itemDescription}
                        helperText={formErrors.itemDescription}
                      />
                    </div>
                    <div className={style.uploadField}>
                      <div className={style.uploadFieldLabel}>Collection</div>
                      <ChubieAutocomplete />
                    </div>
                    <div className={style.uploadRow}>
                      <div className={style.uploadCol}>
                        <div className={style.uploadField}>Royalties</div>
                        <ChubieSelect
                          name="royalties"
                          options={optionsRoyalties}
                          value={formValue.royalties}
                          handleChange={handleChangeForm}
                        />
                      </div>
                      <div className={style.uploadCol}>
                        <div className={style.uploadField}>Supply*</div>
                        <ChubieInput
                          placeholder="0/1000"
                          required={true}
                          type="number"
                          name="supply"
                          error={!formValue.supplyValid}
                          value={formValue.supply}
                          handleChange={handleChangeForm}
                          handleBlur={handleBlur}
                          helperText={formErrors.supply}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.uploadOptions}>
                <div className={style.uploadOption}>
                  <div className={style.uploadBox}>
                    <div className={style.uploadCategory}> Put on sale</div>
                    <div className={style.uploadText}> You&apos;ll receive bids on this item </div>
                  </div>
                  <ChubieSwitch
                    className={style.uploadSwitch}
                    disabled={false}
                    checked={formValue.enableMintDate}
                    handleChange={handleChangeSwitch}
                    name="enableMintDate"
                  />
                </div>
                {formValue.enableMintDate && (
                  <div className={style.uploadOptionDatePicker}>
                    <div className={style.uploadField}>Mint date</div>
                    <ChubieDatepicker
                      name="mintDate"
                      openTo="year"
                      value={formValue.mintDate}
                      handleChange={handleChangeForm}
                    />
                  </div>
                )}
                <div className={style.uploadOption}>
                  <div className={style.uploadBox}>
                    <div className={style.uploadCategory}> Whitelist address</div>
                    <div className={style.uploadText}> Enter the WL address that sill mint it before others </div>
                  </div>
                  <ChubieSwitch
                    className={style.uploadSwitch}
                    disabled={false}
                    checked={formValue.enableWlAddress}
                    handleChange={(e) => handleChangeSwitch(e, 'enableWlAddresses')}
                    name="enableWlAddress"
                  />
                </div>
                {formValue.enableWlAddress && (
                  <div className={style.uploadWlBox}>
                    {formValue.addresses.map((address, index) => {
                      return (
                        <div key={index} className={style.uploadAddressField}>
                          <div className={style.uploadCategory}> Whitelist address</div>
                          <div className={style.uploadWlAddress}>
                            <ChubieInput
                              classNameFormControl={style.uploadInputFormControl}
                              className={style.uploadWlAddressInput}
                              placeholder="Insert address ex. 0xab1A123A1B011Abc1A1AA111A11a1234567A12A1"
                              value={address.value}
                              handleChange={(e) => handleChangeAddress(e, index)}
                            />
                            <IconButton
                              onClick={() => handleAddress(address, index, 'delete')}
                              className={style.uploadWlIconButton}
                            >
                              <DeleteIcon className={style.uploadDeleteIcon} />
                            </IconButton>
                            <IconButton
                              onClick={() => handleAddress(address, index, 'save')}
                              className={style.uploadWlIconButton}
                            >
                              <DoneIcon className={style.uploadSaveIcon} />
                            </IconButton>
                          </div>
                        </div>
                      );
                    })}

                    <div className={style.uploadAddressBtn}>
                      <Button variant="secondary" onClick={handleAddWlRow}>
                        <AddIcon className={style.uploadAddIcon} />
                        Add address
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              <div className={style.uploadFoot}>
                <Button disabled={!isFormValid} className={style.uploadCreateBtn} variant="primary">
                  Create NFT <ArrowRightAltIcon className={style.uploadArrowIcon} />
                </Button>
              </div>
            </div>
          </div>
          <div className={style.uploadPreview}>
            <div className={style.uploadPreviewInner}>
              <ChubieCard
                inStock={formValue.supply}
                link="/"
                nftImage={files.length > 0 ? files[0].preview : 'http://via.placeholder.com/300'}
                title={formValue.itemName !== '' ? formValue.itemName : 'Insert a title'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upload;
