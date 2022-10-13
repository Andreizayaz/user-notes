import { FC, ReactElement, Ref } from 'react';
import { Link } from 'react-router-dom';

import { Box, List, ListItem, Typography } from '@material-ui/core';

import { NoteType } from 'src/store/notes';

import { NOTE_LINK } from 'src/constants';

type SearchResultPropsTypes = {
  isNoFoundText: boolean;
  isResult: boolean;
  noFoundTextClass: string;
  noFoundText: string;
  searchResult: NoteType[];
  searchResultClass: string;
  linkRef: Ref<HTMLAnchorElement>;
  linkClass: string;
};

export const SearchResult: FC<SearchResultPropsTypes> = ({
  isNoFoundText,
  noFoundTextClass,
  noFoundText,
  isResult,
  searchResult,
  searchResultClass,
  linkRef,
  linkClass
}): ReactElement => (
  <Box sx={{ position: 'relative', width: '100%' }}>
    {isNoFoundText && (
      <Typography className={noFoundTextClass}>{noFoundText}</Typography>
    )}
    {isResult && (
      <List className={searchResultClass}>
        {searchResult.map((note) => (
          <ListItem key={note.id} style={{ padding: '20px' }} divider>
            <Link
              ref={linkRef}
              to={`${NOTE_LINK}/${note.id}`}
              state={note}
              className={linkClass}
            >
              <Typography component='h5' variant='h5'>
                {note.title}
              </Typography>
              <Typography component='p'>{note.text}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    )}
  </Box>
);
