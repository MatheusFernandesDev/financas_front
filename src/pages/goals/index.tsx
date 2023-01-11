import React, { useState } from "react";
import { Container, FormContainer } from "../../App.styles";
import Controls from "../../components/Controls";
import DashboardHeaderContent from "../../components/DashboardHeaderContent";
import DataTableContent from "../../components/DataTableContent";
import FormContent from "../../components/FormContent";
import HeaderBar from "../../components/HeaderBar";

const Goals: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <Container>
      <HeaderBar setBarraLateral={setSidebar} />
      <DashboardHeaderContent>
        <Controls sidebar={sidebar} />
        <FormContent>
          <DataTableContent
            title={"Metas"}
            columns={undefined}
            data={undefined}
          ></DataTableContent>
        </FormContent>
      </DashboardHeaderContent>
    </Container>
  );
};

export default Goals;
