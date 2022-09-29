import { RootStateType } from '../index';
import { NoteType } from './types';

export const selectUserNotes = (state: RootStateType): NoteType[] =>
  state.userNotesState.userNotes;
