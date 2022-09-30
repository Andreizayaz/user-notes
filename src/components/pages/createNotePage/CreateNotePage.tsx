import { FC, ReactElement } from 'react';

import { MainContainer } from 'src/components/common';

export const CreateNotePage: FC = (): ReactElement => {
  return (
    <MainContainer title='Create Note' isToolBar={false}>
      create note
    </MainContainer>
  );
};
