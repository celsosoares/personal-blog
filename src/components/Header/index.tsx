import React from "react";
import Logo from "../../assets/images/logo-allowme-news.svg";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="AllowMe News" />
    </Container>
  );
}
