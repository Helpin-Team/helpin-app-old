import React from 'react';

import { Container, LogoTag } from './styles';

import Logo from '../../assets/images/logo.png';

const Header = () => (
  <Container>
    <LogoTag source={Logo} />
  </Container>
);

export default Header;
