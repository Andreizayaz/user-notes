import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectUserNotes } from 'src/store/notes';

import { TagsCloud } from 'src/components/common/tagsCloud';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { DeleteAllNotes } from './deleteAllNotes';

export const ToolBar: FC = (): ReactElement => {
  const { userNotes, sortType } = useSelector(selectUserNotes);

  const handleDeleteTag = () => console.log('del tag');

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
