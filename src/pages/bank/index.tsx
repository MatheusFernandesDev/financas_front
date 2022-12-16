import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

import api from "../../service/api";

import { Container } from "../../App.styles";

import Modal from "../../components/Modal";
import SideBar from "../../components/Sidebar";
import TextInput from "../../components/TextInput";
import Form from "../../components/FormContent/Form";
import FormContent from "../../components/FormContent";
import SelectOption from "../../components/SelectOption";
import EmptyInputMask from "../../components/EmptyMaskInput";
import DataTableContent from "../../components/DataTableContent";
import ButtonActions from "../../components/DataTableContent/ButtonActions";

import { ColumnTitle } from "../../components/DataTableContent/styles";

import { MdModeEditOutline, MdDelete } from "react-icons/md";

const Bank: React.FC = () => {
  const columns = [
    {
      name: <ColumnTitle> Banco </ColumnTitle>,
      selector: "name_bank",
      center: true,
    },
    {
      name: <ColumnTitle> Descrição </ColumnTitle>,
      selector: "description",
      center: true,
    },
    {
      name: <ColumnTitle> Tipo de Conta</ColumnTitle>,
      selector: "type_account",
      center: true,
    },
    {
      name: <ColumnTitle> Agencia </ColumnTitle>,
      selector: "agency",
      center: true,
    },
    {
      name: <ColumnTitle> Nº </ColumnTitle>,
      selector: "n_account",
      center: true,
    },
    {
      name: <ColumnTitle> Ações </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          <>
            <ReactTooltip effect="solid" place="bottom" delayShow={500} />
            <ButtonActions
              children={<MdModeEditOutline data-tip="Editar Banco" size={20} color="black" />}
              click={() => {
                createForm(row, true);
              }}
            />

            <ButtonActions
              click={() => deleteHandler(row.id)}
              children={<MdDelete data-tip="Apagar Banco" size={20} color="black" />}
            />
          </>
        );
      },
    },
  ];

  const optTypesAccount = [
    { id: 1, name: "CORRENTE" },
    { id: 2, name: "POUPANÇA" },
  ];

  const filtro = [{ name: "Nome", id: "name_bank" }];

  const [createBank, setCreateBank] = useState<boolean>(false);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState([]);
  const [editando, setEditando] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const [id, setId] = useState<number>(-1);
  const [codBank, setCodBank] = useState<string>("");
  const [nameBank, setNameBank] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [typeAccount, setTypeAccount] = useState<number>(-1);
  const [agency, setAgency] = useState<string>("");
  const [account, setAccount] = useState<string>("");

  function createForm(row: any, edit: boolean) {
    clearHandler();
    setCreateBank(!createBank);
    if (edit) {
      setEditando(true);
      setId(row.id);
      setCodBank(row.cod_bank);
      setNameBank(row.name_bank);
      setDescription(row.description);
      setTypeAccount(row.type_account);
      setAgency(row.agency);
      setAccount(row.n_account);
    }
  }

  async function loadHandler() {
    try {
      const { data: response } = await api.get("/bank", {
        validateStatus: (status) => status == 200 || status === 204,
      });
      setData(response);
    } catch {
      return toast.error("Erro ao carregar dados.");
    }
  }

  function clearHandler() {
    setCodBank("");
    setNameBank("");
    setDescription("");
    setTypeAccount(-1);
    setAgency("");
    setAccount("");
    setErrors([]);
    setEditando(false);
  }

  function changeShowedState() {
    clearHandler();
    setModalDelete(false);
  }
  async function saveHandler() {
    await api
      .post("/bank", {
        cod_bank: codBank,
        name_bank: nameBank,
        description: description,
        type_account: typeAccount == 1 ? "CORRENTE" : "POUPANÇA",
        agency: agency,
        n_account: account,
      })
      .then(() => {
        clearHandler();
        setCreateBank(false);
        return toast.success("Cadastro de Banco realizado com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErrors(responseErrors);
        }
        return toast.error("Erro ao fazer cadastro!");
      })
      .finally(() => {
        loadHandler();
      });
  }

  async function editHandler() {
    await api
      .put(`/bank/${id}`, {
        cod_bank: codBank,
        name_bank: nameBank,
        description: description,
        type_account: typeAccount == 1 ? "CORRENTE" : "POUPANÇA",
        agency: agency,
        n_account: account,
      })
      .then(() => {
        clearHandler();
        setCreateBank(false);
        return toast.success(" Banco Atualizado com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErrors(responseErrors);
        }
        return toast.error("Erro ao Atualizar Banco!");
      })
      .finally(() => {
        loadHandler();
      });
  }

  async function removeHandler() {
    api
      .delete(`/bank/${id}`)
      .then(() => {
        clearHandler();
        loadHandler();
        setModalDelete(false);
        return toast.success("Banco excluido com sucesso!");
      })
      .catch((err) => {
        return toast.error(`Erro ao Excluir Banco ${err}`);
      });
  }

  async function deleteHandler(id: number) {
    setId(id);
    setModalDelete(true);
  }
  useEffect(() => {
    loadHandler();
  }, []);

  return (
    <Container>
      <SideBar />
      {!createBank && (
        <FormContent
          hideSave
          newHandler={() => createForm(null, false)}
          reloadHandler={() => loadHandler()}
        >
          <DataTableContent
            title={"Bancos"}
            data={data}
            columns={columns}
            filterColumns={filtro}
          ></DataTableContent>
        </FormContent>
      )}
      {createBank && (
        <FormContent
          hideNew
          hideReload
          showReturn
          edit={editando}
          returnHandler={() => {
            createForm(null, false);
            setModalDelete(false);
          }}
          saveHandler={() => saveHandler()}
          editHandler={() => editHandler()}
        >
          <Form title={`${editando ? "Editar Banco" : "Criar Banco"}`}>
            <TextInput
              name_field="Código do Banco"
              value={codBank}
              onChange={(event) => setCodBank(event?.target.value)}
              param="cod_bank"
              errors={errors}
            />
            <TextInput
              name_field="Nome do Banco"
              value={nameBank}
              onChange={(event) => setNameBank(event.target.value)}
              param="name_bank"
              errors={errors}
            />
            <TextInput
              name_field="Descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              param="description"
              errors={errors}
            />

            <SelectOption
              name_field="Tipo de Conta"
              value={typeAccount}
              onChange={(event) => setTypeAccount(parseInt(event.target.value))}
              param="type_account"
              errors={errors}
              options={optTypesAccount}
            />
            <TextInput
              name_field="Agência"
              value={agency}
              onChange={(event) => setAgency(event.target.value)}
              param="agency"
              errors={errors}
            />

            <EmptyInputMask
              name_field="Nº da Conta"
              value={account}
              mask="99999999-9"
              onChange={(event) => setAccount(event.target.value)}
              param="n_account"
              errors={errors}
            />
          </Form>
        </FormContent>
      )}
      {modalDelete && (
        <Modal
          title="Excluir Banco"
          message="Dessa realmente excluir banco ?"
          saveText="Excluir"
          saveHandler={removeHandler}
          changeShowedState={changeShowedState}
        />
      )}
    </Container>
  );
};

export default Bank;
