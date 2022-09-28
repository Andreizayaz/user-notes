import { FC, ReactElement } from 'react';

import { BaseTextStyled, FlexBoxStyled } from 'src/components/styledComponents';
import CloseIcon from '@mui/icons-material/Close';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  btn: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    display: 'none',
    marginLeft: 'auto',
    padding: '0',
    height: 'fit-content',
    minHeight: 'fit-content',
    width: 'fit-content',
    minWidth: 'fit-content',
    lineHeight: 1,
    transition: 'all 1s'
  },
  closeIcon: {
    '&&': {
      height: '15px',
      width: '15px',
      color: 'red',
      transition: 'all 1s',
      '&:hover': {
        transform: 'rotate(180deg)'
      }
    }
  }
}));

type TagPropsTypes = {
  tagText: string;
};

export const Tag: FC<TagPropsTypes> = ({ tagText }): ReactElement => {
  const { btn, closeIcon } = useStyles();
  return (
    <FlexBoxStyled
      flexDirection='column'
      padding='10px 15px'
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(25,118,210, .5)',
        '&:hover button': { display: 'block' },
        cursor: 'pointer'
      }}
    >
      <Button className={btn}>
        <CloseIcon className={closeIcon} />
      </Button>
      <BaseTextStyled color='white'>{tagText}</BaseTextStyled>
    </FlexBoxStyled>
  );
};
