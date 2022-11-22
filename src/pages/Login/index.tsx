import { keyboardKey } from "@testing-library/user-event";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";

import api from "../../service/api";
import { doLogin } from "../../helpers/AuthHandler";

import TextInput from "../../components/TextInput";
import SelectOption from "../../components/SelectOption";
import PasswordInput from "../../components/PasswordInput";
import CheckboxInput from "../../components/CheckboxInput";
import Loading from "../../components/Loading";

import {
  Container,
  Form,
  Card,
  Button,
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
  const [newUser, setNewUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<number>(-1);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  //DATA
  const [statesOption, setStatesOption] = useState<States[]>([]);

  function clearHandler() {
    //LOGIN
    setUser("");
    setPassword("");
    //CREATE
    setNewUser("");
    setEmail("");
    setState(-1);
    setNewPassword("");
    setConfirmPassword("");
    //
    setErrors([]);
  }

  function SignIn() {
    clearHandler();
    setLogin(!login);
    setNewLogin(!newLogin);
  }

  async function loadHandler() {
    try {
      const { data: response } = await api.get("/states");
      setStatesOption(response);
    } catch {
      return toast.error("Erro ao carregar dados!");
    }
  }

  async function createUser() {
    setProgressPending(true);
    await api
      .post(`/signup`, {
        name: newUser,
        email: email && email.toLowerCase(),
        password: newPassword,
        confirmPassword: confirmPassword,
        state: state,
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
          console.log(responseLoginErrors);
          setLoginErrors(responseLoginErrors);
          return toast.error("Erro de Verificação");
        }
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErroVerific(false);
          setErrors(responseErrors);
          return toast.error("Erro ao fazer login!");
        }
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
      {login && (
        <Card>
          <h2>Login</h2>
          <h3>Entre com suas credenciais</h3>
          <Form>
            {erroVerific && (
              <ErrorMessage>{loginErrors ? loginErrors.msg : ""} </ErrorMessage>
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
              onChange={(event) => setRememberPassword(event.target.checked)}
            />
            <Linkfy
              href=""
              // disabled={progressPending}
            >
              Esqueceu a senha?
            </Linkfy>
            <ButtonArea>
              <Button onClick={SignIn} disabled={progressPending}>
                Cadastrar-se
              </Button>
              <Button onClick={loginHandler} disabled={progressPending}>
                Entrar
              </Button>
            </ButtonArea>
          </Form>
        </Card>
      )}
      {newLogin && (
        <Card>
          <h2>Cadastrar-se</h2>
          <Form>
            <TextInput
              name_field="Usuário"
              value={newUser}
              onChange={(event) => setNewUser(event.target.value)}
              param="name"
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
            <ButtonArea>
              <Button onClick={SignIn} disabled={progressPending}>
                Voltar
              </Button>
              <Button onClick={createUser} disabled={progressPending}>
                Criar
              </Button>
            </ButtonArea>
          </Form>
        </Card>
      )}
      <ToastContainer theme="dark" />
    </Container>
  );
};

export default Login;