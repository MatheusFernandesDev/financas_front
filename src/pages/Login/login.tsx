import React, { useState, useEffect } from "react";

import api from "../../service/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
} from "./styles";
import { keyboardKey } from "@testing-library/user-event";

const Login: React.FC = () => {
  const [login, setLogin] = useState(true);
  const [newLogin, setNewLogin] = useState(false);

  //LOGIN
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
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
      return console.log("Erro ao carregar dados!");
    }
  }
  async function createUser() {
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
    } catch {
      return console.log("Erro ao fazer cadastro!");
    }
  }
  async function loginHandler() {
    await api
      .post(`/signin`, {
        email: email && email.toLowerCase(),
        password: password,
      })
      .then(() => {
        clearHandler();
        setLogin(true);
        setNewLogin(false);
        toast.success("Login realizado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        return toast.error("Erro ao fazer login!");
      });
  }

  function EnterHandler(e: keyboardKey) {
    // console.log(e);
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
            <Text
              name_field="Nome de Usuario"
              value={email}
              onKeyPress={(e) => EnterHandler(e)}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Password
              name_field="Senha"
              value={password}
              onKeyPress={(e) => EnterHandler(e)}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Linkfy href="">Esqueceu a senha?</Linkfy>
            <ButtonArea>
              <Button onClick={SignIn}>Cadastrar-se</Button>
              <Button onClick={loginHandler}>Entrar</Button>
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
              <Button onClick={SignIn}>Voltar</Button>
              <Button onClick={createUser}>Criar</Button>
            </ButtonArea>
          </Form>
        </Card>
      )}
      <ToastContainer />
    </Container>
  );
};

export default Login;
