import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Box, Pagination } from '@mui/material';

import { selectUserNotes } from 'src/store/notes';

import { MainContainer, NotesList } from 'src/components/common';

import { COUNT_PER_PAGE } from 'src/constants';

export const AllNotesPage: FC = (): ReactElement => {
  const { ceil } = Math;
  const { t } = useTranslation('translation', { keyPrefix: 'all_notes_page' });
  const userNotes = [...useSelector(selectUserNotes)].reverse();
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(
    ceil(userNotes.length / COUNT_PER_PAGE)
  );

  useEffect(() => {
    setCountPages(ceil(userNotes.length / COUNT_PER_PAGE));
  }, [userNotes]);

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getCurrentNotes = () => {
    const start = page * COUNT_PER_PAGE - COUNT_PER_PAGE;
    const end = page * COUNT_PER_PAGE;
    return userNotes.slice(start, end);
  };

  return (
    <MainContainer
      isUserNotes={!!userNotes.length}
      sectionTitle={t('all_notes_page_heading')}
      yesNotes={t('yes_notes')}
      noNotes={t('no_notes')}
      pageTitle={t('all_notes_page_title')}
      isToolBar={!!userNotes.length}
    >
      <Box>
        <NotesList userNotes={getCurrentNotes()} />
        {userNotes.length > COUNT_PER_PAGE && (
          <Pagination
            count={countPages}
            page={page}
            onChange={handleChange}
            style={{ margin: '20px auto', width: 'fit-content' }}
          />
        )}
      </Box>
    </MainContainer>
  );
};
