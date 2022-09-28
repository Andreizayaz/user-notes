import { FC, ReactElement, ReactNode } from 'react';

import { Container as CommonContainer, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    padding: '20px 10px',
    width: '80%',
    maxWidth: '1400px'
  }
}));

type ContainerPropsTypes = {
  children: NonNullable<ReactNode>;
};

export const Container: FC<ContainerPropsTypes> = ({
  children
}): ReactElement => {
  const { root } = useStyles();

  return <CommonContainer className={root}>{children}</CommonContainer>;
};
