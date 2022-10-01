import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectUserNotes } from 'src/store/notes';

import { MainContainer, PageTitle } from 'src/components/common';

export const AllNotesPage: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'all_notes_page' });
  const userNotes = useSelector(selectUserNotes);
  return (
    <MainContainer title={t('all_notes_page_title')} isToolBar={false}>
      <PageTitle
        isUserNotes={!!userNotes.length}
        title={t('all_notes_page_heading')}
        yesNotes={t('yes_notes')}
        noNotes={t('no_notes')}
      />
    </MainContainer>
  );
};
