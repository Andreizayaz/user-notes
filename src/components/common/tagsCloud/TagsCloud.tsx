import { FC, ReactElement } from 'react';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { Tag } from './Tag';

type TagsCloudPropsTypes = {
  tags: string[];
  selectedTags?: string[];
  maxWidth?: string;
  width?: string;
  deleteTag: (tag: string) => void;
  filterByTag?: (tag: string) => void;
};

export const TagsCloud: FC<TagsCloudPropsTypes> = ({
  tags,
  selectedTags = [],
  maxWidth = '100%',
  width = 'fit-content',
  deleteTag,
  filterByTag
}): ReactElement => (
  <FlexBoxStyled
    minWidth='100px'
    width={width}
    justifyContent='center'
    sx={{ maxWidth: maxWidth, columnGap: '3px', rowGap: '3px' }}
  >
    {tags.map((item) => (
      <Tag
        key={item}
        tagText={item}
        bgColor={
          selectedTags.includes(item)
            ? 'rgba(25,118,210, .3)'
            : 'rgba(25,118,210, .5)'
        }
        deleteTag={() => deleteTag(item)}
        filterByTag={filterByTag}
      />
    ))}
  </FlexBoxStyled>
);
