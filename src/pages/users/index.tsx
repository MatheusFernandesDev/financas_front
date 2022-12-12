import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Navigate } from "react-router-dom";
import { Container } from "../../App.styles";
import DataTableContent from "../../components/DataTableContent";
import ButtonActions from "../../components/DataTableContent/ButtonActions";
import { ColumnTitle } from "../../components/DataTableContent/styles";
import FormContent from "../../components/FormContent";
import Header from "../../components/Header";
import api from "../../service/api";
import { Linkify } from "../dashBoard/styles";

const Users: React.FC = () => {
  const [id, setId] = useState<number>(-1);
  console.log(id);
  const [users, setUsers] = useState([]);
  const [formEdit, setFormEdit] = useState<boolean>(false);

  async function openEditUser(id: number) {
    setFormEdit(true);
    setId(id);
  }

  const columns = [
    {
      name: <ColumnTitle> Nome </ColumnTitle>,
      selector: "name",
      center: true,
    },
    {
      name: <ColumnTitle> Email</ColumnTitle>,
      selector: "email",
      center: true,
    },
    {
      name: <ColumnTitle>Tipo</ColumnTitle>,
      cell: (row: any) => {
        return (
          (row.id_user_type == 1 && "Admin") ||
          (row.id_user_type == 2 && "Usuário") ||
          (row.id_user_type == 3 && "Gerente") ||
          (row.id_user_type == 4 && "Cliente")
        );
      },
      center: true,
    },
    {
      name: <ColumnTitle> Ações </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          <>
            <ButtonActions
              children={<FaUserEdit size={20} color="black" />}
              click={() => {
                openEditUser(row.id);
              }}
            />
            <ButtonActions children={<MdDelete size={20} color="black" />} />
          </>
        );
      },
    },
  ];

  const filtro = [{ name: "Nome", id: "name" }];

  async function loadUsers() {
    const { data: response } = await api.get("/users", {
      validateStatus: (status) => status == 200,
    });
    setUsers(response);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {!formEdit && (
          <FormContent reloadHandler={loadUsers} hideSave>
            <DataTableContent
              title="Usuários"
              data={users}
              filterColumns={filtro}
              columns={columns}
            />
          </FormContent>
        )}
        {formEdit && <FormContent></FormContent>}
      </Container>
    </>
  );
};

export default Users;
