import { Container } from "../../App.styles";
import FormContent from "../../components/FormContent";
import SideBar from "../../components/Sidebar";

const Category: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <FormContent></FormContent>
    </Container>
  );
};

export default Category;
