import { FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { NoteType, setUserNotesSortType, sortUserNotes } from 'src/store/notes';

import {
  SORT_BY_ASC_DATE,
  SORT_BY_DESC_DATE,
  SORT_BY_TITLE
} from 'src/constants';

import { getSortedUserNotesByCategory } from 'src/global/helpers';

type SortByCategoryPropsTypes = {
  userNotes: NoteType[];
  sortType: string;
};

export const SortByCategory: FC<SortByCategoryPropsTypes> = ({
  userNotes,
  sortType
}): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });

  const [category, setCategory] = useState(sortType);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    dispatch(setUserNotesSortType(value));
    dispatch(sortUserNotes(getSortedUserNotesByCategory(userNotes, value)));
    setCategory(value);
  };

  return (
    <Box sx={{ width: '33%', minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{t('sort_by')}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={category}
          label={t('sort_by')}
          onChange={handleChange}
        >
          <MenuItem value={SORT_BY_DESC_DATE}>{t('desc_date')}</MenuItem>
          <MenuItem value={SORT_BY_ASC_DATE}>{t('asc_date')}</MenuItem>
          <MenuItem value={SORT_BY_TITLE}>{t('title')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
