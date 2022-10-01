import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectUserNotes } from 'src/store/notes';

import { FlexBoxStyled, BaseBoxStyled } from 'src/components/styledComponents';
import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { TagsCloud } from 'src/components/common/tagsCloud';

export const ToolBar: FC = (): ReactElement => {
  const userNotes = useSelector(selectUserNotes);

  const tagsList = Array.from(
    new Set(userNotes.flatMap(({ tagsList }) => tagsList))
  );
  console.log(tagsList);

  return (
    <BaseBoxStyled margin='20px 0 0'>
      <FlexBoxStyled alignItems='flex-start'>
        <SortByCategory />
        <TagsCloud tags={tagsList} maxWidth='33%' />
        <Search />
      </FlexBoxStyled>
    </BaseBoxStyled>
  );
};
