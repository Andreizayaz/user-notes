import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectUserNotes } from 'src/store/notes';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { TagsCloud } from 'src/components/common/tagsCloud';

export const ToolBar: FC = (): ReactElement => {
  const userNotes = useSelector(selectUserNotes);

  const handleDeleteTag = () => console.log('del tag');

  const tagsList = Array.from(
    new Set(userNotes.flatMap(({ tagsList }) => tagsList))
  );

  return (
    <FlexBoxStyled alignItems='flex-start' width='100%'>
      <SortByCategory />
      <TagsCloud deleteTag={handleDeleteTag} tags={tagsList} maxWidth='33%' />
      <Search />
    </FlexBoxStyled>
  );
};
