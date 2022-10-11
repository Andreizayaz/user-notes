import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Typography, Card } from '@material-ui/core';

import { addUserNote, editUserNote, NoteType } from 'src/store/notes';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { EditDelBtns } from 'src/components/common/actionButtons';

import { HOME_LINK } from 'src/constants';

import { Form } from './form';

import { getTagsList } from './helpers';

import './CardForm.scss';
import { useCardFormStyles } from './style';

type CardFormPropsTypes = {
  isEdit?: boolean;
  currentNote?: NoteType;
};

export const CardForm: FC<CardFormPropsTypes> = ({
  isEdit = false,
  currentNote
}): ReactElement => {
  const { card } = useCardFormStyles();
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
    <Card className={card}>
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
