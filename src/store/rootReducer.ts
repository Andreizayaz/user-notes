import { combineReducers } from '@reduxjs/toolkit';

import { userNotesReducer } from 'src/store/notes';

export const rootReducer = combineReducers({
  userNotesState: userNotesReducer
});
