import { createSlice } from '@reduxjs/toolkit';

import { getSortedUserNotesByCategory } from 'src/global/helpers';

import {
  UserNotesType,
  UserDeleteNoteAction,
  UserNoteAction,
  UserNotesSortAction,
  UserNotesSortTypeAction
} from './types';

type initialStateType = {
  userNotesData: UserNotesType;
};

const initialState: initialStateType = {
  userNotesData: {
    userNotes: [],
    sortType: ''
  }
};

const UserNotesSlice = createSlice({
  name: 'userNotesReducer',
  initialState,
  reducers: {
    addUserNote(state, action: UserNoteAction) {
      state.userNotesData.userNotes = [
        ...state.userNotesData.userNotes,
        action.payload
      ];
      state.userNotesData.userNotes = getSortedUserNotesByCategory(
        state.userNotesData.userNotes,
        state.userNotesData.sortType
      );
    },
    editUserNote(state, action: UserNoteAction) {
      state.userNotesData.userNotes = state.userNotesData.userNotes.map(
        (userNote) =>
          userNote.id === action.payload.id ? action.payload : userNote
      );
    },
    deleteUserNote(state, action: UserDeleteNoteAction) {
      state.userNotesData.userNotes = state.userNotesData.userNotes.filter(
        ({ id }) => id !== action.payload
      );
    },
    deleteAllUserNote(state) {
      state.userNotesData = {
        userNotes: [],
        sortType: ''
      };
    },
    setUserNotesSortType(state, action: UserNotesSortTypeAction) {
      state.userNotesData.sortType = action.payload;
    },
    sortUserNotes(state, action: UserNotesSortAction) {
      state.userNotesData.userNotes = action.payload;
    }
  }
});

// Actions
export const {
  addUserNote,
  editUserNote,
  deleteUserNote,
  deleteAllUserNote,
  sortUserNotes,
  setUserNotesSortType
} = UserNotesSlice.actions;

export const userNotesReducer = UserNotesSlice.reducer;
