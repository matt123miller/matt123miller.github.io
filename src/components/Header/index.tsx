import React from 'react';

import Container from 'components/Container';
import MainNav from './MainNav';
import Logo from './Logo';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className="-mb-px">
    <Container centered>
      <Logo />
      <MainNav />
    </Container>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
