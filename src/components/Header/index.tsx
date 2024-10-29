import React from "react";
import Logo from "src/assets/images/logo.svg";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="AllowMe News" />
    </Container>
  );
}
