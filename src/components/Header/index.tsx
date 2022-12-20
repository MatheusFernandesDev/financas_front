import { FunctionComponent, useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import userImg from "../../assets/images/MYFinance3.jpg";

import { doLogout } from "../../helpers/AuthHandler";

import CascadeButton from "../Sidebar/CascadeButton";

import { FiUsers } from "react-icons/fi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { AiTwotoneBank, AiFillHome } from "react-icons/ai";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { MdSettings, MdAppRegistration } from "react-icons/md";
import { RiLogoutCircleRLine, RiPlayListAddLine } from "react-icons/ri";
import { IoNotificationsSharp, IoPersonCircleOutline } from "react-icons/io5";

import { 
  Container, 
  LogoImage, 
  IconsArea, 
  Bars, 
  Always, 
  ButtonLink, 
  LogoutButton, 
  Text 
} from "./styles";
import api from "../../service/api";

interface HeaderProps {
  hideProfile?: boolean;
  hideConfig?: boolean; 
}

const Header: FunctionComponent<HeaderProps> = ({
  hideProfile,
  hideConfig
}) => {
  //
  const [expandBar, setExpandBar] = useState<boolean>(false);
  // USER
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  // ICON STYLES
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
    <Container showIcons={expandBar}>
      <Always>
        <Link to="/dashboard">
          <LogoImage src={userImg} />
        </Link>
        <Bars onClick={() => setExpandBar(!expandBar)}/>
      </Always>
      {expandBar &&
        <IconsArea>
          <ButtonLink href="/dashboard">
            <AiFillHome style={IconStyle} />
            <Text> Início </Text>
          </ButtonLink>
          <ButtonLink href="/myprofile">
            <IoPersonCircleOutline style={IconStyle} />
            <Text> {`${name} ${lastName == null ? "" : lastName}`}</Text>
          </ButtonLink>
          <ButtonLink href="/balanceMovement">
            <FaBalanceScaleLeft style={IconStyle} />
            <Text>Balanço</Text>
          </ButtonLink>
          <ButtonLink href="/expenseMovement">
            <GiPayMoney style={IconStyle} />
            <Text>Movimentação de Despesa</Text>
          </ButtonLink>
          <ButtonLink href="/revenueMovement">
            <GiReceiveMoney style={IconStyle} />
            <Text>Movimentação de Receita</Text>
          </ButtonLink>
          <CascadeButton title="Registros" Icon={MdAppRegistration} menu={expandBar}>
            <ButtonLink href="/bank" style={{ marginTop: "5px" }}>
              <AiTwotoneBank style={subIconStyle} />
              <Text>Bancos</Text>
            </ButtonLink>
            <ButtonLink href="/category" style={{ marginTop: "5px" }}>
              <RiPlayListAddLine style={subIconStyle} />
              <Text>Categorias</Text>
            </ButtonLink>
          </CascadeButton>
          <CascadeButton title="Configuração" Icon={MdSettings} menu={expandBar}>
            <ButtonLink href="/users" style={{ marginTop: "5px" }}>
              <FiUsers style={subIconStyle} />
              <Text>Usuários</Text>
            </ButtonLink>
          </CascadeButton>
          <LogoutButton onClick={handleLogout}>
            <RiLogoutCircleRLine style={IconStyle} />
            <Text>Sair</Text>
          </LogoutButton>
        </IconsArea>
      }
    </Container>
  );
};
  
  export default Header;
  