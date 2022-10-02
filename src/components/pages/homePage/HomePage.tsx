import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectUserNotes } from 'src/store/notes';

import { MainContainer, NoteCard } from 'src/components/common';
import { FlexBoxStyled, LinkStyled } from 'src/components/styledComponents';
import { Link } from 'react-router-dom';
import { ALL_NOTES_LINK, MAX_LIST_COUNT_ON_HOME_PAGE } from 'src/constants';

export const HomePage: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'home_page' });
  const userNotes = [...useSelector(selectUserNotes)];

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
        <FlexBoxStyled
          rowGap='5px'
          columnGap='5px'
          style={{ marginTop: '50px' }}
          justifyContent='center'
        >
          {userNotes
            .reverse()
            .filter((_, index) => index < MAX_LIST_COUNT_ON_HOME_PAGE)
            .map((note) => (
              <Link
                key={note.id}
                to='/'
                style={{
                  alignSelf: 'stretch',
                  width: '33%',
                  transition: 'all 1s'
                }}
              >
                <NoteCard note={note} width='100%' />
              </Link>
            ))}
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
        </FlexBoxStyled>
      )}
    </MainContainer>
  );
};
