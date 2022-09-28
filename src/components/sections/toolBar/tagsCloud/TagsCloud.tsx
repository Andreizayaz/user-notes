import { FC, ReactElement } from 'react';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { Tag } from './Tag';

type TagsCloudPropsTypes = {
  tags: string[];
};

export const TagsCloud: FC<TagsCloudPropsTypes> = ({ tags }): ReactElement => (
  <FlexBoxStyled maxWidth='300px' width='30%'>
    {tags.map((item) => (
      <Tag key={item} tagText={item} />
    ))}
  </FlexBoxStyled>
);
