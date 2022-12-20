import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";
import moment from "moment";

import api from "../../../service/api";

import { Container } from "../../../App.styles";

import Modal from "../../../components/Modal";
import HeaderBar from "../../../components/HeaderBar";
import TextInput from "../../../components/TextInput";
import Form from "../../../components/FormContent/Form";
import DatePicker from "../../../components/DatePicker";
import FormContent from "../../../components/FormContent";
import DoubleInput from "../../../components/DoubleInput";
import SelectOption from "../../../components/SelectOption";
import DataTableContent from "../../../components/DataTableContent";
import ButtonActions from "../../../components/DataTableContent/ButtonActions";

import {
  ColumnTitle,
  StyledStatus,
} from "../../../components/DataTableContent/styles";

import { MdModeEditOutline, MdDelete } from "react-icons/md";

const ExpenseMovement: React.FC = () => {
  const columns = [
    {
      name: <ColumnTitle> Descrição </ColumnTitle>,
      selector: "description",
      center: true,
    },
    {
      name: <ColumnTitle> Data de Lançamento </ColumnTitle>,
      center: true,
      cell: (row: any) =>
        row.date_launch ? moment(row.date_launch).format("DD/MM/yyyy") : "",
    },
    {
      name: <ColumnTitle> Categoria </ColumnTitle>,
      center: true,
      cell: (row: any) => (row.Category ? row.Category.description : ""),
    },
    {
      name: <ColumnTitle> Classificação </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          (row.classification_id == 1 && "Despesa Fixa") ||
          (row.classification_id == 2 && "Despesa Variável")
        );
      },
    },
    {
      name: <ColumnTitle> Banco </ColumnTitle>,
      center: true,
      cell: (row: any) => (row.Bank ? row.Bank.name_bank : ""),
    },
    {
      name: <ColumnTitle> Valor </ColumnTitle>,
      center: true,
      cell: (row: any) =>
        `R$ ${row.value ? row.value.toFixed(2).replace(".", ",") : "0,00"}`,
    },
    {
      name: <ColumnTitle> Status </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          (row.status_launch_id == 1 && (
            <StyledStatus> Aberto </StyledStatus>
          )) ||
          (row.status_launch_id == 2 && (
            <StyledStatus className="warn"> Pendente </StyledStatus>
          )) ||
          (row.status_launch_id == 3 && (
            <StyledStatus className="success"> Pago </StyledStatus>
          )) ||
          (row.status_launch_id == 4 && (
            <StyledStatus className="alert"> Atrasado </StyledStatus>
          ))
        );
      },
    },
    {
      name: <ColumnTitle> Ações </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          <>
            <ReactTooltip effect="solid" place="bottom" delayShow={500} />
            <ButtonActions
              click={() => createForm(row, true)}
              children={
                <MdModeEditOutline
                  data-tip="Editar Despesa"
                  size={20}
                  color="black"
                />
              }
            />
            <ButtonActions
              click={() => openDelete(row.id)}
              children={
                <MdDelete data-tip="Excluir Despesa" size={20} color="black" />
              }
            />
          </>
        );
      },
    },
  ];

  const filtro = [
    { name: "Descrição", id: "description" },
    { name: "Banco", id: "Bank.name_bank" },
  ];

  // DATA
  const [data, setData] = useState([]);
  const [categoryOption, setCategoryOption] = useState([]);
  const [classificationOption, setClassificationOption] = useState([]);
  const [bankOption, setBankOption] = useState([]);
  const [statusOption, setStatusOption] = useState([]);
  // CREATE
  const [id, setId] = useState<number>(-1);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<number>(-1);
  const [classification, setClassification] = useState<number>(-1);
  const [bank, setBank] = useState<number>(-1);
  const [value, setValue] = useState<number>(0);
  const [valueMask, setValueMask] = useState<string>("");
  const [status, setStatus] = useState<number>(-1);
  const [launchDate, setLaunchDate] = useState<Date | null | undefined>(null);
  const [launchVencimentDate, setLaunchVencimentDate] = useState<
    Date | null | undefined
  >(null);
  //
  const [errors, setErrors] = useState([]);
  const [editando, setEditando] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [createExpense, setCreateExpense] = useState<boolean>(false);

  function clearHandler() {
    setId(-1);
    setDescription("");
    setCategory(-1);
    setClassification(-1);
    setBank(-1);
    setValue(0);
    setValueMask("");
    setStatus(-1);
    setLaunchDate(null);
    setLaunchVencimentDate(null);
    setErrors([]);
    setEditando(false);
  }

  function changeShowedState() {
    setDeleteModal(!deleteModal);
  }

  function createForm(row: any, edit: boolean) {
    clearHandler();
    setCreateExpense(!createExpense);
    if (edit) {
      setEditando(true);
      setId(row.id);
      setDescription(row.description);
      setCategory(row.category_id);
      setClassification(row.classification_id);
      setBank(row.bank_id);
      setValue(row.value);
      setValueMask(row.value);
      setStatus(row.status_launch_id);
      setLaunchDate(new Date(row.date_launch));
      setLaunchVencimentDate(new Date(row.date_venciment));
    }
  }

  function openDelete(id: number) {
    clearHandler();
    setId(id);
    changeShowedState();
  }

  async function loadHandler() {
    try {
      const { data: responseLaunch } = await api.get(`/launchs?movement=2`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseCategorys } = await api.get(`/categorys`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseClassifications } = await api.get(
        `/classifications`,
        {
          validateStatus: (status) => status == 200 || status === 204,
        }
      );
      const { data: responseBank } = await api.get(`/bank`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseStatus } = await api.get(`/status-launchs`, {
        validateStatus: (status) => status == 200 || status === 204,
      });

      setData(responseLaunch);
      if (responseCategorys.length > 0) {
        let formatCategory = responseCategorys.map(
          (element: { id: number; description: string }) => {
            return {
              id: element.id,
              name: element.description,
            };
          }
        );
        setCategoryOption(formatCategory);
      }
      if (responseClassifications.length > 0) {
        let formatClassification = responseClassifications.map(
          (element: { id: number; description: string }) => {
            return {
              id: element.id,
              name: element.description,
            };
          }
        );
        let filteredClassification = formatClassification.filter(
          (element: { id: number; description: string }) => {
            return element.id == 1 || element.id == 2;
          }
        );
        setClassificationOption(filteredClassification);
      }
      if (responseBank.length > 0) {
        let formatBank = responseBank.map(
          (element: { id: number; name_bank: string }) => {
            return {
              id: element.id,
              name: element.name_bank,
            };
          }
        );
        setBankOption(formatBank);
      }
      if (responseStatus.length > 0) {
        let formatStatus = responseStatus.map(
          (element: { id: number; description: string }) => {
            return {
              id: element.id,
              name: element.description,
            };
          }
        );
        setStatusOption(formatStatus);
      }
    } catch {
      return toast.error("Erro ao carregar dados.");
    }
  }

  async function saveHandler() {
    await api
      .post("/launch", {
        description,
        category_id: category,
        classification_id: classification,
        bank_id: bank,
        value,
        status_launch_id: status,
        date_launch: launchDate,
        date_venciment: launchVencimentDate,
        movement: 2,
      })
      .then(() => {
        clearHandler();
        setCreateExpense(false);
        return toast.success("Despesa criada com sucesso!");
      })
      .catch((err) => {
        if (err.response) {
          const responseErrors = err?.response?.data?.errors;
          setErrors(responseErrors);
        }
        return toast.error("Erro ao criar Despesa");
      })
      .finally(() => {
        loadHandler();
      });
  }

  function editHandler() {
    api
      .put(`/launch/${id}`, {
        description,
        category,
        classification,
        bank,
        value,
        status,
        launchDate,
        launchVenciment: launchVencimentDate,
      })
      .then(() => {
        clearHandler();
        setCreateExpense(false);
        return toast.success("Despesa editada com sucesso!");
      })
      .catch(() => {
        return toast.error("Erro ao editar Despesa");
      })
      .finally(() => {
        loadHandler();
      });
  }

  function removeHandler() {
    api
      .delete(`/launch/${id}`)
      .then(() => {
        clearHandler();
        loadHandler();
        changeShowedState();
        return toast.success("Despesa excluida com sucesso!");
      })
      .catch(() => {
        return toast.error("Erro ao excluir despesa.");
      });
  }

  useEffect(() => {
    loadHandler();
  }, []);

  return (
    <Container>
      <HeaderBar />
      {!createExpense && (
        <FormContent
          hideSave
          newHandler={() => createForm(null, false)}
          reloadHandler={loadHandler}
        >
          <DataTableContent
            title="Movimentação de Despesas"
            data={data}
            columns={columns}
            filterColumns={filtro}
          />
        </FormContent>
      )}
      {createExpense && (
        <FormContent
          hideNew
          hideReload
          showReturn
          edit={editando}
          returnHandler={() => createForm(null, false)}
          saveHandler={() => saveHandler()}
          editHandler={() => editHandler()}
        >
          <Form title={`${editando ? "Editar" : "Criar"} Despesa`}>
            <TextInput
              name_field="Descrição"
              name_placeholder="ex.: Mercado, Conta de luz ..."
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              param="description"
              errors={errors}
            />
            <DatePicker
              name_field="Data de Lançamento"
              value={launchDate}
              setState={setLaunchDate}
              param="date_launch"
              errors={errors}
            />
            <SelectOption
              name_field="Categoria"
              options={categoryOption}
              value={category}
              onChange={(event) => setCategory(parseInt(event.target.value))}
              param="category_id"
              errors={errors}
            />
            <SelectOption
              name_field="Classificação"
              options={classificationOption}
              value={classification}
              onChange={(event) =>
                setClassification(parseInt(event.target.value))
              }
              param="classification_id"
              errors={errors}
            />
            <SelectOption
              name_field="Banco"
              options={bankOption}
              value={bank}
              onChange={(event) => setBank(parseInt(event.target.value))}
              param="bank_id"
              errors={errors}
            />
            <DoubleInput
              name_field="Valor Gasto"
              prefix="R$ "
              value={valueMask}
              setState={setValue}
              setMask={setValueMask}
              param="value"
              errors={errors}
            />
            <SelectOption
              name_field="Status"
              options={statusOption}
              value={status}
              onChange={(event) => setStatus(parseInt(event.target.value))}
              param="status_launch_id"
              errors={errors}
            />
            <DatePicker
              name_field="Data de Vencimento"
              value={launchVencimentDate}
              setState={setLaunchVencimentDate}
              param="date_venciment"
              errors={errors}
            />
          </Form>
        </FormContent>
      )}
      {deleteModal && (
        <Modal
          title="Excluir Despesa"
          message="Dessa realmente excluir despesa ?"
          saveText="Excluir"
          saveHandler={removeHandler}
          changeShowedState={changeShowedState}
        />
      )}
    </Container>
  );
};

export default ExpenseMovement;
