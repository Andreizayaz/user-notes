import { FC, ReactElement } from 'react';

import { Button, Typography } from '@material-ui/core';
import { Alert } from '@mui/material';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { useAlertStyles } from './styles';

type ConfirmAlertPropsTypes = {
  alertMessage: string;
  cancelText: string;
  confirmText: string;
  cancelHandler: () => void;
  confirmHandler: () => void;
};

export const ConfirmAlert: FC<ConfirmAlertPropsTypes> = ({
  alertMessage,
  cancelText,
  confirmText,
  cancelHandler,
  confirmHandler
}): ReactElement => {
  const { root, alert, btn } = useAlertStyles();
  return (
    <FlexBoxStyled
      flexDirection='column'
      justifyContent='center'
      width='80%'
      className={root}
    >
      <Alert severity='error' className={alert}>
        <Typography style={{ marginBottom: '20px' }}>{alertMessage}</Typography>
        <FlexBoxStyled justifyContent='center' columnGap='30px'>
          <Button variant='outlined' onClick={cancelHandler} className={btn}>
            {cancelText}
          </Button>
          <Button variant='outlined' onClick={confirmHandler} className={btn}>
            {confirmText}
          </Button>
        </FlexBoxStyled>
      </Alert>
    </FlexBoxStyled>
  );
};
