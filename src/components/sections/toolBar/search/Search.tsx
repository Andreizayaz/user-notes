import { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TextField, List, ListItemButton, Box } from '@mui/material';
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
        >
          {t('search')}
        </BaseButtonStyled>
      </FlexBoxStyled>
      {isList && (
        <Box sx={{ position: 'relative', width: '100%' }}>
          <List
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              marginTop: '10px',
              minWidth: '300px',
              maxHeight: '200px',
              overflowY: 'auto'
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
        </Box>
      )}
    </FlexBoxStyled>
  );
};
