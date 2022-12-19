import React, { useEffect, useRef, useState } from "react";

import api from "../../service/api";

import { Container } from "../../App.styles";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import SideBar from "../../components/Sidebar";
import FormContent from "../../components/FormContent";
import { Box } from "./styles";
import Controls from "../../components/Controls";
import { device } from "../../styles/devices";
// import DataTableContent from "../../components/DataTableContent";

// import { ColumnTitle } from "../../components/DataTableContent/styles";
// import ButtonActions from "../../components/DataTableContent/ButtonActions";

// import { MdDelete } from "react-icons/md";
// import { FaUserEdit } from "react-icons/fa";


const DashBoard: React.FC = () => {
  // DATA
  const [data, setData] = useState([]);
  // FILTER
  const [startDate, setStartDate] = useState<Date | null | undefined>(null);
  const [endDate, setEndDate] = useState<Date | null | undefined>(null);

  async function loadHandler() {
    const { data: response } = await api.get(`/balance-month`);
    setData(response)
  }

  useEffect(() => {
    loadHandler();
  }, []);

  return (
    <Container>
      <SideBar/>
      <Controls
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      {/* <Box>
        <Card> {} </Card>
      </Box> */}
    </Container>
  );
};

export default DashBoard;
