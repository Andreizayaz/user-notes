import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from '@material-ui/core';

import {
  deleteTagInUserNotes,
  filterByTag,
  resetFilterByTag,
  selectUserNotes
} from 'src/store/notes';

import { TagsCloud } from 'src/components/common/tagsCloud';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { SortByCategory } from './sortByCategory';
import { Search } from './search';
import { DeleteAllNotes } from './deleteAllNotes';

import { useBtnStyles } from './styles';

export const ToolBar: FC = (): ReactElement => {
  const { root } = useBtnStyles();
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });
  const { userNotes, selectedTags, sortType } = useSelector(selectUserNotes);
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

  const tagsList = Array.from(
    new Set(userNotes.flatMap(({ tagsList }) => tagsList))
  );

  return (
    <FlexBoxStyled alignItems='flex-start' width='100%' rowGap='20px'>
      <SortByCategory userNotes={userNotes} sortType={sortType} />
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
          tags={tagsList}
          selectedTags={selectedTags}
          filterByTag={handleFilterByTag}
        />
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
