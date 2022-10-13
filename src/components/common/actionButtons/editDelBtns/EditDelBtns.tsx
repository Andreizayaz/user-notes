import { FC, ReactElement, MouseEvent } from 'react';

import { Button } from '@material-ui/core';
import { Clear } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { useBtnStyles } from 'src/global';

type EditDelBtnsPropsTypes = {
  isEditBtn: boolean;
  editNote: (e: MouseEvent<HTMLButtonElement>) => void;
  deleteNote: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const EditDelBtns: FC<EditDelBtnsPropsTypes> = ({
  isEditBtn,
  editNote,
  deleteNote
}): ReactElement => {
  const { root, edit, del } = useBtnStyles();

  return (
    <FlexBoxStyled width='fit-content' columnGap='20px'>
      {isEditBtn && (
        <Button className={root} onClick={editNote}>
          <EditIcon className={edit} />
        </Button>
      )}
      <Button className={root} onClick={deleteNote}>
        <Clear className={del} />
      </Button>
    </FlexBoxStyled>
  );
};
