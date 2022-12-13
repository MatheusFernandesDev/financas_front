import React, { useEffect, useRef, useState } from "react";

import api from "../../service/api";

import { Container } from "../../App.styles";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import SideBar from "../../components/SideBar";
import FormContent from "../../components/FormContent";
// import DataTableContent from "../../components/DataTableContent";

// import { ColumnTitle } from "../../components/DataTableContent/styles";
// import ButtonActions from "../../components/DataTableContent/ButtonActions";

// import { MdDelete } from "react-icons/md";
// import { FaUserEdit } from "react-icons/fa";


const DashBoard: React.FC = () => {

  return (
    <Container>
      <SideBar/>
      <FormContent>
        {/* <DataTableContent
          title="Balanço"
          data={}
          column={}
        /> */}
      </FormContent>
    </Container>
  );
};

export default DashBoard;
