import { FC, ReactElement } from 'react';

import { Typography } from '@material-ui/core';

import { EditDelBtns } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';
import { NoteType } from 'src/store/notes';

type DateAndActBtnsPropsTypes = {
  dateCreation: string;
  note: NoteType;
};

export const DateAndActBtns: FC<DateAndActBtnsPropsTypes> = ({
  note,
  dateCreation
}): ReactElement => (
  <FlexBoxStyled width='100%'>
    <Typography>{dateCreation}</Typography>
    <EditDelBtns note={note} />
  </FlexBoxStyled>
);
