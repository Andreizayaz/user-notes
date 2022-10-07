import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Box, Pagination } from '@mui/material';

import { NoteType, selectUserNotes } from 'src/store/notes';

import { MainContainer, NotesList } from 'src/components/common';

import { COUNT_PER_PAGE } from 'src/constants';

export const SearchNotesPage: FC = (): ReactElement => {
  const location = useLocation();
  const { ceil } = Math;
  const { t } = useTranslation('translation', {
    keyPrefix: 'found_notes_page'
  });
  const { filteredNotes } = useSelector(selectUserNotes);
  const searchNotes = location.state as NoteType[];
  const [page, setPage] = useState(1);
  const [countPages, setCountPages] = useState(
    ceil(searchNotes.length / COUNT_PER_PAGE)
  );

  const currNotes = filteredNotes.length ? filteredNotes : searchNotes;

  useEffect(() => {
    setCountPages(ceil(currNotes.length / COUNT_PER_PAGE));
  }, [searchNotes, filteredNotes]);

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getCurrentNotes = () => {
    const start = page * COUNT_PER_PAGE - COUNT_PER_PAGE;
    const end = page * COUNT_PER_PAGE;
    return currNotes.slice(start, end);
  };

  return (
    <MainContainer
      isUserNotes={!!searchNotes.length}
      sectionTitle={t('found_notes_page_heading')}
      pageTitle={t('found_notes_page_title')}
      isToolBar={!!searchNotes.length}
    >
      <Box>
        <NotesList userNotes={getCurrentNotes()} />
        {currNotes.length > COUNT_PER_PAGE && (
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
