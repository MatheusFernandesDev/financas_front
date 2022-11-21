import { keyboardKey } from "@testing-library/user-event";
import React, { useState, useEffect } from "react";

import api from "../../service/api";
import { doLogin } from "../../helpers/AuthHandler";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import CheckboxInput from "../../components/CheckboxInput";

import {
  Container,
  Text,
  Form,
  Card,
  Button,
  Linkfy,
  Select,
  Password,
  ButtonArea,
  ErrorMessage,
} from "./styles";

const Login: React.FC = () => {
  const [login, setLogin] = useState(true);
  const [newLogin, setNewLogin] = useState(false);
  const [errors, setErrors] = useState([]);
  const [progressPending, setProgressPending] = useState(false);

  //LOGIN
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  //CREATE
  const [newUser, setNewUser] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState(-1);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //DATA
  const [statesOption, setStatesOption] = useState([]);

  function clearHandler() {
    setUser("");
    setPassword("");
    //CREATE
    setNewUser("");
    setEmail("");
    setState(-1);
    setNewPassword("");
    setConfirmPassword("");
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
    if (newPassword != confirmPassword) {
      throw new Error("As senhas nao coincidem!");
    }
    try {
      await api.post(`/signup`, {
        name: newUser,
        email: email && email.toLowerCase(),
        password: newPassword,
        state: state,
      });

      clearHandler();
      setLogin(true);
      setNewLogin(false);
      toast.success("Cadastro realizado com sucesso!");
    } catch {
      return toast.error("Erro ao fazer cadastro!");
    }
    setProgressPending(false);
  }

  async function loginHandler() {
    await api
      .post(`/signin`, {
        email: email && email.toLowerCase(),
        password: password,
      })

      .then((response) => {
        doLogin(response.data.token, rememberPassword);
        clearHandler();
        setLogin(true);
        setNewLogin(false);
        window.location.href = "/dashboard";
        toast.success("Login realizado com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.error;
          console.log(responseErrors);
          setErrors(responseErrors);
        }

        return toast.error("Erro ao fazer login!");
      });
  }

  function EnterHandler(e: keyboardKey) {
    if (e.key === "Enter") {
      // e.preventDefault()
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
          <h3>Enter your credentials</h3>
          <Form>
            {/* {errors && <ErrorMessage>{errors}</ErrorMessage>} */}
            <Text
              name_field="Email"
              value={email}
              onKeyPress={(e) => EnterHandler(e)}
              onChange={(event) => setEmail(event.target.value)}
              param={"email"}
              errors={errors}
            />
            <Password
              name_field="Senha"
              value={password}
              onKeyPress={(enter) => EnterHandler(enter)}
              onChange={(event) => setPassword(event.target.value)}
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
            <Text
              name_field="Usuário"
              value={newUser}
              onChange={(event) => setNewUser(event.target.value)}
            />
            <Text
              name_field="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Select
              name_field="Estados"
              value={state}
              options={statesOption}
              onChange={(event) => setState(parseInt(event.target.value))}
            />
            <Text
              name_field="Senha"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            <Text
              name_field="Confirmar Senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
