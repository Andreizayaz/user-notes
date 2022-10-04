import { RootStateType } from '../index';
import { UserNotesType } from './types';

export const selectUserNotes = (state: RootStateType): UserNotesType =>
  state.userNotesState.userNotesData;
