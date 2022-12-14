import { FC, ReactElement, MouseEvent } from 'react';

import { Button } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

import { BaseTextStyled, FlexBoxStyled } from 'src/components/styledComponents';

import { useTagStyles } from 'src/global/styles';

type TagPropsTypes = {
  tagText: string;
  bgColor: string;
  deleteTag: (tag: string) => void;
  filterByTag?: (tag: string) => void;
};

export const Tag: FC<TagPropsTypes> = ({
  tagText,
  bgColor = 'rgba(25,118,210, .5)',
  filterByTag,
  deleteTag
}): ReactElement => {
  const { btn, closeIcon, tag } = useTagStyles();

  const handleDeleteTag = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    deleteTag(tagText);
  };

  const handleFilterByTag = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    filterByTag?.(tagText);
  };

  return (
    <FlexBoxStyled
      flexDirection='column'
      padding='10px'
      style={{ backgroundColor: bgColor }}
      className={tag}
    >
      <Button className={btn} onClick={(e) => handleDeleteTag(e)}>
        <CloseIcon className={closeIcon} />
      </Button>
      <BaseTextStyled color='white' fontSize='14px' onClick={handleFilterByTag}>
        {tagText}
      </BaseTextStyled>
    </FlexBoxStyled>
  );
};
