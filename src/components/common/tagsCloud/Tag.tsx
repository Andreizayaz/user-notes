import { FC, ReactElement, MouseEvent } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@material-ui/core';

import { BaseTextStyled, FlexBoxStyled } from 'src/components/styledComponents';

import { useStyles } from './styles';

type TagPropsTypes = {
  tagText: string;
  deleteTag: (tag: string) => void;
};

export const Tag: FC<TagPropsTypes> = ({
  tagText,
  deleteTag
}): ReactElement => {
  const { btn, closeIcon } = useStyles();

  const handleDeleteTag = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    deleteTag(tagText);
  };

  return (
    <FlexBoxStyled
      flexDirection='column'
      padding='10px'
      sx={{
        position: 'relative',
        borderRadius: '5px',
        backgroundColor: 'rgba(25,118,210, .5)',
        '&:hover button': { display: 'block' },
        cursor: 'pointer'
      }}
    >
      <Button className={btn} onClick={(e) => handleDeleteTag(e)}>
        <CloseIcon className={closeIcon} />
      </Button>
      <BaseTextStyled color='white' fontSize='14px'>
        {tagText}
      </BaseTextStyled>
    </FlexBoxStyled>
  );
};
