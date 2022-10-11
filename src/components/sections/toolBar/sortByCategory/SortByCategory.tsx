import { FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { sortUserNotes } from 'src/store/notes';

import {
  SORT_BY_ASC_DATE,
  SORT_BY_DESC_DATE,
  SORT_BY_TITLE
} from 'src/constants';
import { useFlexStyles } from './styles';

type SortByCategoryPropsTypes = {
  sortType: string;
};

export const SortByCategory: FC<SortByCategoryPropsTypes> = ({
  sortType
}): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });

  const { flexStyle } = useFlexStyles();

  const [category, setCategory] = useState(sortType);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    dispatch(sortUserNotes(value));
    setCategory(value);
  };

  return (
    <Box sx={{ width: '33%', minWidth: 100 }} className={flexStyle}>
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
