import { createSlice } from '@reduxjs/toolkit';

import { NoteType, UserDeleteNoteAction, UserNoteAction } from './types';

type initialStateType = {
  userNotes: NoteType[];
};

const initialState: initialStateType = {
  userNotes: []
};

const UserNotesSlice = createSlice({
  name: 'userNotesReducer',
  initialState,
  reducers: {
    addUserNote(state, action: UserNoteAction) {
      state.userNotes = [...state.userNotes, action.payload];
    },
    editUserNote(state, action: UserNoteAction) {
      state.userNotes[action.payload.id] = action.payload;
    },
    deleteUserNote(state, action: UserDeleteNoteAction) {
      state.userNotes = state.userNotes.filter(
        ({ id }) => id !== action.payload
      );
    }
  }
});

// Actions
export const { addUserNote, editUserNote, deleteUserNote } =
  UserNotesSlice.actions;

export const userNotesReducer = UserNotesSlice.reducer;
