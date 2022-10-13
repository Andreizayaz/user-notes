import { FC, ReactElement, ReactNode } from 'react';

import { Container as CommonContainer } from '@material-ui/core';

import { useContainerStyles } from 'src/global/styles';

type ContainerPropsTypes = {
  children: NonNullable<ReactNode>;
};

export const Container: FC<ContainerPropsTypes> = ({
  children
}): ReactElement => {
  const { root } = useContainerStyles();

  return <CommonContainer className={root}>{children}</CommonContainer>;
};
