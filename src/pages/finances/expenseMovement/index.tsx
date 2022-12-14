import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../../service/api";

import { Container } from "../../../App.styles";

import Modal from "../../../components/Modal";
import SideBar from "../../../components/Sidebar";
import FormContent from "../../../components/FormContent";
import DataTableContent from "../../../components/DataTableContent";

import { ColumnTitle } from "../../../components/DataTableContent/styles";

import { MdDelete } from "react-icons/md";

const ExpenseMovement: React.FC = () => {
  const columns = [
    // {
    //   name: <ColumnTitle>  </ColumnTitle>,
    //   center: true,
    // },
    // {
    //   name: <ColumnTitle>  </ColumnTitle>,
    //   selector: "",
    //   center: true,
    // },
    // {
    //   name: <ColumnTitle>  </ColumnTitle>,
    //   center: true,
    // },
    {
      name: <ColumnTitle> Ações </ColumnTitle>,
      center: true,
    },
  ];
  //
  const [data, setData] = useState([]);

  return (
    <Container>
        <SideBar/>
        <FormContent hideSave>
            <DataTableContent
                title="Movimentação de Despesas"
                data={data}
                columns={columns}
            />
        </FormContent>
    </Container>
  );
};

export default ExpenseMovement;
