export type UserNotesType = {
  userNotes: NoteType[];
  filteredNotes: NoteType[];
  selectedTags: string[];
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

export type UserNotesModifyAction = {
  payload: NoteType[];
};

export type FilterByTagAction = {
  payload: string[];
};
