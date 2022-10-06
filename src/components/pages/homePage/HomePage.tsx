import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import { selectUserNotes } from 'src/store/notes';

import { MainContainer, NotesList } from 'src/components/common';
import { LinkStyled } from 'src/components/styledComponents';

import { ALL_NOTES_LINK, MAX_LIST_COUNT_ON_HOME_PAGE } from 'src/constants';

export const HomePage: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'home_page' });
  const { userNotes } = useSelector(selectUserNotes);

  return (
    <MainContainer
      pageTitle={t('home_page_title')}
      isToolBar={!!userNotes.length}
      isUserNotes={!!userNotes.length}
      sectionTitle={t('home_page_heading')}
      yesNotes={t('yes_notes')}
      noNotes={t('no_notes')}
    >
      {!!userNotes.length && (
        <Box>
          <NotesList
            userNotes={userNotes.filter(
              (_, index) => index < MAX_LIST_COUNT_ON_HOME_PAGE
            )}
          />
          {userNotes.length > MAX_LIST_COUNT_ON_HOME_PAGE && (
            <LinkStyled
              to={ALL_NOTES_LINK}
              sx={{
                margin: '50px 0',
                width: '100%',
                color: 'rgba(210,134,147, .9)',
                textAlign: 'center'
              }}
            >
              {t('view_all')}
            </LinkStyled>
          )}
        </Box>
      )}
    </MainContainer>
  );
};
