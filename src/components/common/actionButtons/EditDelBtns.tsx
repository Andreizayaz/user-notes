import { FC, ReactElement, MouseEvent } from 'react';

import { useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import { Clear } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { useBtnStyles } from 'src/global';
import { deleteUserNote, NoteType } from 'src/store/notes';
import { EDIT_PAGE_LINK, HOME_LINK, NOTE_LINK } from 'src/constants';
import { useLocation, useNavigate } from 'react-router-dom';

type EditDelBtnsPropsTypes = {
  isEditBtn?: boolean;
  note: NoteType;
};

export const EditDelBtns: FC<EditDelBtnsPropsTypes> = ({
  isEditBtn = true,
  note
}): ReactElement => {
  const { root, edit, del } = useBtnStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(navigate);
  console.log(location);

  const editNote = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`${NOTE_LINK}/${note.id}${EDIT_PAGE_LINK}`, { state: note });
  };

  const deleteNote = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteUserNote(note.id));
    navigate(HOME_LINK);
  };
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
