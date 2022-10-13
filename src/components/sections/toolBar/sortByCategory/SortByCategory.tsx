import { FC, ReactElement } from 'react';

import { Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { MenuItemsType } from './types';

type SortByCategoryPropsTypes = {
  flexContainerClass: string;
  inputLabel: string;
  selectValue: string;
  selectLabel: string;
  menuData: MenuItemsType[];
  handleChange: (event: SelectChangeEvent) => void;
};

export const SortByCategory: FC<SortByCategoryPropsTypes> = ({
  flexContainerClass,
  inputLabel,
  selectValue,
  selectLabel,
  menuData,
  handleChange
}): ReactElement => (
  <Box sx={{ width: '33%', minWidth: 100 }} className={flexContainerClass}>
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{inputLabel}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectValue}
        label={selectLabel}
        onChange={handleChange}
      >
        {menuData.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);
