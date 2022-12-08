import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import api from "../../service/api";
import { isLogged } from "../../helpers/AuthHandler";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import FormContent from "../../components/FormContent";
import DataTableContent from "../../components/DataTableContent";

import { Container } from "./styles";

const DashBoard: React.FC = () => {
  let Logged = isLogged();
  const link_ref = useRef<HTMLAnchorElement>(null);
  const [users, setUsers] = useState([]);

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
  ];

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
      <FormContent>
        <DataTableContent data={users} title="Usuários" columns={columns} />

      </FormContent>
      <NavLink ref={link_ref} to="/" />
    </Container>
  );
};

export default DashBoard;
