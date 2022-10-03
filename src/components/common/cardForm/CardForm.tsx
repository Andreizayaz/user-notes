import { FC, ReactElement } from 'react';

import { Button, Typography, Card } from '@material-ui/core';
import { Clear } from '@mui/icons-material';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { NoteType } from 'src/store/notes';

import { useBtnStyles } from 'src/global';

import { Form } from './form';

type CardFormPropsTypes = {
  isEdit?: boolean;
  note?: NoteType;
};

export const CardForm: FC<CardFormPropsTypes> = ({
  isEdit = false,
  note
}): ReactElement => {
  const { root, del } = useBtnStyles();
  const dateCreation = note
    ? new Date(note?.dateCreation).toLocaleDateString()
    : '';

  return (
    <Card style={{ padding: '20px', width: '50%' }}>
      <FlexBoxStyled flexDirection='column' rowGap='20px'>
        {isEdit && (
          <FlexBoxStyled width='100%'>
            <Typography>{dateCreation}</Typography>
            <Button className={root}>
              <Clear className={del} />
            </Button>
          </FlexBoxStyled>
        )}
        <Form />
      </FlexBoxStyled>
    </Card>
  );
};
