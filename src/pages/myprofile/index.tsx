import React, { useState } from "react";

import { Container } from "../../App.styles";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import FormContent from "../../components/FormContent";
import verifyUserType from "../../helpers/verifyUserType";

import {
  Form,
  Content,
  PerfilArea,
  NameText,
  PerfilIcon,
  EditIcon,
  NameIcon,
  EmailIcon,
  TelephoneIcon,
  PasswordIcon,
  ConfirmPasswordIcon,
  Inputs,
} from "./styles";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";

const MyProfile: React.FC = () => {
  //
  let meuNome = localStorage.getItem("name");
  let meuSobrenome = localStorage.getItem("last_name");

  const [errors, setErrors] = useState([]);
  const [edit, setEdit] = useState<boolean>(false);
  // EDIT
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function clearHandler() {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  }

  function openEdit() {
    clearHandler();
    setEdit(!edit);
  }

  return (
    <Container>
      <SideBar />
      <FormContent hideAll>
        <Content>
          <PerfilArea>
            <PerfilIcon />
            <NameText>{`${meuNome} ${
              meuSobrenome == null ? "" : meuSobrenome
            }`}</NameText>
          </PerfilArea>
          <EditIcon onClick={openEdit} />
          <br />
          <Form>
            {edit && (
              <Inputs>
                <NameIcon />
                <TextInput
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Inputs>
            )}
            <Inputs>
              <EmailIcon />
              {edit ? (
                <TextInput
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              ) : (
                <NameText noPerfil>MEU NOME</NameText>
              )}
            </Inputs>
            <Inputs>
              <TelephoneIcon />
              {edit ? (
                <TextInput
                  value={phone.replace(/\D/g, "")}
                  onChange={(event) => setPhone(event.target.value)}
                />
              ) : (
                <NameText noPerfil>MEU NOME</NameText>
              )}
            </Inputs>
            {edit && (
              <>
                <Inputs>
                  <PasswordIcon />
                  <PasswordInput
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Inputs>
                <Inputs>
                  <ConfirmPasswordIcon />
                  <PasswordInput
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </Inputs>
              </>
            )}
          </Form>
        </Content>
      </FormContent>
    </Container>
  );
};

export default MyProfile;
