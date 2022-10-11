import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  deleteTagInUserNotes,
  filterByTag,
  resetFilterByTag,
  selectUserNotes,
  toggleFullTagsList
} from 'src/store/notes';

import { FlexBoxStyled } from 'src/components/styledComponents';

import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { DeleteAllNotes } from './deleteAllNotes';

import { useFlexStyles } from './styles';
import { MAX_COUNT_TAGS_IN_TOOLBAR } from 'src/constants';
import { TagsFilter } from './tagsFilter';

export const ToolBar: FC = (): ReactElement => {
  const { flexStyles } = useFlexStyles();

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
    <FlexBoxStyled
      alignItems='flex-start'
      width='100%'
      rowGap='20px'
      className={flexStyles}
    >
      <SortByCategory sortType={sortType} />
      <TagsFilter
        filterHeading={t('filter_heading')}
        showAllTags={t('show_all_tags')}
        hideAddTags={t('hide_add_tags')}
        resetFilter={t('reset_filter')}
        isFullTagsList={isFullTagsList}
        tagsList={tagsList}
        selectedTags={selectedTags}
        handleDeleteTag={handleDeleteTag}
        handleFilterByTag={handleFilterByTag}
        handleResetFilter={handleResetFilter}
        handleToggle={handleToggle}
      />
      <Search />
      <DeleteAllNotes />
    </FlexBoxStyled>
  );
};
