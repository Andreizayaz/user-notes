import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, AppRouter, Footer } from 'src/components';

const App: FC = (): ReactElement => (
  <BrowserRouter>
    <Header />
    <AppRouter />
    <Footer />
  </BrowserRouter>
);

export default App;
