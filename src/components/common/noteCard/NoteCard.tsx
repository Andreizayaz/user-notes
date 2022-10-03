import { FC, ReactElement } from 'react';

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import { NoteType } from 'src/store/notes';

import { TagsCloud } from 'src/components/common';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { DateAndActBtns } from './DateAndActBtns';

type NoteCardPropsTypes = {
  note: NoteType;
  width?: string;
  isText?: boolean;
};

export const NoteCard: FC<NoteCardPropsTypes> = ({
  note,
  width = 'auto',
  isText = false
}): ReactElement => {
  const handleDeleteTag = () => console.log('del tag');

  return (
    <Card style={{ width: width, padding: '10px', height: '100%' }}>
      <FlexBoxStyled flexDirection='column' height='100%' width='100%'>
        <DateAndActBtns
          note={note}
          dateCreation={new Date(note.dateCreation).toLocaleDateString()}
        />
        <CardHeader
          title={note.title}
          component='h3'
          style={{ fontWeight: '700' }}
        />
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          {isText && (
            <Typography
              component='p'
              variant='h5'
              style={{ textAlign: 'center' }}
            >
              {note.text}
            </Typography>
          )}
          <TagsCloud
            width='100%'
            tags={note.tagsList}
            deleteTag={handleDeleteTag}
          />
        </CardContent>
      </FlexBoxStyled>
    </Card>
  );
};
