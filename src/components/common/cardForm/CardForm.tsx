import { ChangeEvent, FC, ReactElement, useState } from 'react';

import { Typography, Card } from '@material-ui/core';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { addUserNote, editUserNote, NoteType } from 'src/store/notes';

import { Form } from './form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTagsList } from './helpers';
import { HOME_LINK } from 'src/constants';
import { EditDelBtns } from 'src/components/common/actionButtons';

type CardFormPropsTypes = {
  isEdit?: boolean;
  currentNote?: NoteType;
};

export const CardForm: FC<CardFormPropsTypes> = ({
  isEdit = false,
  currentNote
}): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'note_form' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formNote: NoteType =
    isEdit && currentNote
      ? JSON.parse(JSON.stringify(currentNote))
      : {
          id: 0,
          dateCreation: new Date(),
          title: '',
          text: '',
          tagsList: [] as string[]
        };

  const [note, setNote] = useState(formNote);

  const dateCreation = note
    ? new Date(note?.dateCreation).toLocaleDateString()
    : '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'text') {
      note.tagsList = getTagsList(value);
    }

    setNote({ ...note, [name]: value });
  };

  const deleteTag = (tagName: string) => {
    const modifiedText = note.text.replace(`#${tagName}`, ` ${tagName} `);
    const modifiedTagsList = getTagsList(modifiedText);

    setNote({ ...note, text: modifiedText, tagsList: modifiedTagsList });
  };

  const saveData = () => {
    if (isEdit) {
      dispatch(editUserNote(note));
    } else {
      note.id = new Date().valueOf();
      note.dateCreation = new Date();
      dispatch(addUserNote(note));
    }
    navigate(HOME_LINK);
  };

  const handleCancel = () => {
    setNote({ ...note, title: '', text: '' });
    navigate(HOME_LINK);
  };

  return (
    <Card style={{ padding: '20px', width: '50%' }}>
      <FlexBoxStyled flexDirection='column' rowGap='20px'>
        {isEdit && (
          <FlexBoxStyled width='100%'>
            <Typography>{dateCreation}</Typography>
            <EditDelBtns isEditBtn={false} note={note} />
          </FlexBoxStyled>
        )}
        <Form
          cancelText={t('cancel')}
          deleteTag={deleteTag}
          handleCancel={handleCancel}
          handleChange={handleChange}
          note={note}
          saveData={saveData}
          saveText={t('save')}
          tagsCloudLabel={t('tags_cloud')}
          textLabel={t('note_text')}
          titleLabel={t('title')}
        />
      </FlexBoxStyled>
    </Card>
  );
};
