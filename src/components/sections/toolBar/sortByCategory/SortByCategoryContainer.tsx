import { FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SelectChangeEvent } from '@mui/material/Select';

import { sortUserNotes } from 'src/store/notes';

import { SortByCategory } from './SortByCategory';

import {
  SORT_BY_ASC_DATE,
  SORT_BY_DESC_DATE,
  SORT_BY_TITLE
} from 'src/constants';

import { useSortFlexStyles } from 'src/global/styles';

type SortByCategoryContainerPropsTypes = {
  sortType: string;
};

const SortByCategoryContainer: FC<SortByCategoryContainerPropsTypes> = ({
  sortType
}): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });

  const menuData = [
    {
      value: SORT_BY_DESC_DATE,
      label: t('desc_date')
    },
    {
      value: SORT_BY_ASC_DATE,
      label: t('asc_date')
    },
    {
      value: SORT_BY_TITLE,
      label: t('title')
    }
  ];

  const { flexStyle } = useSortFlexStyles();

  const [category, setCategory] = useState(sortType);

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    dispatch(sortUserNotes(value));
    setCategory(value);
  };

  return (
    <SortByCategory
      flexContainerClass={flexStyle}
      handleChange={handleChange}
      inputLabel={t('sort_by')}
      selectLabel={t('sort_by')}
      selectValue={category}
      menuData={menuData}
    />
  );
};

export default SortByCategoryContainer;
SortByCategoryContainer.displayName = 'SortByCategoryContainer';
