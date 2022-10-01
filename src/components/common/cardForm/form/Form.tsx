import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { TextField, Typography } from '@material-ui/core';
import { Button } from '@mui/material';

import { addUserNote } from 'src/store/notes';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { TagsCloud } from 'src/components/common';

import { getTagsList } from './helpers';
import { useNavigate } from 'react-router-dom';
import { HOME_LINK } from 'src/constants';

//type FormPropsTypes = {};

const schema = yup.object().shape({
  title: yup.string().required('Title is a required field'),
  text: yup.string().required('Note Text is a required field')
});

export const Form: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'note_form' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [note, setNote] = useState({
    id: 0,
    dateCreation: new Date(),
    title: '',
    text: '',
    tagsList: [] as string[]
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { title: note.title, text: note.text },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

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
    note.id = new Date().valueOf();
    note.dateCreation = new Date();
    dispatch(addUserNote(note));
    navigate(HOME_LINK);
  };

  const handleCancel = () => {
    setNote({ ...note, title: '', text: '' });
    navigate(HOME_LINK);
  };

  return (
    <FlexBoxStyled
      onSubmit={handleSubmit(saveData)}
      component='form'
      flexDirection='column'
      rowGap='20px'
      width='100%'
    >
      <TextField
        {...register('title')}
        id='title'
        label={t('title')}
        variant='outlined'
        fullWidth
        name='title'
        value={note.title}
        onChange={handleChange}
        error={!!errors.title}
        helperText={errors?.title?.message}
      />
      <TextField
        {...register('text')}
        id='text'
        label={t('note_text')}
        variant='outlined'
        fullWidth
        multiline
        minRows={10}
        name='text'
        value={note.text}
        onChange={handleChange}
        error={!!errors.text}
        helperText={errors?.text?.message}
      />
      {!!note.tagsList.length && (
        <FlexBoxStyled flexDirection='column' rowGap='20px'>
          <Typography
            component='h5'
            variant='h5'
            style={{ color: 'rgba(0,0,0, .7)' }}
          >
            {t('tags_cloud')}
          </Typography>
          <TagsCloud tags={note.tagsList} deleteTag={deleteTag} />
        </FlexBoxStyled>
      )}
      <FlexBoxStyled columnGap='20px'>
        <Button color='primary' variant='contained' type='submit'>
          {t('save')}
        </Button>
        <Button color='error' variant='contained' onClick={handleCancel}>
          {t('cancel')}
        </Button>
      </FlexBoxStyled>
    </FlexBoxStyled>
  );
};
