import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from '@material-ui/core';

import {
  deleteTagInUserNotes,
  filterByTag,
  resetFilterByTag,
  selectUserNotes,
  toggleFullTagsList
} from 'src/store/notes';

import { TagsCloud } from 'src/components/common/tagsCloud';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { DeleteAllNotes } from './deleteAllNotes';

import { useBtnStyles } from './styles';
import { MAX_COUNT_TAGS_IN_TOOLBAR } from 'src/constants';

export const ToolBar: FC = (): ReactElement => {
  const { root } = useBtnStyles();

  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });

  const { userNotes, selectedTags, sortType, isFullTagsList } =
    useSelector(selectUserNotes);

  const dispatch = useDispatch();

  const handleDeleteTag = (tagText: string) => {
    const modUserNotes = userNotes.map((note) => {
      if (note.tagsList.includes(tagText)) {
        return {
          ...note,
          tagsList: note.tagsList.filter((item) => item !== tagText),
          text: note.text.replace(`#${tagText}`, ` ${tagText} `)
        };
      }
      return note;
    });
    dispatch(deleteTagInUserNotes(modUserNotes));
  };

  const handleFilterByTag = (tagText: string) => {
    const currSelectedTags = selectedTags.includes(tagText)
      ? selectedTags.filter((item) => item !== tagText)
      : [...selectedTags, tagText];
    dispatch(filterByTag(currSelectedTags));
  };

  const handleResetFilter = () => dispatch(resetFilterByTag());

  const handleToggle = () => dispatch(toggleFullTagsList(!isFullTagsList));

  const tagsList = Array.from(
    new Set(userNotes.flatMap(({ tagsList }) => tagsList))
  );

  useEffect(() => {
    if (tagsList.length > MAX_COUNT_TAGS_IN_TOOLBAR && !isFullTagsList) {
      dispatch(toggleFullTagsList(false));
    }
  }, [userNotes]);

  return (
    <FlexBoxStyled alignItems='flex-start' width='100%' rowGap='20px'>
      <SortByCategory sortType={sortType} />
      <FlexBoxStyled
        width='33%'
        flexDirection='column'
        color='rgba(210,134,147, .9)'
      >
        {!!tagsList.length && (
          <Typography style={{ fontSize: '18px' }}>
            {t('filter_heading')}
          </Typography>
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
            {!isFullTagsList ? t('show_all_tags') : t('hide_add_tags')}
          </Button>
        )}
        {!!tagsList.length && (
          <Button className={root} onClick={handleResetFilter}>
            {t('reset_filter')}
          </Button>
        )}
      </FlexBoxStyled>
      <Search />
      <DeleteAllNotes />
    </FlexBoxStyled>
  );
};
