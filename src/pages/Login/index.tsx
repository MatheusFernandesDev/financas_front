import { keyboardKey } from "@testing-library/user-event";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";

import api from "../../service/api";
import { doLogin } from "../../helpers/AuthHandler";

import Loading from "../../components/Loading";
import Refresh from "../../components/Refresh";
import TextInput from "../../components/TextInput";
import SelectOption from "../../components/SelectOption";
import PasswordInput from "../../components/PasswordInput";
import CheckboxInput from "../../components/CheckboxInput";
import Button from "../../components/Button";

import {
  Container,
  Form,
  Card,
  // Button,
  Linkfy,
  ButtonArea,
  ErrorMessage,
} from "./styles";

interface States {
  id: number;
  name: string;
}
interface Error {
  msg: string;
}

const Login: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(true);
  const [newLogin, setNewLogin] = useState<boolean>(false);
  const [errors, setErrors] = useState([]);
  const [loginErrors, setLoginErrors] = useState<Error>();
  const [erroVerific, setErroVerific] = useState(false);
  const [progressPending, setProgressPending] = useState<boolean>(false);

  //LOGIN
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberPassword, setRememberPassword] = useState<boolean>(false);
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);

  //CREATE
  const [user_type, setUserType] = useState<number>(-1);
  const [newUser, setNewUser] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<number>(-1);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [personType, setPersonType] = useState<number>(-1);
  const [cpf, setCpf] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phone_type, setPhoneType] = useState<number>(-1);
  //DATA
  const [statesOption, setStatesOption] = useState<States[]>([]);
  const [userOptions, setUserOptions] = useState<States[]>([]);

  const phoneOptions = [
    { id: 1, name: "Residencial" },
    { id: 2, name: "Celular" },
  ];

  const personOptions = [
    { id: 1, name: "Física" },
    { id: 2, name: "Judírica" },
  ];

  function clearHandler() {
    //LOGIN
    setUser("");
    setPassword("");
    //CREATE
    setUserType(-1);
    setNewUser("");
    setLastName("");
    setEmail("");
    setState(-1);
    setNewPassword("");
    setConfirmPassword("");
    setCpf("");
    setCnpj("");
    setPhone("");
    setPhoneType(-1);

    //
    setErrors([]);
  }

  function SignIn() {
    clearHandler();
    setLogin(!login);
    setNewLogin(!newLogin);
  }

  async function loadHandler() {
    setLoading(true);
    try {
      const { data: responseStates } = await api.get("/states");
      const { data: responseUsersTypes } = await api.get("/user-types");

      const reformattedArray = responseUsersTypes.map(
        (el: { id: number; description: string }) => ({
          id: el.id,
          name: el.description,
        })
      );

      setStatesOption(responseStates);
      setUserOptions(reformattedArray);
    } catch {
      return toast.error("Erro ao carregar dados!");
    } finally {
      setLoading(false);
    }
  }

  async function createUser() {
    setProgressPending(true);
    await api
      .post(`/signup`, {
        user_type: user_type,
        name: newUser,
        last_name: last_name,
        email: email && email.toLowerCase(),
        state: state,
        password: newPassword,
        confirmPassword: confirmPassword,
        cpf: cpf ? cpf : null,
        cnpj: cnpj ? cnpj : null,
        phone_type: phone_type,
        phone: phone,
        person_type: personType,
      })
      .then(() => {
        clearHandler();
        setLogin(true);
        setNewLogin(false);
        return toast.success("Cadastro realizado com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErrors(responseErrors);
        }
        return toast.error("Erro ao fazer cadastro!");
      })
      .finally(() => {
        setProgressPending(false);
      });
  }

  async function loginHandler() {
    setProgressPending(true);
    await api
      .post(`/signin`, {
        email: email && email.toLowerCase(),
        password: password,
      })
      .then((response) => {
        doLogin(response.data.token, rememberPassword);
        setRemoveLoading(true);
        clearHandler();
        setLogin(true);
        setNewLogin(false);
        window.location.href = "/dashboard";
        return toast.success("Login realizado com sucesso!");
      })
      .catch((err) => {
        if (err?.response?.data.msg === "E-mail e/ou senha errados!") {
          const responseLoginErrors = err?.response?.data;
          setErroVerific(true);
          setLoginErrors(responseLoginErrors);
          return toast.error("Erro de Verificação");
        }
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErroVerific(false);
          setErrors(responseErrors);
          return toast.error("Erro ao fazer login!");
        }
      })
      .finally(() => {
        setProgressPending(false);
      });
  }

  function EnterHandler(e: keyboardKey) {
    if (e.key === "Enter") {
      loginHandler();
    }
  }

  useEffect(() => {
    loadHandler();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {login && (
            <Card>
              <h2>Login</h2>
              <h3>Entre com suas credenciais</h3>
              <Form>
                {erroVerific && (
                  <ErrorMessage>
                    {loginErrors ? loginErrors.msg : ""}{" "}
                  </ErrorMessage>
                )}

                <TextInput
                  name_field="Email"
                  value={email}
                  onKeyPress={(e) => EnterHandler(e)}
                  onChange={(event) => setEmail(event.target.value)}
                  param="email"
                  errors={errors}
                />
                <PasswordInput
                  name_field="Senha"
                  value={password}
                  onKeyPress={(enter) => EnterHandler(enter)}
                  onChange={(event) => setPassword(event.target.value)}
                  param="password"
                  errors={errors}
                />
                <CheckboxInput
                  name_field="Lembrar Senha"
                  is_checked={rememberPassword}
                  onChange={(event) =>
                    setRememberPassword(event.target.checked)
                  }
                />
                {/* <Linkfy
                  href=""
                  // disabled={progressPending}
                >
                  Esqueceu a senha?
                </Linkfy> */}
                <ButtonArea>
                  <Button click={SignIn} disabled={progressPending}>
                    {progressPending ? <Refresh /> : "Cadastrar-se"}
                  </Button>
                  <Button click={loginHandler} disabled={progressPending}>
                    {progressPending ? <Refresh /> : "Entrar"}
                  </Button>
                </ButtonArea>
              </Form>
            </Card>
          )}
          {newLogin && (
            <Card>
              <h2>Cadastrar-se</h2>
              <Form>
                <SelectOption
                  name_field="Tipo de Usuário"
                  value={user_type}
                  options={userOptions}
                  onChange={(event) =>
                    setUserType(parseInt(event.target.value))
                  }
                  param="user_type"
                  errors={errors}
                />
                <TextInput
                  name_field="Nome"
                  value={newUser}
                  onChange={(event) => setNewUser(event.target.value)}
                  param="name"
                  errors={errors}
                />
                <TextInput
                  name_field="Sobrenome"
                  value={last_name}
                  onChange={(event) => setLastName(event.target.value)}
                  param={"last_name"}
                  errors={errors}
                />
                <TextInput
                  name_field="E-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  param="email"
                  errors={errors}
                />
                <SelectOption
                  name_field="Estados"
                  value={state}
                  options={statesOption}
                  onChange={(event) => setState(parseInt(event.target.value))}
                  param="state"
                  errors={errors}
                />
                <PasswordInput
                  name_field="Senha"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  param="password"
                  errors={errors}
                />
                <PasswordInput
                  name_field="Confirmar Senha"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  param="confirmPassword"
                  errors={errors}
                />
                <SelectOption
                  name_field="Tipo de Pessoa"
                  value={personType}
                  options={personOptions}
                  onChange={(event) =>
                    setPersonType(parseInt(event.target.value))
                  }
                  param="person_type"
                  errors={errors}
                />

                {personType == 1 && (
                  <TextInput
                    name_field="CPF"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                    param="cpf"
                    errors={errors}
                  />
                )}
                {personType == 2 && (
                  <TextInput
                    name_field="CNPJ"
                    value={cnpj}
                    onChange={(event) => setCnpj(event.target.value)}
                    param="cnpj"
                    errors={errors}
                  />
                )}

                <SelectOption
                  name_field="Tipo de Telefone"
                  value={phone_type}
                  options={phoneOptions}
                  onChange={(event) =>
                    setPhoneType(parseInt(event.target.value))
                  }
                  param="phone"
                  errors={errors}
                />
                <TextInput
                  name_field="Telefone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  param="phone"
                  errors={errors}
                />
                <ButtonArea>
                  <Button click={SignIn} disabled={progressPending}>
                    {progressPending ? <Refresh /> : "Voltar"}
                  </Button>
                  <Button click={createUser} disabled={progressPending}>
                    {progressPending ? <Refresh /> : "Criar"}
                  </Button>
                </ButtonArea>
              </Form>
            </Card>
          )}
        </>
      )}
      <ToastContainer theme="dark" />
    </Container>
  );
};

export default Login;
