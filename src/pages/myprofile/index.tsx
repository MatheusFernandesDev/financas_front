import React from "react";

import { Container } from "../../App.styles";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

import { PerfilIcon } from "./styles";

const MyProfile: React.FC = () => {
  return (
    <Container>
      <SideBar/>
      <PerfilIcon/>
    </Container>
  );
};

export default MyProfile;
