import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";

import api from "../../../service/api";
import useQuery from "../../../helpers/useQuery";

import { Container } from "../../../App.styles";

import Modal from "../../../components/Modal";
import SideBar from "../../../components/Sidebar";
import TextInput from "../../../components/TextInput";
import Form from "../../../components/FormContent/Form";
import DatePicker from "../../../components/DatePicker";
import DoubleInput from "../../../components/DoubleInput";
import FormContent from "../../../components/FormContent";
import SelectOption from "../../../components/SelectOption";
import DataTableContent from "../../../components/DataTableContent";
import ButtonActions from "../../../components/DataTableContent/ButtonActions";

import { ColumnTitle } from "../../../components/DataTableContent/styles";

import { MdModeEditOutline, MdDelete } from "react-icons/md";

const BalanceMovement: React.FC = () => {
  const { edit } = useQuery();
  const columns = [
    {
      name: <ColumnTitle> Descrição </ColumnTitle>,
      selector: "",
      center: true,
    },
    {
      name: <ColumnTitle> Data de Lançamento </ColumnTitle>,
      cell: "",
      center: true,
    },
    {
      name: <ColumnTitle> Tipo de Movimento </ColumnTitle>,
      selector: "",
      center: true,
    },
    {
      name: <ColumnTitle> Categoria </ColumnTitle>,
      selector: "",
      center: true,
    },
    {
      name: <ColumnTitle> Classificação </ColumnTitle>,
      selector: "",
      center: true,
    },
    {
      name: <ColumnTitle> Banco </ColumnTitle>,
      selector: "",
      center: true,
    },
    {
      name: <ColumnTitle> Valor </ColumnTitle>,
      center: true,
    },
    {
      name: <ColumnTitle> Data de Vencimento </ColumnTitle>,
      cell: "",
      center: true,
    },
    {
      name: <ColumnTitle> Status </ColumnTitle>,
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
              children={<MdModeEditOutline data-tip="Editar Despesa" size={20} color="black" />}
            />
            <ButtonActions
              children={<MdDelete data-tip="Excluir Despesa" size={20} color="black" />}
            />
          </>
        )
      }
    },
  ];
  // DATA
  const [data, setData] = useState([]);
  const [categoryOption, setCategoryOption] =  useState([]);
  const [classificationOption, setClassificationOption] =  useState([]);
  const [bankOption, setBankOption] =  useState([]);
  const [statusOption, setStatusOption] =  useState([]);
  // CREATE
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<number>(-1);
  const [classification, setClassification] = useState<number>(-1);
  const [bank, setBank] = useState<number>(-1);
  const [value, setValue] = useState<number>(0);
  const [valueMask, setValueMask] = useState<string>("");
  const [status, setStatus] = useState<number>(-1);
  const [launchDate, setLaunchDate] = useState<Date | null | undefined>(null)
  //
  const [editParam, setEditParam] = useState<boolean | string>(edit);
  const [errors, setErrors] =  useState([]);
  const [createBalance, setCreateBalance] = useState<boolean>(false);

  function createForm(edit: boolean) {
    setCreateBalance(!createBalance)
  }

  async function loadHandler() {
    try {
      const { data: responseLaunch } = await api.get(`/launchs`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseCategorys } = await api.get(`/categorys`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseClassifications } = await api.get(`/classifications`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseBank } = await api.get(`/bank`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
      const { data: responseStatus } = await api.get(`/status-launchs`, {
        validateStatus: (status) => status == 200 || status === 204,
      });
  
      setData(responseLaunch);
      if(responseCategorys.length > 0) {
        let formatCategory = responseCategorys.map((element: { id: number; description: string }) => {
          return {
            id: element.id,
            name: element.description
          }
        });
        setCategoryOption(formatCategory);
      }
      if(responseClassifications.length > 0) {
        let formatClassification = responseClassifications.map((element: { id: number; description: string }) => {
          return {
            id: element.id,
            name: element.description
          }
        });
        setClassificationOption(formatClassification);
      }
      if(responseBank.length > 0) {
        let formatBank = responseBank.map((element: { id: number; name_bank: string }) => {
          return {
            id: element.id,
            name: element.name_bank
          }
        });
        setBankOption(formatBank);
      }
      if(responseStatus.length > 0) {
        let formatStatus = responseStatus.map((element: { id: number; description: string }) => {
          return {
            id: element.id,
            name: element.description
          }
        });
        setStatusOption(formatStatus);
      }
    } catch {
      return toast.error("Erro ao carregar dados.");
    }
  }

  useEffect(() => {
    loadHandler();
    if(editParam == "true") {
      setCreateBalance(true);
    }
  }, [editParam]);

  return (
    <Container>
        <SideBar/>
        {!createBalance &&
          <FormContent hideSave newHandler={() => createForm(false)} >
              <DataTableContent
                  title="Balanço das Movimentações"
                  data={data}
                  columns={columns}
              />
          </FormContent>
        }
        {createBalance &&
          <FormContent 
            hideNew 
            hideReload 
            showReturn 
            returnHandler={() => createForm(false)}
          >
            <Form title="Criar Despesa">
              <TextInput
                name_field="Descrição"
                name_placeholder="ex.: Mercado, Conta de luz ..."
                value={description}
                onChange={event => setDescription(event.target.value)}
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
                onChange={event => setCategory(parseInt(event.target.value))}
              />
              <SelectOption
                name_field="Classificação"
                options={classificationOption}
                value={classification}
                onChange={event => setClassification(parseInt(event.target.value))}
              />
              <SelectOption
                name_field="Banco"
                options={bankOption}
                value={bank}
                onChange={event => setBank(parseInt(event.target.value))}
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
                onChange={event => setStatus(parseInt(event.target.value))}
              />
            </Form>
          </FormContent>
        }
    </Container>
  );
};

export default BalanceMovement;
