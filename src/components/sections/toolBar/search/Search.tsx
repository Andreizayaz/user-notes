import {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  useState,
  FocusEvent,
  useRef
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { TextField, List, Box } from '@mui/material';
import { ListItem, Typography } from '@material-ui/core';

import { NoteType, selectUserNotes } from 'src/store/notes';

import {
  BaseButtonStyled,
  FlexBoxStyled
} from 'src/components/styledComponents';

import { NOTE_LINK, SEARCH_RESULT_LIST_LINK } from 'src/constants';

import { useStyles } from './styles';

export const Search: FC = (): ReactElement => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { text, list, link } = useStyles();
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });
  const [isList, setIsList] = useState(false);
  const [searchResult, setSearchResult] = useState<NoteType[]>([]);
  const { userNotes } = useSelector(selectUserNotes);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsList(false);
    searchResult.length &&
      navigate(SEARCH_RESULT_LIST_LINK, { state: searchResult });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const result = value.trim().length
      ? userNotes.filter(
          ({ title, tagsList }) =>
            title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            tagsList.includes(value.toLocaleLowerCase())
        )
      : [];

    setSearchResult(result);
  };

  const handleFocus = () => setIsList(true);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.currentTarget.contains(e.relatedTarget) && setIsList(false);
  };

  return (
    <FlexBoxStyled flexDirection='column' width='33%'>
      <FlexBoxStyled
        alignItems='center'
        justifyContent='flex-start'
        component='form'
        width='100%'
        sx={{ columnGap: '3px' }}
        onSubmit={handleSubmit}
      >
        <TextField
          id='outlined-basic'
          label={t('search_note')}
          variant='outlined'
          sx={{ minWidth: '100px', width: '70%' }}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <BaseButtonStyled
          type='submit'
          variant='contained'
          sx={{ width: '25%' }}
          disabled={!searchResult.length}
        >
          {t('search')}
        </BaseButtonStyled>
      </FlexBoxStyled>
      {isList && (
        <Box sx={{ position: 'relative', width: '100%' }}>
          {!searchResult.length && (
            <Typography className={text}>{t('no_found')}</Typography>
          )}
          {!!searchResult.length && (
            <List className={list}>
              {searchResult.map((note) => (
                <ListItem key={note.id} style={{ padding: '20px' }} divider>
                  <Link
                    ref={linkRef}
                    to={`${NOTE_LINK}/${note.id}`}
                    state={note}
                    className={link}
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
      )}
    </FlexBoxStyled>
  );
};
