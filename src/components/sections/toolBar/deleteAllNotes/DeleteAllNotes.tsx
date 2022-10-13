import { FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button } from '@material-ui/core';

import { deleteAllUserNote } from 'src/store/notes';

import { ConfirmAlert } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { useBtnToolBarStyles } from 'src/global/styles';

export const DeleteAllNotes: FC = (): ReactElement => {
  const { root } = useBtnToolBarStyles();
  const { t } = useTranslation('translation', {
    keyPrefix: 'delete_all_notes'
  });

  const [isAlert, setIsAlert] = useState(false);

  const dispatch = useDispatch();

  const showAlert = () => setIsAlert(true);

  const cancelAlert = () => setIsAlert(false);

  const confirmAlert = () => {
    dispatch(deleteAllUserNote());
  };

  return (
    <>
      {isAlert && (
        <ConfirmAlert
          alertMessage={t('alert_message')}
          cancelText={t('cancel')}
          confirmText={t('confirm')}
          confirmHandler={confirmAlert}
          cancelHandler={cancelAlert}
        />
      )}
      <FlexBoxStyled justifyContent='center' width='100%'>
        <Button style={{}} variant='text' className={root} onClick={showAlert}>
          {t('delete_all_notes')}
        </Button>
      </FlexBoxStyled>
    </>
  );
};
