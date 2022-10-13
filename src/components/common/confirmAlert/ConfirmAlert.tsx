import { FC, ReactElement } from 'react';

import { ClickAwayListener } from '@material-ui/core';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { useAlertStyles } from 'src/global/styles';

import { CustomAlert } from './customAlert';

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
    <ClickAwayListener onClickAway={cancelHandler}>
      <FlexBoxStyled
        flexDirection='column'
        justifyContent='center'
        width='80%'
        className={root}
      >
        <CustomAlert
          alertClass={alert}
          alertMessage={alertMessage}
          btnClass={btn}
          cancelHandler={cancelHandler}
          cancelText={cancelText}
          confirmHandler={confirmHandler}
          confirmText={confirmText}
        />
      </FlexBoxStyled>
    </ClickAwayListener>
  );
};
