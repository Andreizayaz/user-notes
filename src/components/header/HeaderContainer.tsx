import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from './Header';

import { links } from './data';

const HeaderContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'links' });

  return (
    <Header
      links={links.map(({ href, translation_key_link }) => {
        return { href, linkName: t(translation_key_link) };
      })}
    />
  );
};

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderContainer';
