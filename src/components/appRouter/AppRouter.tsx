import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  CreateNotePage,
  AllNotesPage,
  UserNotePage,
  EditPage
} from 'src/components/pages';

import {
  HOME_LINK,
  CREATE_NOTE_LINK,
  ALL_NOTES_LINK,
  NOTE_LINK,
  EDIT_PAGE_LINK
} from 'src/constants';

export const AppRouter: FC = (): ReactElement => (
  <Routes>
    <Route path={HOME_LINK} element={<HomePage />} />
    <Route path={CREATE_NOTE_LINK} element={<CreateNotePage />} />
    <Route path={ALL_NOTES_LINK} element={<AllNotesPage />} />
    <Route path={`${NOTE_LINK}/:id`} element={<UserNotePage />} />
    <Route path={`${NOTE_LINK}/:id${EDIT_PAGE_LINK}`} element={<EditPage />} />
  </Routes>
);
