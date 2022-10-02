import { FC, ReactElement } from 'react';

import { Clear } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

import { FlexBoxStyled } from 'src/components/styledComponents';
import { Button, makeStyles } from '@material-ui/core';

type EditDelBtnsPropsTypes = {
  handleEdit: () => void;
  handleDelete: () => void;
};

const useStyles = makeStyles(() => ({
  root: {
    width: 'fit-content',
    height: 'fit-content',
    padding: '0',
    minWidth: 'fit-content',
    transition: 'all 1s',

    '&:hover': {
      transform: 'scale(1.2)',
      backgroundColor: 'transparent'
    }
  },
  edit: {
    color: 'rgba(255,206,28,.7)'
  },
  del: {
    color: 'rgba(235,94,63,.7)'
  }
}));

export const EditDelBtns: FC<EditDelBtnsPropsTypes> = ({
  handleEdit,
  handleDelete
}): ReactElement => {
  const { root, edit, del } = useStyles();
  return (
    <FlexBoxStyled width='fit-content' columnGap='20px'>
      <Button className={root} onClick={handleEdit}>
        <EditIcon className={edit} />
      </Button>
      <Button className={root} onClick={handleDelete}>
        <Clear className={del} />
      </Button>
    </FlexBoxStyled>
  );
};
