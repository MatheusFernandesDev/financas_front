import React, { useEffect, useRef, useState } from "react";

import api from "../../service/api";

import { Container, FormContainer } from "../../App.styles";

import Card from "../../components/Card";
import Loading from "../../components/Loading";
import FormContent from "../../components/FormContent";
import { Box } from "./styles";
import Controls from "../../components/Controls";
import { device } from "../../styles/devices";
import Button from "../../components/Button";
import fileDownload from "js-file-download";
import HeaderBar from "../../components/HeaderBar";
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
    setData(response);
  }

  // async function download() {
  //   const { data: response } = await api.get("/download", {
  //     responseType: "blob",
  //   });
  //   console.log(response);
  //   fileDownload(response, "teste.pdf");
  // }

  useEffect(() => {
    loadHandler();
  }, []);

  return (
    <Container>
      <HeaderBar/>
      <Controls
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      {/* <FormContent>
        <Button className="secondary" height="35px" click={download}>
          DOWNLOAD
        </Button>
      </FormContent> */}

      {/* <Box>
        <Card> {} </Card>
      </Box> */}
    </Container>
  );
};

export default DashBoard;
