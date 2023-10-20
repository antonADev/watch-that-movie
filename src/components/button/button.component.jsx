import { BaseButton, InvertedButton } from './button.styles.jsx';

import Theme from '../../Theme.jsx';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted',
};
//TEST
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <Theme>
      <CustomButton {...otherProps}>{children}</CustomButton>
    </Theme>
  );
};

export default Button;
