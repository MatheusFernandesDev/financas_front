import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import api from "../../service/api";
import { isLogged } from "../../helpers/AuthHandler";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import FormContent from "../../components/FormContent";
import DataTableContent from "../../components/DataTableContent";

import { ColumnTitle } from "../../components/DataTableContent/styles";
import ButtonActions from "../../components/DataTableContent/ButtonActions";

import { MdDelete } from "react-icons/md";

import { Container } from "./styles";

const DashBoard: React.FC = () => {
  let Logged = false || isLogged();
  const link_ref = useRef<HTMLAnchorElement>(null);
  const [users, setUsers] = useState([]);

  const columns = [
    {
      name: <ColumnTitle> Nome </ColumnTitle>,
      selector: "name",
      center: true,
    },
    {
      name: <ColumnTitle> Ações </ColumnTitle>,
      center: true,
      cell: () => {
        return (
          <>
            <ButtonActions
              children={<MdDelete size={20} color="black"/>}
            />
          </>
        )
      },
    },
  ];

  const filtro = [
    { name: "Nome", id: "name" }
  ]

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
        <DataTableContent 
          title="Usuários" 
          data={users}
          filterColumns={filtro}
          columns={columns} 
        />
      </FormContent>
      <NavLink ref={link_ref} to="/" />
    </Container>
  );
};

export default DashBoard;
