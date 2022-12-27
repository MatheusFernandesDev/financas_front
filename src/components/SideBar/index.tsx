import { useState, useEffect } from "react";

import api from "../../service/api";
import { doLogout } from "../../helpers/AuthHandler";
import userImg from "../../assets/images/MYFinance3.jpg";

import { FiUsers } from "react-icons/fi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { AiTwotoneBank, AiFillHome } from "react-icons/ai";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { MdSettings, MdAppRegistration } from "react-icons/md";
import { RiLogoutCircleRLine, RiPlayListAddLine } from "react-icons/ri";
import { IoNotificationsSharp, IoPersonCircleOutline } from "react-icons/io5";

import CascadeButton from "./CascadeButton";
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

interface SideBarProps {
  setBarraLateral?: any;
}

const SideBar: React.FC<SideBarProps> = ({ setBarraLateral }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

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

  async function loadUser() {
    const { data: response } = await api.get(`/user-profile`);
    setName(response.name);
    setLastName(response.last_name);
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container sidebar={sidebar}>
      <Button
        sidebar={sidebar}
        onClick={() => {
          setSidebar(!sidebar);
          setBarraLateral(!sidebar);
        }}
      >
        {sidebar ? <ArrowLeft /> : <ArrowRight />}
      </Button>
      <br />
      <LogoArea>
        <LogoIcon src={userImg} />
        <Text style={{ fontWeight: "bold" }} menu={sidebar}>
          My Finance
        </Text>
      </LogoArea>
      <br />
      <ButtonLink href="/dashboard">
        <AiFillHome style={IconStyle} />
        <Text menu={sidebar}> Início </Text>
      </ButtonLink>
      <ButtonLink href="/myprofile">
        <IoPersonCircleOutline style={IconStyle} />
        <Text menu={sidebar}>
          {`${name} ${lastName == null ? "" : lastName}`}
        </Text>
      </ButtonLink>
      <ButtonLink href="/balanceMovement">
        <FaBalanceScaleLeft style={IconStyle} />
        <Text menu={sidebar}>Balanço</Text>
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
