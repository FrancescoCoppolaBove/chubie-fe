import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

const StyledButton = styled('button')(({ theme }) => ``);
const StyledListbox = styled('ul')(({ theme }) => ``);
const StyledOption = styled(OptionUnstyled)(({ theme }) => ``);
const StyledPopper = styled(PopperUnstyled)(({ theme }) => ``);

const CustomSelect = (props) => {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.component
  };

  return <SelectUnstyled {...props} components={components} />;
};

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType
  })
};

export default CustomSelect;
