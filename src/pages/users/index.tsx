import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../service/api";
import {
  cellphoneMask,
  cnpjMask,
  cpfMask,
  residentphoneMask,
} from "../../helpers/masks";

import { Container } from "../../App.styles";

import Modal from "../../components/Modal";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import TextInput from "../../components/TextInput";
import FormContent from "../../components/FormContent";
import SelectOption from "../../components/SelectOption";
import PasswordInput from "../../components/PasswordInput";
import DataTableContent from "../../components/DataTableContent";
import ButtonActions from "../../components/DataTableContent/ButtonActions";

import { ColumnTitle } from "../../components/DataTableContent/styles";

import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Form, Title } from "./styles";
import { Button } from "../login/styles";

const Users: React.FC = () => {
  const columns = [
    {
      name: <ColumnTitle> Nome </ColumnTitle>,
      cell: (row: any) => {
        return row.last_name == null
          ? `${row.name}`
          : `${row.name}  ${row.last_name}`;
      },
      center: true,
    },
    {
      name: <ColumnTitle> Email </ColumnTitle>,
      selector: "email",
      center: true,
    },
    {
      name: <ColumnTitle> Tipo </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          (row.id_user_type == 1 && "Admin") ||
          (row.id_user_type == 2 && "Usuário") ||
          (row.id_user_type == 3 && "Cliente") ||
          (row.id_user_type == 4 && "Gerente")
        );
      },
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
                openEditUser(row, true);
              }}
            />

            <ButtonActions
              click={() => deleteHandler(row.id)}
              children={<MdDelete size={20} color="black" />}
            />
          </>
        );
      },
    },
  ];

  const filtro = [{ name: "Nome", id: "name" }];

  // DATA
  const personOptions = [
    { id: 1, name: "Físico" },
    { id: 2, name: "Jurídico" },
  ];
  const phoneOptions = [
    { id: 1, name: "Celular" },
    { id: 2, name: "Residencial" },
  ];
  const [users, setUsers] = useState([]);
  const [statesOption, setStatesOption] = useState([]);
  const [userOption, setUserOption] = useState([]);
  // EDIT
  const [id, setId] = useState<number>(-1);
  const [userType, setUserType] = useState<number>(-1);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [state, setState] = useState<number>(-1);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [personType, setPersonType] = useState<number>(-1);
  const [cpf, setCPF] = useState<string>("");
  const [cnpj, setCNPJ] = useState<string>("");
  const [phoneType, setPhoneType] = useState<number>(-1);
  const [phone, setPhone] = useState<string>("");
  //
  const [progressPending, setProgressPending] = useState<boolean>(false);
  const [errors, setErrors] = useState([]);
  const [editando, setEditando] = useState<boolean>(false);
  const [formEdit, setFormEdit] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  function clearHandler() {
    setId(-1);
    setUserType(-1);
    setName("");
    setLastName("");
    setEmail("");
    setState(-1);
    setPersonType(-1);
    setCPF("");
    setCNPJ("");
    setPhoneType(-1);
    setPhone("");
    setErrors([]);
    setEditando(false);
  }

  function changeShowedState() {
    clearHandler();
    setModalDelete(false);
  }

  function openEditUser(row: any, edit: boolean) {
    clearHandler();
    setFormEdit(true);
    if (edit) {
      setEditando(true);
      setId(row.id);
      setUserType(row.id_user_type);
      setName(row.name);
      setLastName(row.last_name);
      setEmail(row.email);
      setState(Number(row.state));
      setPersonType(row.person_type);
      setCPF(row.cpf);
      setCNPJ(row.cnpj);
      setPhoneType(Number(row.phone_type));
      setPhone(row.phone);
    }
  }

  async function loadHandler() {
    const { data: responseUser } = await api.get("/users", {
      validateStatus: (status) => status == 200 || status === 204,
    });
    const { data: responseStates } = await api.get("/states", {
      validateStatus: (status) => status == 200 || status === 204,
    });
    const { data: responseUserType } = await api.get("/user-types", {
      validateStatus: (status) => status == 200 || status === 204,
    });

    setUsers(responseUser);
    setStatesOption(responseStates);
    if (responseUserType.length > 0) {
      const formattedUserType = responseUserType.map(
        (el: { id: number; description: string }) => ({
          id: el.id,
          name: el.description,
        })
      );
      setUserOption(formattedUserType);
    }
  }

  async function saveHandler() {
    setProgressPending(true);
    let newPhone;
    if (phoneType == 1) {
      newPhone = cellphoneMask(phone);
    } else if (phoneType == 2) {
      newPhone = residentphoneMask(phone);
    }

    api
      .post(`/user`, {
        id_user_type: userType,
        name: name,
        last_name: lastName,
        email: email.toLowerCase().replace(/ /g, ""),
        state: state,
        password: password.replace(/ /g, ""),
        confirmPassword: confirmPassword.replace(/ /g, ""),
        cpf: cpf && cpfMask(cpf),
        cnpj: cnpj && cnpjMask(cnpj),
        phone_type: phoneType,
        phone: phoneType ? newPhone : phone,
        person_type: personType,
      })
      .then(() => {
        clearHandler();
        loadHandler();
        setFormEdit(false);
        return toast.success("Usuário criado com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErrors(responseErrors);
        }
        return toast.error("Erro ao criar usuário, verificar dados.");
      })
      .finally(() => {
        setProgressPending(false);
      });
  }

  async function editHandler() {
    let newPhone;
    if (phoneType == 1) {
      newPhone = cellphoneMask(phone);
    } else if (phoneType == 2) {
      newPhone = residentphoneMask(phone);
    }

    setProgressPending(true);
    api
      .put(`/user/${id}`, {
        id_user_type: userType,
        name: name,
        last_name: lastName,
        email: email && email.toLowerCase().replace(/ /g, ""),
        state: state,
        password: password,
        // confirmPassword: confirmPassword,
        cpf: cpf ? cpfMask(cpf) : null,
        cnpj: cnpj ? cnpjMask(cnpj) : null,
        phone_type: phoneType,
        phone: phoneType ? newPhone : phone,
        person_type: personType,
      })
      .then(() => {
        clearHandler();
        loadHandler();
        setFormEdit(false);
        return toast.success("Usuário editado com sucesso!");
      })
      .catch(() => {
        return toast.error(`Erro ao editar usuário, verificar dados.`);
      })
      .finally(() => {
        setProgressPending(false);
      });
  }

  async function deleteHandler(id: number) {
    setId(id);
    setModalDelete(true);
  }

  useEffect(() => {
    loadHandler();
  }, []);

  function removeHandler() {
    api
      .delete(`/user/${id}`)
      .then(() => {
        clearHandler();
        loadHandler();
        setModalDelete(false);
        return toast.success("Usuário excluido com sucesso!");
      })
      .catch(() => {
        return toast.error("Erro ao excluir usuário.");
      });
  }

  return (
    <Container>
      <SideBar />
      {!formEdit && (
        <FormContent
          reloadHandler={loadHandler}
          newHandler={() => openEditUser(null, false)}
          hideSave
        >
          <DataTableContent
            title="Usuários"
            data={users}
            filterColumns={filtro}
            columns={columns}
          />
        </FormContent>
      )}
      {formEdit && (
        <FormContent
          saveHandler={saveHandler}
          editHandler={editHandler}
          edit={editando}
          hideNew
          hideReload
          showReturn
          returnHandler={() => {
            clearHandler();
            setFormEdit(false);
          }}
        >
          <Title>{editando ? "Editar" : "Criar"} Usuário</Title>
          <Form>
            <SelectOption
              name_field="Tipo de Usuário"
              value={userType}
              options={userOption}
              onChange={(event) => setUserType(parseInt(event.target.value))}
              param="id_user_type"
              errors={errors}
            />
            <TextInput
              name_field="Nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              param="name"
              errors={errors}
            />
            <TextInput
              name_field="Sobrenome"
              value={lastName}
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
            {!editando && (
              <>
                <PasswordInput
                  name_field="Senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
              </>
            )}
            <SelectOption
              name_field="Estados"
              value={state}
              options={statesOption}
              onChange={(event) => setState(parseInt(event.target.value))}
              param="state"
              errors={errors}
            />
            <SelectOption
              name_field="Tipo de Pessoa"
              value={personType}
              options={personOptions}
              onChange={(event) => setPersonType(parseInt(event.target.value))}
              param="person_type"
              errors={errors}
            />
            {personType == 1 && (
              <TextInput
                name_field="CPF"
                value={cpf}
                onChange={(event) => setCPF(event.target.value)}
                param="cpf"
                errors={errors}
              />
            )}
            {personType == 2 && (
              <TextInput
                name_field="CNPJ"
                value={cnpj}
                onChange={(event) => setCNPJ(event.target.value)}
                param="cnpj"
                errors={errors}
              />
            )}
            <SelectOption
              name_field="Tipo de Telefone"
              value={phoneType}
              options={phoneOptions}
              onChange={(event) => setPhoneType(parseInt(event.target.value))}
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
          </Form>
        </FormContent>
      )}
      {modalDelete && (
        <Modal
          title="Excluir Usuário"
          message="Deseja realmente excluir usuário?"
          saveText="Excluir"
          saveHandler={removeHandler}
          changeShowedState={changeShowedState}
        />
      )}
    </Container>
  );
};

export default Users;
