import { FC, ReactElement } from 'react';

import { FlexBoxStyled, BaseBoxStyled } from 'src/components/styledComponents';
import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { TagsCloud } from './tagsCloud';

export const ToolBar: FC = (): ReactElement => {
  const tags = ['hello', 'amusing', 'world'];

  return (
    <BaseBoxStyled margin='20px 0 0'>
      <FlexBoxStyled alignItems='flex-start'>
        <SortByCategory />
        <TagsCloud tags={tags} />
        <Search />
      </FlexBoxStyled>
    </BaseBoxStyled>
  );
};
