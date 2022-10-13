import { FC, ReactElement } from 'react';

import { Button, Typography } from '@material-ui/core';

import { TagsCloud } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { MAX_COUNT_TAGS_IN_TOOLBAR } from 'src/constants';

import { useBtnToolBarStyles } from 'src/global/styles';
import { useFlexStyles } from './styles';

type TagsFilterPropsTypes = {
  tagsList: string[];
  filterHeading: string;
  showAllTags: string;
  hideAddTags: string;
  resetFilter: string;
  isFullTagsList: boolean;
  selectedTags: string[];
  handleDeleteTag: (tagText: string) => void;
  handleFilterByTag: (tagText: string) => void;
  handleToggle: () => void;
  handleResetFilter: () => void;
};

export const TagsFilter: FC<TagsFilterPropsTypes> = ({
  tagsList,
  filterHeading,
  showAllTags,
  hideAddTags,
  resetFilter,
  isFullTagsList,
  selectedTags,
  handleDeleteTag,
  handleFilterByTag,
  handleToggle,
  handleResetFilter
}): ReactElement => {
  const { root } = useBtnToolBarStyles();
  const { flexStyle } = useFlexStyles();

  return (
    <FlexBoxStyled
      width='33%'
      flexDirection='column'
      color='rgba(210,134,147, .9)'
      className={flexStyle}
    >
      {!!tagsList.length && (
        <Typography style={{ fontSize: '18px' }}>{filterHeading}</Typography>
      )}
      <TagsCloud
        deleteTag={handleDeleteTag}
        tags={
          isFullTagsList
            ? tagsList.sort()
            : tagsList.sort().slice(0, MAX_COUNT_TAGS_IN_TOOLBAR)
        }
        selectedTags={selectedTags}
        filterByTag={handleFilterByTag}
      />
      {tagsList.length > MAX_COUNT_TAGS_IN_TOOLBAR && (
        <Button
          variant='outlined'
          className={root}
          onClick={handleToggle}
          style={{ borderColor: 'rgba(210,134,147, .9)' }}
        >
          {!isFullTagsList ? showAllTags : hideAddTags}
        </Button>
      )}
      {!!tagsList.length && (
        <Button className={root} onClick={handleResetFilter}>
          {resetFilter}
        </Button>
      )}
    </FlexBoxStyled>
  );
};
