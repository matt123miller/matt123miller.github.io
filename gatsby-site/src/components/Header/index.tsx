import React from 'react';

import Container from 'components/Container';
import MainNav from './MainNav';
import Logo from './Logo';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className="-mb-px">
    <Container centered className="border-b-2 sm:border-b-0">
      <Logo />
      <MainNav />
    </Container>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
