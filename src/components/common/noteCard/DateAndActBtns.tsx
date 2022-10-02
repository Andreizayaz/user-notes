import { FC, ReactElement, MouseEvent } from 'react';

import { Typography } from '@material-ui/core';

import { EditDelBtns } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

type DateAndActBtnsPropsTypes = {
  dateCreation: string;
  handleEdit: (e: MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const DateAndActBtns: FC<DateAndActBtnsPropsTypes> = ({
  dateCreation,
  handleEdit,
  handleDelete
}): ReactElement => (
  <FlexBoxStyled width='100%'>
    <Typography>{dateCreation}</Typography>
    <EditDelBtns handleEdit={handleEdit} handleDelete={handleDelete} />
  </FlexBoxStyled>
);
