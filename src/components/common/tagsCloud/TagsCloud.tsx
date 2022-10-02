import { FC, ReactElement } from 'react';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { Tag } from './Tag';

type TagsCloudPropsTypes = {
  tags: string[];
  maxWidth?: string;
  width?: string;
  deleteTag: (tag: string) => void;
};

export const TagsCloud: FC<TagsCloudPropsTypes> = ({
  tags,
  maxWidth = '100%',
  width = 'fit-content',
  deleteTag
}): ReactElement => (
  <FlexBoxStyled
    minWidth='100px'
    width={width}
    justifyContent='center'
    sx={{ maxWidth: maxWidth, columnGap: '3px', rowGap: '3px' }}
  >
    {tags.map((item) => (
      <Tag key={item} tagText={item} deleteTag={() => deleteTag(item)} />
    ))}
  </FlexBoxStyled>
);
