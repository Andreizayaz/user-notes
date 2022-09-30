import { FC, ReactElement } from 'react';

import { BaseTextStyled, FlexBoxStyled } from 'src/components/styledComponents';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@material-ui/core';

import { useStyles } from './styles';

type TagPropsTypes = {
  tagText: string;
};

export const Tag: FC<TagPropsTypes> = ({ tagText }): ReactElement => {
  const { btn, closeIcon } = useStyles();
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
      <Button className={btn}>
        <CloseIcon className={closeIcon} />
      </Button>
      <BaseTextStyled color='white' fontSize='14px'>
        {tagText}
      </BaseTextStyled>
    </FlexBoxStyled>
  );
};
