import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, CreateNotePage, AllNotesPage } from 'src/components/pages';

import { HOME_LINK, CREATE_NOTE_LINK, ALL_NOTES_LINK } from 'src/constants';

export const AppRouter: FC = (): ReactElement => (
  <Routes>
    <Route path={HOME_LINK} element={<HomePage />} />
    <Route path={CREATE_NOTE_LINK} element={<CreateNotePage />} />
    <Route path={ALL_NOTES_LINK} element={<AllNotesPage />} />
  </Routes>
);
