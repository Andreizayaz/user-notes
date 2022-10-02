import { Button } from '@mui/material';
import { FC, ReactElement } from 'react';
import { FlexBoxStyled } from 'src/components/styledComponents';

type SaveCancelBtnsPropsTypes = {
  saveBtnText: string;
  cancelBtnText: string;
  handleCancel: () => void;
};

export const SaveCancelBtns: FC<SaveCancelBtnsPropsTypes> = ({
  saveBtnText,
  cancelBtnText,
  handleCancel
}): ReactElement => (
  <FlexBoxStyled columnGap='20px'>
    <Button color='primary' variant='contained' type='submit'>
      {saveBtnText}
    </Button>
    <Button color='error' variant='contained' onClick={handleCancel}>
      {cancelBtnText}
    </Button>
  </FlexBoxStyled>
);
