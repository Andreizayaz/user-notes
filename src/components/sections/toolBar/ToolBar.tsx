import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { deleteTagInUserNotes, selectUserNotes } from 'src/store/notes';

import { TagsCloud } from 'src/components/common/tagsCloud';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { DeleteAllNotes } from './deleteAllNotes';

export const ToolBar: FC = (): ReactElement => {
  const { userNotes, sortType } = useSelector(selectUserNotes);
  const dispatch = useDispatch();

  const handleDeleteTag = (tagText: string) => {
    const modUserNotes = userNotes.map((note) => {
      if (note.tagsList.includes(tagText)) {
        return {
          ...note,
          tagsList: note.tagsList.filter((item) => item !== tagText),
          text: note.text.replace(`#${tagText}`, ` ${tagText} `)
        };
      }
      return note;
    });
    dispatch(deleteTagInUserNotes(modUserNotes));
  };

  const tagsList = Array.from(
    new Set(userNotes.flatMap(({ tagsList }) => tagsList))
  );

  return (
    <FlexBoxStyled alignItems='flex-start' width='100%'>
      <SortByCategory userNotes={userNotes} sortType={sortType} />
      <TagsCloud deleteTag={handleDeleteTag} tags={tagsList} maxWidth='33%' />
      <Search />
      <DeleteAllNotes />
    </FlexBoxStyled>
  );
};
