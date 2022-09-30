import { FC, ReactElement, ReactNode } from 'react';

import { Container as CommonContainer } from '@material-ui/core';

import { useStyles } from './styles';

type ContainerPropsTypes = {
  children: NonNullable<ReactNode>;
};

export const Container: FC<ContainerPropsTypes> = ({
  children
}): ReactElement => {
  const { root } = useStyles();

  return <CommonContainer className={root}>{children}</CommonContainer>;
};
