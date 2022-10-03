import { FC, ReactElement, MouseEvent } from 'react';

import { Button } from '@material-ui/core';
import { Clear } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { useBtnStyles } from 'src/global';

type EditDelBtnsPropsTypes = {
  handleEdit: (e: MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const EditDelBtns: FC<EditDelBtnsPropsTypes> = ({
  handleEdit,
  handleDelete
}): ReactElement => {
  const { root, edit, del } = useBtnStyles();
  return (
    <FlexBoxStyled width='fit-content' columnGap='20px'>
      <Button className={root} onClick={handleEdit}>
        <EditIcon className={edit} />
      </Button>
      <Button className={root} onClick={handleDelete}>
        <Clear className={del} />
      </Button>
    </FlexBoxStyled>
  );
};
