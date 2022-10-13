import { ChangeEvent, FC, FormEvent, ReactElement, FocusEvent } from 'react';

import { TextField } from '@mui/material';
import { ClickAwayListener } from '@mui/base';

import {
  BaseButtonStyled,
  FlexBoxStyled
} from 'src/components/styledComponents';

type SearchFieldPropsTypes = {
  fieldLabel: string;
  btnText: string;
  inputFieldClass: string;
  searchBtnClass: string;
  isDisabledBtn: boolean;
  hideSearchList: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLDivElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
};

export const SearchField: FC<SearchFieldPropsTypes> = ({
  fieldLabel,
  btnText,
  inputFieldClass,
  searchBtnClass,
  isDisabledBtn,
  hideSearchList,
  handleChange,
  handleSubmit,
  handleBlur,
  handleFocus
}): ReactElement => (
  <ClickAwayListener onClickAway={hideSearchList}>
    <FlexBoxStyled
      alignItems='center'
      justifyContent='flex-start'
      component='form'
      width='100%'
      sx={{ columnGap: '3px' }}
      onSubmit={handleSubmit}
    >
      <TextField
        id='outlined-basic'
        label={fieldLabel}
        variant='outlined'
        sx={{ minWidth: '100px', width: '70%' }}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={inputFieldClass}
      />
      <BaseButtonStyled
        type='submit'
        variant='contained'
        sx={{ width: '25%' }}
        disabled={isDisabledBtn}
        className={searchBtnClass}
      >
        {btnText}
      </BaseButtonStyled>
    </FlexBoxStyled>
  </ClickAwayListener>
);
