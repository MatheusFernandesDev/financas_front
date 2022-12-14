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

const RevenueMovement: React.FC = () => {
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
  const [categoryOption, setCategoryOption] =  useState([]);
  const [classificationOption, setClassificationOption] =  useState([]);
  const [bankOption, setBankOption] =  useState([]);
  const [statusOption, setStatusOption] =  useState([]);
  // CREATE
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<number>(-1);
  const [classification, setClassification] = useState<number>(-1);
  const [bank, setBank] = useState<number>(-1);
  const [value, setValue] = useState<number>(-1);
  const [status, setStatus] = useState<number>(-1);
  //
  const [createRevenue, setCreateRevenue] = useState<boolean>(false);

  function createForm(edit: boolean) {
    setCreateRevenue(!createRevenue);
    if(!edit) {}
  }

  return (
    <Container>
        <SideBar/>
        {
          <FormContent hideSave>
              <DataTableContent
                  title="Movimentação de Receitas"
                  data={data}
                  columns={columns}
              />
          </FormContent>
        }
        {createRevenue &&
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
              {/* <DatePicker/> */}
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
              {/* <DoubleInput/> */}
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

export default RevenueMovement;
