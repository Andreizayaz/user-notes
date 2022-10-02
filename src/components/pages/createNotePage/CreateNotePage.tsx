import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { selectUserNotes } from 'src/store/notes';

import { MainContainer, CardForm } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { useStyles } from './styles';

export const CreateNotePage: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'create_note_page'
  });
  const userNotes = useSelector(selectUserNotes);

  const { heading } = useStyles();

  return (
    <MainContainer
      isUserNotes={!!userNotes.length}
      pageTitle={t('create_note_page_title')}
      isToolBar={false}
      isCreateLink={false}
      sectionTitle={t('create_note_page_title')}
    >
      <FlexBoxStyled flexDirection='column' rowGap='20px'>
        <Typography className={heading} component='h1' variant='h5'>
          {!userNotes.length ? t('create_first_note') : t('create_note')}
        </Typography>
        <CardForm />
      </FlexBoxStyled>
    </MainContainer>
  );
};
