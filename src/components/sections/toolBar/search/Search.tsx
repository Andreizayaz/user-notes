import { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TextField, List, ListItemButton } from '@mui/material';
import {
  BaseButtonStyled,
  FlexBoxStyled
} from 'src/components/styledComponents';

export const Search: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });
  const [isList, setIsList] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsList(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleFocus = () => setIsList(true);

  const handleBlur = () => setIsList(false);

  return (
    <FlexBoxStyled flexDirection='column'>
      <FlexBoxStyled
        alignItems='center'
        component='form'
        onSubmit={handleSubmit}
      >
        <TextField
          id='outlined-basic'
          label={t('search_note')}
          variant='outlined'
          sx={{ minWidth: '300px' }}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <BaseButtonStyled
          type='submit'
          variant='contained'
          sx={{ marginLeft: '10px' }}
        >
          {t('search')}
        </BaseButtonStyled>
      </FlexBoxStyled>
      {isList && (
        <List
          sx={{
            marginTop: '10px',
            marginRight: 'auto',
            minWidth: '300px',
            maxHeight: '200px',
            overflowY: 'scroll'
          }}
        >
          {['hello', 'amising', 'world'].map((item) => (
            <ListItemButton
              key={item}
              component={NavLink}
              to='/nth'
              sx={{ padding: '20px' }}
              divider
            >
              {item}
            </ListItemButton>
          ))}
        </List>
      )}
    </FlexBoxStyled>
  );
};
