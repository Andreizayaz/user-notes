import { FC, ReactElement } from 'react';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import { NoteType } from 'src/store/notes';

import { TagsCloud } from 'src/components/common';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { DateAndActBtns } from './DateAndActBtns';

//import { useStyles } from './styles';

type NoteCardPropsTypes = {
  note: NoteType;
  width?: string;
  isText?: string;
};

export const NoteCard: FC<NoteCardPropsTypes> = ({
  note,
  width = 'auto',
  isText = false
}): ReactElement => {
  const handleDelete = () => console.log('del');
  const handleDeleteTag = () => console.log('del tag');
  const handleEdit = () => console.log('edit');

  return (
    <Card style={{ width: width, padding: '10px', height: '100%' }}>
      <FlexBoxStyled flexDirection='column' height='100%' width='100%'>
        <DateAndActBtns
          dateCreation={new Date(note.dateCreation).toLocaleDateString()}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <CardHeader
          title={note.title}
          component='h3'
          style={{ fontWeight: '700' }}
        />
        <CardContent>
          {isText && (
            <Typography component='p' variant='h4'>
              {note.text}
            </Typography>
          )}
          <TagsCloud tags={note.tagsList} deleteTag={handleDeleteTag} />
        </CardContent>
      </FlexBoxStyled>
    </Card>
  );
};