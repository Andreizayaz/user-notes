import { ChangeEvent, FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import parse from 'html-react-parser';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { TextField, Typography } from '@material-ui/core';

import { NoteType } from 'src/store/notes';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { TagsCloud, SaveCancelBtns } from 'src/components/common';

type FormPropsTypes = {
  note: NoteType;
  saveText: string;
  cancelText: string;
  titleLabel: string;
  textLabel: string;
  tagsCloudLabel: string;
  saveData: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  deleteTag: (tagName: string) => void;
};

const schema = yup.object().shape({
  title: yup.string().required('Title is a required field'),
  text: yup.string().required('Note Text is a required field')
});

export const Form: FC<FormPropsTypes> = ({
  note,
  saveText,
  cancelText,
  titleLabel,
  textLabel,
  tagsCloudLabel,
  saveData,
  handleChange,
  handleCancel,
  deleteTag
}): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: { title: note.title, text: note.text },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

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
        label={titleLabel}
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
        label={textLabel}
        variant='outlined'
        fullWidth
        multiline
        minRows={10}
        name='text'
        value={parse(note.text)}
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
            {tagsCloudLabel}
          </Typography>
          <TagsCloud tags={note.tagsList} deleteTag={deleteTag} />
        </FlexBoxStyled>
      )}
      <SaveCancelBtns
        saveBtnText={saveText}
        cancelBtnText={cancelText}
        handleCancel={handleCancel}
      />
    </FlexBoxStyled>
  );
};
