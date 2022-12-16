import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

import api from "../../../service/api";

import { Container } from "../../../App.styles";

import Modal from "../../../components/Modal";
import SideBar from "../../../components/Sidebar";
import TextInput from "../../../components/TextInput";
import Form from "../../../components/FormContent/Form";
import DatePicker from "../../../components/DatePicker";
import FormContent from "../../../components/FormContent";
import DoubleInput from "../../../components/DoubleInput";
import SelectOption from "../../../components/SelectOption";
import DataTableContent from "../../../components/DataTableContent";

import { ColumnTitle } from "../../../components/DataTableContent/styles";

import { MdDelete } from "react-icons/md";

const ExpenseMovement: React.FC = () => {
  const columns = [
    {
      name: <ColumnTitle> Descrição </ColumnTitle>,
      selector: "description",
      center: true,
    },
    {
      name: <ColumnTitle> Data de Lançamento </ColumnTitle>,
      cell: (row: any) =>  row.date_launch ? moment(row.date_launch).format("DD/MM/yyyy") : "",
      center: true,
    },
    {
      name: <ColumnTitle> Categoria </ColumnTitle>,
      // cell: "category_id",
      center: true,
    },
    {
      name: <ColumnTitle> Classificação </ColumnTitle>,
      cell: (row: any) => {
        return (
          row.classification_id == 1 && "Despesa Fixa" ||
          row.classification_id == 2 && "Despesa Variável"
        );
      },
      center: true,
    },
    {
      name: <ColumnTitle> Banco </ColumnTitle>,
      // cell: "bank_id",
      center: true,
    },
    {
      name: <ColumnTitle> Valor </ColumnTitle>,
      cell: (row: any) => `R$ ${row.value.toFixed(2)}`,
      center: true,
    },
    {
      name: <ColumnTitle> Status </ColumnTitle>,
      cell: (row: any) => {
        return (
          row.status_launch_id == 1 && "Aberto" ||
          row.status_launch_id == 2 && "Pendente" ||
          row.status_launch_id == 3 && "Pago" ||
          row.status_launch_id == 4 && "Atrasado"
        );
      },
      center: true,
    },
    {
      name: <ColumnTitle> Ações </ColumnTitle>,
      center: true,
    },
  ];
  // DATA
  const [data, setData] = useState([]);
  const [categoryOption, setCategoryOption] = useState([]);
  const [classificationOption, setClassificationOption] = useState([]);
  const [bankOption, setBankOption] = useState([]);
  const [statusOption, setStatusOption] = useState([]);
  // CREATE
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<number>(-1);
  const [classification, setClassification] = useState<number>(-1);
  const [bank, setBank] = useState<number>(-1);
  const [movement, setMovement] = useState<number>(-1);
  const [value, setValue] = useState<number>(0);
  const [valueMask, setValueMask] = useState<string>("");
  const [status, setStatus] = useState<number>(-1);
  const [launchDate, setLaunchDate] = useState<Date | null | undefined>(null);
  const [launchVencimentDate, setLaunchVencimentDate] = useState<
    Date | null | undefined
  >(null);
  //
  const [errors, setErrors] = useState([]);
  const [createExpense, setCreateExpense] = useState<boolean>(false);

  function clearHandler() {
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
  }

  function createForm(edit: boolean) {
    clearHandler();
    setCreateExpense(!createExpense);
    if (!edit) {
    }
  }

  async function loadHandler() {
    try {
      const { data: responseLaunch } = await api.get(`/launchs`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseCategorys } = await api.get(`/category`, {
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
        description: description,
        category: category,
        classification: classification,
        bank: bank,
        value: value,
        status: status,
        launchDate: launchDate,
        launchVencimentDate: launchVencimentDate,
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
  useEffect(() => {
    loadHandler();
  }, []);
  return (
    <Container>
      <SideBar />
      {!createExpense && (
        <FormContent
          hideSave
          newHandler={() => createForm(false)}
          reloadHandler={loadHandler}
        >
          <DataTableContent
            title="Movimentação de Despesas"
            data={data}
            columns={columns}
          />
        </FormContent>
      )}
      {createExpense && (
        <FormContent
          hideNew
          hideReload
          showReturn
          returnHandler={() => createForm(false)}
          saveHandler={() => saveHandler()}
        >
          <Form title="Criar Despesa">
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
            />
            <SelectOption
              name_field="Categoria"
              options={categoryOption}
              value={category}
              onChange={(event) => setCategory(parseInt(event.target.value))}
            />
            <SelectOption
              name_field="Classificação"
              options={classificationOption}
              value={classification}
              onChange={(event) =>
                setClassification(parseInt(event.target.value))
              }
            />
            <SelectOption
              name_field="Banco"
              options={bankOption}
              value={bank}
              onChange={(event) => setBank(parseInt(event.target.value))}
            />
            <DoubleInput
              name_field="Valor Gasto"
              prefix="R$ "
              value={valueMask}
              setState={setValue}
              setMask={setValueMask}
            />
            <SelectOption
              name_field="Status"
              options={statusOption}
              value={status}
              onChange={(event) => setStatus(parseInt(event.target.value))}
            />
            <DatePicker
              name_field="Data de Vencimento"
              value={launchVencimentDate}
              setState={setLaunchVencimentDate}
            />
          </Form>
        </FormContent>
      )}
    </Container>
  );
};

export default ExpenseMovement;
