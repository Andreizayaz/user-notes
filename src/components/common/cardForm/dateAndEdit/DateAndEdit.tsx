import { Typography } from '@material-ui/core';
import { FC, ReactElement } from 'react';
import { FlexBoxStyled } from 'src/components/styledComponents';
import { EditDelBtns } from 'src/components/common';
import { NoteType } from 'src/store/notes';

type DateAndEditPropsTypes = {
  dateCreation: string;
  note: NoteType;
};

export const DateAndEdit: FC<DateAndEditPropsTypes> = ({
  dateCreation,
  note
}): ReactElement => (
  <FlexBoxStyled width='100%'>
    <Typography>{dateCreation}</Typography>
    <EditDelBtns isEditBtn={false} note={note} />
  </FlexBoxStyled>
);
