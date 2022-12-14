import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../../service/api";

import { Container } from "../../../App.styles";

import Modal from "../../../components/Modal";
import SideBar from "../../../components/Sidebar";
import TextInput from "../../../components/TextInput";
import Form from "../../../components/FormContent/Form";
import FormContent from "../../../components/FormContent";
import SelectOption from "../../../components/SelectOption";
import DataTableContent from "../../../components/DataTableContent";

import { ColumnTitle } from "../../../components/DataTableContent/styles";

import { MdDelete } from "react-icons/md";
import DoubleInput from "../../../components/DoubleInput";
import DatePicker from "../../../components/DatePicker";

const BalanceMovement: React.FC = () => {
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
    },
  ];
  // DATA
  const [data, setData] = useState([]);

  async function loadHandler() {
    const { data: responseLaunch } = await api.get(`/launchs`, {
      validateStatus: (status) => status == 200 || status === 204,
    });

    setData(responseLaunch);
  }

  useEffect(() => {
    loadHandler();
  }, []);

  return (
    <Container>
        <SideBar/>
        <FormContent hideSave>
            <DataTableContent
                title="Balanço das Movimentações"
                data={data}
                columns={columns}
            />
        </FormContent>
    </Container>
  );
};

export default BalanceMovement;
