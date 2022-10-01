import { FC, ReactElement } from 'react';

import { Button, Typography } from '@material-ui/core';
import { Clear } from '@mui/icons-material';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { Form } from './form';

type CardFormPropsTypes = {
  isEdit?: boolean;
};

export const CardForm: FC<CardFormPropsTypes> = ({
  isEdit = false
}): ReactElement => (
  <FlexBoxStyled flexDirection='column' width='50%' sx={{ marginTop: '50px' }}>
    {isEdit && (
      <FlexBoxStyled>
        <Typography></Typography>
        <Button>
          <Clear />
        </Button>
      </FlexBoxStyled>
    )}
    <Form />
  </FlexBoxStyled>
);
