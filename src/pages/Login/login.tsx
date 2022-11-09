import React, { useState, useEffect } from "react";

import api from "../../service/api";
import {
  Container,
  Componente,
  Label,
  Text,
  Form,
  Card,
  Button,
  Link,
} from "./styles";

import TextInput from "../../components/FormContent/TextInput";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [newLogin, setNewLogin] = useState(false);
  const [states, setStates] = useState([]);

  async function loadStates() {
    const { data: response } = await api.get("/states");
    if (response.length > 0) {
      setStates(response);
    }
  }

  function SignIn() {
    setLogin(!login);
    setNewLogin(!newLogin);
  }

  useEffect(() => {
    loadStates();
  }, []);

  return (
    <Container>
      {login && (
        <Card>
          <h2>Login</h2>
          <h3>Enter your credentials</h3>
          <Form>
            <Componente>
              <Label>Nome de Usuario</Label>
              <Text></Text>
            </Componente>
            <Componente>
              <Label>Senha</Label>
              <Text></Text>
            </Componente>
            <Link href="">Esqueceu a senha?</Link>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button onClick={SignIn}>Cadastrar-se</Button>
              <Button>LOGIN</Button>
            </div>
          </Form>
        </Card>
      )}
      {newLogin && (
        <Card>
          <h2>Cadastrar-se</h2>
          <Form>
            <Componente>
              <Label>Nome de Usuario</Label>
              <Text></Text>
            </Componente>
            <Componente>
              <Label>E-mail</Label>
              <Text></Text>
            </Componente>
            <Componente>
              <Label>Estado</Label>
              <select>
                {/* {states.map((state, index) => (
                  <option key={index} value={state.id}>
                    {state.name}
                  </option>
                ))} */}
              </select>
            </Componente>
            <Componente>
              <Label>Senha</Label>
              <Text></Text>
            </Componente>
            <Componente>
              <Label>Confirmar Senha</Label>
              <Text></Text>
            </Componente>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button onClick={SignIn}>Login</Button>
              <Button>Criar</Button>
            </div>
          </Form>
        </Card>
      )}
    </Container>
  );
};

export default Login;
