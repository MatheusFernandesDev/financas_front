import React from "react";

import { Container } from "../../App.styles";
import EmptyInputMask from "../../components/EmptyMaskInput";

import SideBar from "../../components/Sidebar";

import { PerfilIcon } from "./styles";

const MyProfile: React.FC = () => {
  return (
    <Container>
      <SideBar/>
      <EmptyInputMask mask="(99) 99999-9999" alwaysShowMask/>
    </Container>
  );
};

export default MyProfile;
