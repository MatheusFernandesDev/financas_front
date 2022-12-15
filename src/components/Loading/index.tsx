import React from "react";

import logo from "../../assets/MYFinance2.png";

import { Container, Loader, Logo } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container className="loaded">
      <Logo src={logo} />
      <Loader />
    </Container>
  );
};

export default Loading;
