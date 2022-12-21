import React, { useEffect, useRef, useState } from "react";
import fileDownload from "js-file-download";
import ReactTooltip from "react-tooltip";
import { toast } from "react-toastify";
import moment from "moment";

import api from "../../service/api";

import { Container } from "../../App.styles";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Controls from "../../components/Controls";
import HeaderBar from "../../components/HeaderBar";
import FormContent from "../../components/FormContent";
import DataTableContent from "../../components/DataTableContent";

import ButtonActions from "../../components/DataTableContent/ButtonActions";
import {
  ColumnTitle,
  StyledStatus,
} from "../../components/DataTableContent/styles";

import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { ContainerArea } from "./styles";
import DashboardHeaderContent from "../../components/DashboardHeaderContent";
// import { FaUserEdit } from "react-icons/fa";

// import { Box } from "./styles";

const DashBoard: React.FC = () => {
  const columns = [
    {
      name: <ColumnTitle> Descrição </ColumnTitle>,
      selector: "descricao",
      center: true,
    },
    {
      name: <ColumnTitle> Data de Lançamento </ColumnTitle>,
      selector: "data_inicial",
      center: true,
    },
    {
      name: <ColumnTitle> Tipo de Movimento </ColumnTitle>,
      selector: "movimentacao",
      center: true,
    },
    {
      name: <ColumnTitle> Categoria </ColumnTitle>,
      selector: "categoria",
      center: true,
    },
    {
      name: <ColumnTitle> Classificação </ColumnTitle>,
      selector: "classificacao",
      center: true,
    },
    {
      name: <ColumnTitle> Banco </ColumnTitle>,
      selector: "banco",
      center: true,
    },
    {
      name: <ColumnTitle> Valor </ColumnTitle>,
      center: true,
      cell: (row: any) =>
        `R$ ${row.valor ? row.valor.toFixed(2).replace(".", ",") : "0,00"}`,
    },
    {
      name: <ColumnTitle> Data de Vencimento </ColumnTitle>,
      selector: "data_vencimento",
      center: true,
    },
    {
      name: <ColumnTitle> Status </ColumnTitle>,
      center: true,
      cell: (row: any) => {
        return (
          (row.status == 1 && <StyledStatus> Aberto </StyledStatus>) ||
          (row.status == 2 && (
            <StyledStatus className="warn"> Pendente </StyledStatus>
          )) ||
          (row.status == 3 && (
            <StyledStatus className="success"> Pago </StyledStatus>
          )) ||
          (row.status == 4 && (
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
              // click={() => createForm(row, true)}
              children={
                <MdModeEditOutline
                  data-tip="Editar Despesa"
                  size={20}
                  color="black"
                />
              }
            />
            <ButtonActions
              // click={() => openDelete(row.id)}
              children={
                <MdDelete data-tip="Excluir Despesa" size={20} color="black" />
              }
            />
          </>
        );
      },
    },
  ];

  const filters = [
    { name: "Descrição", id: "descricao" },
    { name: "Banco", id: "banco" },
  ];
  // DATA
  const [data, setData] = useState([]);
  // FILTER
  const [month, setMonth] = useState<number>(-1);
  const [startDate, setStartDate] = useState<Date | null | undefined>(null);
  const [endDate, setEndDate] = useState<Date | null | undefined>(null);
  const [filtro, setFiltro] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);
  //

  function changeFilter() {
    setFiltro(!filtro);
    if (!filtro) {
      setMonth(-1);
    }
    if (filtro) {
      setStartDate(null);
      setEndDate(null);
    }
  }

  async function loadHandler() {
    try {
      const { data: response } = await api.get(
        `/balance-month?month=${month}&dateStart=${startDate}&dateEnd=${endDate}`
      );
      setData(response.data);
    } catch {
      return toast.error("Erro ao carregar dados");
    }
  }

  async function download() {
    try {
      const { data: response } = await api.get("/download", {
        responseType: "blob",
      });

      let dataAtual = moment(new Date()).format("DDMMyyyyHHmm");
      fileDownload(response, `Relatório de Lançamento - ${dataAtual}.pdf`);

      return toast.success("Download feito com sucesso!");
    } catch {
      return toast.error("Erro ao fazer download");
    }
  }

  useEffect(() => {
    loadHandler();
  }, [month, startDate, endDate]);

  useEffect(() => {
    if (!filtro) {
      setMonth(-1);
    }
    if (filtro) {
      setStartDate(null);
      setEndDate(null);
    }
  }, [filtro]);

  return (
    <Container>
      <HeaderBar setBarraLateral={setSidebar} />
      <DashboardHeaderContent>
        <Controls
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          month={month}
          monthState={setMonth}
          monthFilter
          filterFunction={changeFilter}
          filtro={filtro}
          sidebar={sidebar}
        />
        <FormContent newFirst>
          <DataTableContent
            data={data}
            columns={columns}
            filterColumns={filters}
          />
          {/* <Button className="secondary" height="35px" click={download}>
            DOWNLOAD
          </Button> */}
        </FormContent>
      </DashboardHeaderContent>

      {/* <Box>
        <Card> {} </Card>
      </Box> */}
    </Container>
  );
};

export default DashBoard;
