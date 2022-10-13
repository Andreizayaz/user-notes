import { ChangeEvent, FC, ReactElement } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { TextField } from '@material-ui/core';

type CustomTextFieldPropsTypes = {
  id: string;
  label: string;
  name: string;
  isMultiline?: boolean;
  isError: boolean;
  helperText?: string;
  value: string;
  register: UseFormRegister<FieldValues>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CustomTextField: FC<CustomTextFieldPropsTypes> = ({
  id,
  label,
  isMultiline = false,
  isError,
  helperText,
  value,
  name,
  handleChange,
  register
}): ReactElement => (
  <TextField
    {...register(id)}
    id={id}
    label={label}
    variant='outlined'
    fullWidth
    multiline={isMultiline}
    minRows={10}
    name={name}
    value={value}
    onChange={handleChange}
    error={isError}
    helperText={helperText}
  />
);
