import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../service/api";
import { Container } from "../../App.styles";

import Button from "../../components/Button";
import HeaderBar from "../../components/HeaderBar";
import TextInput from "../../components/TextInput";
import FormContent from "../../components/FormContent";
import verifyUserType from "../../helpers/verifyUserType";
import PasswordInput from "../../components/PasswordInput";
import EmptyInputMask from "../../components/EmptyMaskInput";

import {
  Form,
  Content,
  PassButton,
  PerfilArea,
  NameText,
  PerfilIcon,
  EditIcon,
  CloseIcon,
  NameIcon,
  EmailIcon,
  TelephoneIcon,
  PasswordIcon,
  ConfirmPasswordIcon,
  Inputs,
} from "./styles";
import ReactTooltip from "react-tooltip";
import DashboardHeaderContent from "../../components/DashboardHeaderContent";

const MyProfile: React.FC = () => {
  //
  const [errors, setErrors] = useState([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [passwordEdit, setPasswordEdit] = useState<boolean>(false);
  // EDIT
  const [id, setId] = useState<number>(-1)
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneMask, setPhoneMask] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  async function loadHandler() {
    try {
      const { data: response } = await api.get(`/user-profile`, { validateStatus: (status) => status == 200 || status === 204 });
    
      setId(response.id);
      setName(response.name);
      setLastName(response.last_name);
      setEmail(response.email);
      setPhone(response.phone);
      response.phone_type == 1 ? setPhoneMask("(99) 99999-9999") : setPhoneMask("(99) 9999-9999");
    } catch {
      return toast.error("Erro ao carregar dados.");
    }
  }

  function editHandler() {
    api.put(`/user/${id}`, {
      name: name,
      last_name: lastName,
      phone: phone,
      email: email && email.toLowerCase().replace(/ /g, ""),
      password: passwordEdit ? password : null,
      confirmPassword: passwordEdit ? confirmPassword : null,
    })
    .then(() => {
      loadHandler();
      setEdit(false);
      return toast.success("Perfil editado com sucesso!");
    })
    .catch((err) => {
      if (err?.response?.data.msg === "Senhas não coincidem!") {
        return toast.error("Senhas não coincidem!")
      }
      return toast.error("Erro ao editar perfil.");
    })
  }
  
  useEffect(() => {
    loadHandler();
  }, []);

  return (
    <Container>
      <HeaderBar/>
      <DashboardHeaderContent>
        <FormContent hideAll>
          <Content>
            <PerfilArea>
              <PerfilIcon />
              {!edit &&
                <NameText>{`${name} ${
                  lastName == null ? "" : lastName
                }`}</NameText>
              }
            </PerfilArea>
            {!edit ? 
              <>
                <ReactTooltip effect="solid" place="bottom" delayShow={500} />
                <EditIcon data-tip="Editar perfil" onClick={() => setEdit(!edit)} /> 
              </> :
              <>
                <ReactTooltip effect="solid" place="bottom" delayShow={500} />
                <CloseIcon data-tip="Editar perfil" onClick={() => setEdit(!edit)}/>
              </> 
            }
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
                  <NameText noPerfil>{email}</NameText>
                )}
              </Inputs>
              <Inputs>
                <TelephoneIcon />
                {edit ? (
                  <EmptyInputMask
                    mask={phoneMask}
                    value={phone.replace(/\D/g, "")}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                ) : (
                  <NameText noPerfil>{phone}</NameText>
                )}
              </Inputs>
              {edit && 
                <>
                  {passwordEdit && (
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
                  <PassButton onClick={() => setPasswordEdit(!passwordEdit)} >Redefinir Senha</PassButton>
                  <Button className="secondary" height="35px" click={editHandler} >Salvar</Button>
                </>
              }
            </Form>
            <br/>
          </Content>
        </FormContent>
      </DashboardHeaderContent>
    </Container>
  );
};

export default MyProfile;
