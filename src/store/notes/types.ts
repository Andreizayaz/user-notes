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
