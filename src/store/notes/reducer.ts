import { createSlice } from '@reduxjs/toolkit';

import { getSortedUserNotesByCategory } from 'src/global/helpers';

import {
  UserNotesType,
  UserDeleteNoteAction,
  UserNoteAction,
  UserNotesModifyAction,
  UserNotesSortTypeAction,
  FilterByTagAction
} from './types';

type initialStateType = {
  userNotesData: UserNotesType;
};

const initialState: initialStateType = {
  userNotesData: {
    userNotes: [],
    filteredNotes: [],
    selectedTags: [],
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
        filteredNotes: [],
        selectedTags: [],
        sortType: ''
      };
    },
    sortUserNotes(state, action: UserNotesSortTypeAction) {
      state.userNotesData.sortType = action.payload;
      state.userNotesData.userNotes = getSortedUserNotesByCategory(
        state.userNotesData.userNotes,
        action.payload
      );
      state.userNotesData.filteredNotes = getSortedUserNotesByCategory(
        state.userNotesData.filteredNotes,
        action.payload
      );
    },
    deleteTagInUserNotes(state, action: UserNotesModifyAction) {
      state.userNotesData.userNotes = action.payload;
    },
    filterByTag(state, action: FilterByTagAction) {
      state.userNotesData.selectedTags = action.payload;
      state.userNotesData.filteredNotes = state.userNotesData.userNotes.filter(
        ({ tagsList }) => action.payload.some((item) => tagsList.includes(item))
      );
    },
    resetFilterByTag(state) {
      state.userNotesData.filteredNotes = [];
      state.userNotesData.selectedTags = [];
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
  deleteTagInUserNotes,
  filterByTag,
  resetFilterByTag
} = UserNotesSlice.actions;

export const userNotesReducer = UserNotesSlice.reducer;
