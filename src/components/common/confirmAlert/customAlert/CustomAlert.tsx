import { FC, ReactElement } from 'react';

import { Alert } from '@mui/material';
import { Button, Typography } from '@material-ui/core';

import { FlexBoxStyled } from 'src/components/styledComponents';

type CustomAlertPropsTypes = {
  alertClass: string;
  btnClass: string;
  alertMessage: string;
  cancelText: string;
  confirmText: string;
  cancelHandler: () => void;
  confirmHandler: () => void;
};

export const CustomAlert: FC<CustomAlertPropsTypes> = ({
  alertClass,
  alertMessage,
  cancelHandler,
  btnClass,
  cancelText,
  confirmHandler,
  confirmText
}): ReactElement => (
  <Alert severity='error' className={alertClass}>
    <Typography style={{ marginBottom: '20px' }}>{alertMessage}</Typography>
    <FlexBoxStyled justifyContent='center' columnGap='30px'>
      <Button variant='outlined' onClick={cancelHandler} className={btnClass}>
        {cancelText}
      </Button>
      <Button variant='outlined' onClick={confirmHandler} className={btnClass}>
        {confirmText}
      </Button>
    </FlexBoxStyled>
  </Alert>
);
