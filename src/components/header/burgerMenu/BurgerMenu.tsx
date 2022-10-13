import { FC, ReactElement, ReactNode } from 'react';

import { Drawer } from '@material-ui/core';

import { useBurgerMenuStyles } from 'src/global/styles';

type BurgerMenuPropsTypes = {
  isOpen: boolean;
  children: ReactNode;
  closeHandler: () => void;
};

export const BurgerMenu: FC<BurgerMenuPropsTypes> = ({
  isOpen,
  children,
  closeHandler
}): ReactElement => {
  const { root } = useBurgerMenuStyles();
  return (
    <Drawer
      style={{ zIndex: 1 }}
      className={root}
      anchor='left'
      open={isOpen}
      onClose={closeHandler}
    >
      {children}
    </Drawer>
  );
};
