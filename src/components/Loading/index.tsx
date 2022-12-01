import React from "react";

import { Container, Loader } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container className="loaded">
      <Loader />
    </Container>
  );
};

export default Loading;
