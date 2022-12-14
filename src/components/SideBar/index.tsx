import { useState } from "react";
import ReactTooltip from "react-tooltip";

import userImg from "../../assets/images/MYFinance3.jpg";

import { MdSettings, MdAppRegistration } from "react-icons/md";
import { RiLogoutCircleRLine, RiPlayListAddLine } from "react-icons/ri";
import { IoNotificationsSharp, IoPersonCircleOutline } from "react-icons/io5";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { AiTwotoneBank } from "react-icons/ai";

import {
  Container,
  ButtonLink,
  Text,
  Button,
  LogoutButton,
  LogoArea,
  LogoIcon,
  ArrowLeft,
  ArrowRight,
} from "./styles";
import CascadeButton from "./CascadeButton";
import { doLogout } from "../../helpers/AuthHandler";

const SideBar: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const name = localStorage.getItem("name");
  const last_name = localStorage.getItem("last_name");

  const IconStyle = {
    width: "25px",
    height: "25px",
  };

  const subIconStyle = {
    width: "20px",
    height: "20px",
  };

  function handleLogout() {
    doLogout();
    window.location.href = "/";
  }

  function handleDashboard() {
    window.location.href = "/dashboard";
  }

  return (
    <Container sidebar={sidebar}>
      <Button onClick={() => setSidebar(!sidebar)}>
        {sidebar ? <ArrowLeft /> : <ArrowRight />}
      </Button>
      <br />
      <LogoArea onClick={handleDashboard}>
        <LogoIcon src={userImg} />
        <Text style={{ fontWeight: "bold" }} menu={sidebar}>
          My Finance
        </Text>
      </LogoArea>
      <br />
      <ButtonLink href="/myprofile">
        <IoPersonCircleOutline style={IconStyle} />
        <Text menu={sidebar}> {`${name} ${last_name}`}</Text>
      </ButtonLink>
      <ButtonLink href="/expenseMovement">
        <GiPayMoney style={IconStyle} />
        <Text menu={sidebar}>Movimentação de Despesa</Text>
      </ButtonLink>
      <ButtonLink href="/revenueMovement">
        <GiReceiveMoney style={IconStyle} />
        <Text menu={sidebar}>Movimentação de Receita</Text>
      </ButtonLink>
      <CascadeButton title="Registros" Icon={MdAppRegistration} menu={sidebar}>
        <ButtonLink href="/bank" style={{ marginTop: "5px" }}>
          <AiTwotoneBank style={subIconStyle} />
          <Text menu={sidebar}>Bancos</Text>
        </ButtonLink>
        <ButtonLink href="/category" style={{ marginTop: "5px" }}>
          <RiPlayListAddLine style={subIconStyle} />
          <Text menu={sidebar}>Categorias</Text>
        </ButtonLink>
      </CascadeButton>
      <CascadeButton title="Configuração" Icon={MdSettings} menu={sidebar}>
        <ButtonLink href="/users" style={{ marginTop: "5px" }}>
          <FiUsers style={subIconStyle} />
          <Text menu={sidebar}>Usuários</Text>
        </ButtonLink>
      </CascadeButton>
      <LogoutButton onClick={handleLogout}>
        <RiLogoutCircleRLine style={IconStyle} />
        <Text menu={sidebar}>Sair</Text>
      </LogoutButton>
    </Container>
  );
};

export default SideBar;
