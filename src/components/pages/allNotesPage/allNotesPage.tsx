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
  const [countPages] = useState(ceil(userNotes.length / COUNT_PER_PAGE));
  const [currentNotes, setCurrentNotes] = useState([
    ...userNotes.slice(0, COUNT_PER_PAGE)
  ]);

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const start = page * COUNT_PER_PAGE - COUNT_PER_PAGE;
    const end = page * COUNT_PER_PAGE;
    setCurrentNotes([...userNotes.slice(start, end)]);
  }, [page]);

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
        <NotesList userNotes={currentNotes} />
        <Pagination
          count={countPages}
          page={page}
          onChange={handleChange}
          style={{ margin: '20px auto', width: 'fit-content' }}
        />
      </Box>
    </MainContainer>
  );
};
