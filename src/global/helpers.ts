import {
  SORT_BY_ASC_DATE,
  SORT_BY_DESC_DATE,
  SORT_BY_TITLE
} from 'src/constants';
import { NoteType } from 'src/store/notes';

const sortByTitle = (titleOne: string, titleAnother: string): number => {
  if (titleOne > titleAnother) {
    return 1;
  }

  if (titleOne < titleAnother) {
    return -1;
  }

  return 0;
};

export const getSortedUserNotesByCategory = (
  userNotes: NoteType[],
  sortType: string
): NoteType[] => {
  const { parse, stringify } = JSON;
  const sortedUserNotes = parse(stringify(userNotes)) as NoteType[];

  switch (sortType) {
    case SORT_BY_ASC_DATE:
      return sortedUserNotes.sort(
        (a, b) =>
          new Date(a.dateCreation).getTime() -
          new Date(b.dateCreation).getTime()
      );
    case SORT_BY_DESC_DATE:
      return sortedUserNotes.sort(
        (a, b) =>
          new Date(b.dateCreation).getTime() -
          new Date(a.dateCreation).getTime()
      );
    case SORT_BY_TITLE:
      return sortedUserNotes.sort((a, b) => sortByTitle(a.title, b.title));

    default:
      return sortedUserNotes;
  }
};
