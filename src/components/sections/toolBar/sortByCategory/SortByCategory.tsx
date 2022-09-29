import { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SortByCategory: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });
  const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ width: '33%', minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{t('sort_by')}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={category}
          label='Sort By'
          onChange={handleChange}
        >
          <MenuItem value='date'>{t('date')}</MenuItem>
          <MenuItem value='title'>{t('title')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
