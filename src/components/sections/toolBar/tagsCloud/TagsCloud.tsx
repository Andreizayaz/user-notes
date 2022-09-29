import { FC, ReactElement } from 'react';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { Tag } from './Tag';

type TagsCloudPropsTypes = {
  tags: string[];
};

export const TagsCloud: FC<TagsCloudPropsTypes> = ({ tags }): ReactElement => (
  <FlexBoxStyled
    minWidth='100px'
    width='fit-content'
    sx={{ maxWidth: '33%', columnGap: '3px' }}
  >
    {tags.map((item) => (
      <Tag key={item} tagText={item} />
    ))}
  </FlexBoxStyled>
);
