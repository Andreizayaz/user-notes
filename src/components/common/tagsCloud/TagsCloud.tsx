import { FC, ReactElement } from 'react';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { Tag } from './Tag';

type TagsCloudPropsTypes = {
  tags: string[];
  maxWidth?: string;
  deleteTag: (tag: string) => void;
};

export const TagsCloud: FC<TagsCloudPropsTypes> = ({
  tags,
  maxWidth = '100%',
  deleteTag
}): ReactElement => (
  <FlexBoxStyled
    minWidth='100px'
    width='fit-content'
    justifyContent='flex-start'
    sx={{ maxWidth: maxWidth, columnGap: '3px', rowGap: '3px' }}
  >
    {tags.map((item) => (
      <Tag key={item} tagText={item} deleteTag={() => deleteTag(item)} />
    ))}
  </FlexBoxStyled>
);
