import { FC, ReactElement, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteUserNote, NoteType } from 'src/store/notes';

import {
  ALL_NOTES_LINK,
  EDIT_PAGE_LINK,
  HOME_LINK,
  NOTE_LINK
} from 'src/constants';

import { EditDelBtns } from './EditDelBtns';

type EditDelBtnsPropsTypes = {
  isEditBtn?: boolean;
  note: NoteType;
};

const EditDelBtnsContainer: FC<EditDelBtnsPropsTypes> = ({
  isEditBtn = true,
  note
}): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = () => {
    const { pathname } = location;
    if (pathname.includes(ALL_NOTES_LINK)) {
      return;
    }
    navigate(HOME_LINK);
  };

  const editNote = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`${NOTE_LINK}/${note.id}${EDIT_PAGE_LINK}`, { state: note });
  };

  const deleteNote = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteUserNote(note.id));
    navigateTo();
  };
  return (
    <EditDelBtns
      isEditBtn={isEditBtn}
      editNote={editNote}
      deleteNote={deleteNote}
    />
  );
};

export default EditDelBtnsContainer;
EditDelBtnsContainer.displayName = 'EditDelBtnsContainer';
