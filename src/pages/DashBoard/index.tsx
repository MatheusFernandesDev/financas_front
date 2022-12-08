import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { isLogged } from "../../helpers/AuthHandler";

import Header from "../../components/Header";

import Loading from "../../components/Loading";

import { Container } from "./styles";
import api from "../../service/api";

const DashBoard: React.FC = () => {
  let Logged = isLogged();
  const link_ref = useRef<HTMLAnchorElement>(null);
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const { data: response } = await api.get("/users", {
      validateStatus: (status) => status == 200,
    });
    setUsers(response);
  }

  useEffect(() => {
    if (Logged == false) {
      if (link_ref.current) {
        link_ref.current.click();
      }
    }
  }, [Logged]);

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <Container>
      <Header />
      <NavLink ref={link_ref} to="/" />
    </Container>
  );
};

export default DashBoard;
