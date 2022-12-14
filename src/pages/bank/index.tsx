import { Container } from "../../App.styles";
import FormContent from "../../components/FormContent";
import SideBar from "../../components/Sidebar";

const Bank: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <FormContent></FormContent>
    </Container>
  );
};

export default Bank;
