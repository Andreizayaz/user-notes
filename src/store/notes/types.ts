export type UserNotesType = {
  userNotes: NoteType[];
  sortType: string;
};

export type NoteType = {
  id: number;
  dateCreation: Date;
  title: string;
  text: string;
  tagsList: string[];
};

export type UserNoteAction = {
  payload: NoteType;
};

export type UserDeleteNoteAction = {
  payload: number;
};

export type UserNotesSortTypeAction = {
  payload: string;
};

export type UserNotesSortAction = {
  payload: NoteType[];
};
