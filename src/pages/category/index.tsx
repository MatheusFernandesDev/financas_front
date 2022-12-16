import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import api from "../../service/api";

import { Container } from "../../App.styles";

import Modal from "../../components/Modal";
import SideBar from "../../components/Sidebar";
import TextInput from "../../components/TextInput";
import Form from "../../components/FormContent/Form";
import FormContent from "../../components/FormContent";
import DataTableContent from "../../components/DataTableContent";
import ButtonActions from "../../components/DataTableContent/ButtonActions";

import { ColumnTitle } from "../../components/DataTableContent/styles";

import { MdModeEditOutline, MdDelete } from "react-icons/md";

const Category: React.FC = () => {
  const columns = [
    {
      name: <ColumnTitle> Categoria </ColumnTitle>,
      selector: "description",
      center: true,
    },

    {
      name: <ColumnTitle> Ações </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          <>
            <ButtonActions
              children={<MdModeEditOutline size={20} color="black" />}
              click={() => {
                createForm(row, true);
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

  const filtro = [{ name: "Nome", id: "description" }];

  const [createCategory, setCreateCategory] = useState<boolean>(false);
  const [editando, setEditando] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState([]);

  const [id, setId] = useState<number>(-1);
  const [description, setDescription] = useState<string>("");

  async function loadHandler() {
    try {
      const { data: response } = await api.get("/categorys", {
        validateStatus: (status) => status == 200 || status == 204,
      });
      setData(response);
    } catch {
      return toast.error("Erro ao carregar dados.");
    }
  }

  function clearHandler() {
    setEditando(false);
    setDescription("");
    setErrors([]);
  }

  function createForm(row: any, edit: boolean) {
    clearHandler();
    setCreateCategory(!createCategory);
    if (edit) {
      setEditando(true);
      setId(row.id);
      setDescription(row.description);
    }
  }

  async function saveHandler() {
    await api
      .post("/category", {
        description: description,
      })
      .then(() => {
        clearHandler();
        setCreateCategory(false);
        return toast.success("Categoria cadastrada com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErrors(responseErrors);
        }
        return toast.error("Erro ao fazer Cadastro!");
      })
      .finally(() => {
        loadHandler();
      });
  }

  async function ediHandler() {
    await api
      .put(`/category/${id}`, {
        description: description,
      })
      .then(() => {
        clearHandler();
        setCreateCategory(false);
        return toast.success("Categoria Atualizada com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErrors(responseErrors);
        }
        return toast.error("Error ao Atualizar Categoria!");
      })
      .finally(() => {
        loadHandler();
      });
  }
  useEffect(() => {
    loadHandler();
  }, []);

  async function deleteHandler(id: number) {
    setId(id);
    setModalDelete(true);
  }
  function changeShowedState() {
    clearHandler();
    setModalDelete(false);
  }

  async function removeHandler() {
    await api
      .delete(`/category/${id}`)
      .then(() => {
        clearHandler();
        setModalDelete(false);
        return toast.success("Categoria Excluida com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          return toast.error(`Erro ao Excluir Categoria ${err}`);
        }
      })
      .finally(() => {
        loadHandler();
      });
  }

  return (
    <Container>
      <SideBar />
      {!createCategory && (
        <FormContent
          hideSave
          newHandler={() => createForm(null, false)}
          reloadHandler={() => loadHandler()}
        >
          <DataTableContent
            title={"Categoria"}
            columns={columns}
            data={data}
            filterColumns={filtro}
          />
        </FormContent>
      )}
      {createCategory && (
        <FormContent
          hideNew
          showReturn
          hideReload
          edit={editando}
          returnHandler={() => createForm(null, false)}
          saveHandler={() => saveHandler()}
          editHandler={() => ediHandler()}
        >
          <Form title={`${editando ? "Editar Categoria" : "Criar Categoria"}`}>
            <TextInput
              grid_width="5"
              name_field="Categoria"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              param="description"
              errors={errors}
            />
          </Form>
        </FormContent>
      )}
      {modalDelete && (
        <Modal
          title="Excluir Categoria"
          message="Deseja realmente excluir categoria ?"
          saveText="Excluir"
          saveHandler={removeHandler}
          changeShowedState={changeShowedState}
        />
      )}
    </Container>
  );
};

export default Category;
