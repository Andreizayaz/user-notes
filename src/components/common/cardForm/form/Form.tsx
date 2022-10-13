import { ChangeEvent, FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { NoteType } from 'src/store/notes';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { SaveCancelBtns } from 'src/components/common';

import { CustomTextField } from './customTextField';
import { CreatedTags } from './createdTags';

import { TEXT_FIELD_NAME, TITLE_FIELD_NAME } from 'src/constants';

type FormPropsTypes = {
  titleFieldError: string;
  textFieldError: string;
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

type FormValues = {
  title?: string;
  text?: string;
};

export const Form: FC<FormPropsTypes> = ({
  titleFieldError,
  textFieldError,
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
  const schema = yup.object().shape({
    title: yup.string().required(titleFieldError),
    text: yup.string().required(textFieldError)
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
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
      <CustomTextField
        register={register}
        id={TITLE_FIELD_NAME}
        label={titleLabel}
        name={TITLE_FIELD_NAME}
        value={note.title}
        isError={!!errors.title}
        helperText={errors?.title?.message}
        handleChange={handleChange}
      />
      <CustomTextField
        register={register}
        id={TEXT_FIELD_NAME}
        label={textLabel}
        name={TEXT_FIELD_NAME}
        isMultiline={true}
        value={note.text}
        isError={!!errors.text}
        helperText={errors?.text?.message}
        handleChange={handleChange}
      />
      {!!note.tagsList.length && (
        <CreatedTags
          tagsCloudLabel={tagsCloudLabel}
          tagsList={note.tagsList}
          deleteTag={deleteTag}
        />
      )}
      <SaveCancelBtns
        saveBtnText={saveText}
        cancelBtnText={cancelText}
        handleCancel={handleCancel}
      />
    </FlexBoxStyled>
  );
};
