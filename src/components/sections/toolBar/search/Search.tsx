import {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  useState,
  FocusEvent,
  useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { NoteType, selectUserNotes } from 'src/store/notes';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { SearchField } from './searchField';
import { SearchResult } from './searchResult';

import { SEARCH_RESULT_LIST_LINK } from 'src/constants';

import { useToolBarStyles } from 'src/global/styles';

export const Search: FC = (): ReactElement => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { text, list, link, searchBtn, inputField, flexStyle } =
    useToolBarStyles();
  const { t } = useTranslation('translation', { keyPrefix: 'toolBar' });
  const [isList, setIsList] = useState(false);
  const [searchResult, setSearchResult] = useState<NoteType[]>([]);
  const { userNotes } = useSelector(selectUserNotes);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsList(false);
    searchResult.length &&
      navigate(SEARCH_RESULT_LIST_LINK, { state: searchResult });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const result = value.trim().length
      ? userNotes.filter(
          ({ title, tagsList }) =>
            title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            tagsList.includes(value.toLocaleLowerCase())
        )
      : [];

    setSearchResult(result);
  };

  const handleFocus = () => setIsList(true);

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.currentTarget.contains(e.relatedTarget) && setIsList(false);
  };

  const hideSearchList = () => setIsList(false);

  return (
    <FlexBoxStyled flexDirection='column' width='33%' className={flexStyle}>
      <SearchField
        btnText={t('search')}
        fieldLabel={t('search_note')}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleSubmit={handleSubmit}
        hideSearchList={hideSearchList}
        inputFieldClass={inputField}
        isDisabledBtn={!searchResult.length}
        searchBtnClass={searchBtn}
      />

      {isList && (
        <SearchResult
          isNoFoundText={!searchResult.length}
          isResult={!!searchResult.length}
          linkClass={link}
          linkRef={linkRef}
          noFoundText={t('no_found')}
          noFoundTextClass={text}
          searchResult={searchResult}
          searchResultClass={list}
        />
      )}
    </FlexBoxStyled>
  );
};
