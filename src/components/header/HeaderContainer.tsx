import { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from './Header';

import { links } from './data';

const HeaderContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'links' });

  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => setIsOpen(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Header
      links={links.map(({ href, translation_key_link }) => {
        return { href, linkName: t(translation_key_link) };
      })}
      isOpen={isOpen}
      toggleMenu={toggleMenu}
      closeHandler={closeHandler}
    />
  );
};

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderContainer';
