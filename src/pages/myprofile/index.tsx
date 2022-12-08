import React from "react";

import Header from "../../components/Header";
import { Container, PerfilIcon } from "./styles";


const MyProfile: React.FC = () => {
  return (
    <>
      <Header/>
      <Container>
        <PerfilIcon/>
      </Container>
    </>
  );
};

export default MyProfile;
