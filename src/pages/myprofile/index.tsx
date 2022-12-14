import React from "react";

import { Container } from "../../App.styles";
import FormContent from "../../components/FormContent";

import SideBar from "../../components/Sidebar";

import { PerfilIcon } from "./styles";

const MyProfile: React.FC = () => {
  return (
    <Container>
      <SideBar/>
      <FormContent hideAll></FormContent>
    </Container>
  );
};

export default MyProfile;
