import { FC, ReactElement } from 'react';

import { Typography } from '@material-ui/core';

import { TagsCloud } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

type CreatedTagsPropsTypes = {
  tagsCloudLabel: string;
  tagsList: string[];
  deleteTag: (tag: string) => void;
};

export const CreatedTags: FC<CreatedTagsPropsTypes> = ({
  tagsCloudLabel,
  tagsList,
  deleteTag
}): ReactElement => (
  <FlexBoxStyled flexDirection='column' rowGap='20px'>
    <Typography
      component='h5'
      variant='h5'
      style={{ color: 'rgba(0,0,0, .7)' }}
    >
      {tagsCloudLabel}
    </Typography>
    <TagsCloud tags={tagsList} deleteTag={deleteTag} />
  </FlexBoxStyled>
);
