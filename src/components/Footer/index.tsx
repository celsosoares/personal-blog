import React from 'react';
import Logo from 'src/assets/images/logo.svg';


import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <img src={Logo} alt="AllowMe News" />
      <span>Copyright © 2023 AllowMe News. Todos os direitos reservados</span>
    </Container>
  );
}
