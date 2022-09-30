import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectUserNotes } from 'src/store/notes';

import { MainContainer, PageTitle } from 'src/components/common';

export const HomePage: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'home_page' });
  const userNotes = useSelector(selectUserNotes);

  return (
    <MainContainer title='User Notes' isToolBar={!!userNotes.length}>
      <PageTitle
        isUserNotes={!!userNotes.length}
        title={t('title_home_page')}
        yesNotes={t('yes_notes')}
        noNotes={t('no_notes')}
      />
    </MainContainer>
  );
};
