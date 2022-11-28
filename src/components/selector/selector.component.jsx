import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setGenre } from '../../features/form/formSlice';

import {
  SelectContainer,
  SelectLabelButton,
  DropdownStyle,
  DropdownItem,
} from './selector.styles';

const Genre = ({ label, values, onChange, formData, setFormData }) => {
  const [currentValue, setCurrentValue] = useState(formData.genre.name);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSelection = (value) => {
    setFormData({ ...formData, genre: value });
    setCurrentValue(value.name);
  };
  const handleChange = (value) => {
    handleSelection(value); // call method, if it exists
    if (onChange) onChange(value.id);
    // close, after all tasks are finished
    handleClose();
  };
  return (
    <SelectContainer>
      <SelectLabelButton onClick={handleOpen}>
        {currentValue ? currentValue : label}
      </SelectLabelButton>
      <DropdownStyle isVisible={open}>
        {values.map((value, index) => (
          <DropdownItem
            onClick={() => handleChange(value)}
            active={value.name === currentValue}
            key={index}>
            {value.name}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
};

export default Genre;
