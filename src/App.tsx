import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, AppRouter, Footer } from 'src/components';
import { HOME_LINK } from './constants';

const App: FC = (): ReactElement => (
  <BrowserRouter basename={HOME_LINK}>
    <Header />
    <AppRouter />
    <Footer />
  </BrowserRouter>
);

export default App;
