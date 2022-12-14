import React from "react";

import { Container } from "../../App.styles";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import FormContent from "../../components/FormContent";

import { Content, PerfilIcon } from "./styles";

const MyProfile: React.FC = () => {
  return (
    <Container>
      <SideBar/>
      <FormContent hideAll>
        <Content>
          <div>
            <PerfilIcon/>
            <div>MEU NOME</div>
          </div>
        </Content>
      </FormContent>
    </Container>
  );
};

export default MyProfile;
