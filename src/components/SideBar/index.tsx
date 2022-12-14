import { useState } from "react";
import ReactTooltip from "react-tooltip";

import userImg from "../../assets/images/MYFinance3.jpg";

import { MdSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoNotificationsSharp, IoPersonCircleOutline } from "react-icons/io5";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";

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
        {sidebar
          ? <ArrowLeft />
          : <ArrowRight />
        }
      </Button>
      <br/>
      <LogoArea onClick={handleDashboard}>
        <LogoIcon src={userImg} />
        <Text style={{fontWeight: "bold"}} menu={sidebar} >
          My Finance
        </Text>
      </LogoArea>
      <br/>
      <ButtonLink href="/myprofile">
        <IoPersonCircleOutline style={IconStyle} />
        <Text menu={sidebar} >
          Meu Perfil
        </Text>
      </ButtonLink>
      <ButtonLink href="/expenseMovement">
        <GiPayMoney style={IconStyle} />
        <Text menu={sidebar} >
          Movimentação de Despesa
        </Text>
      </ButtonLink>
      <ButtonLink href="/revenueMovement">
        <GiReceiveMoney style={IconStyle} />
        <Text menu={sidebar} >
          Movimentação de Receita
        </Text>
      </ButtonLink>
      <CascadeButton 
        title="Configuração"
        Icon={MdSettings}
        menu={sidebar}
      >
        <ButtonLink href="/users" style={{marginTop: "5px"}}>
          <FiUsers style={subIconStyle} />
          <Text menu={sidebar}>
            Usuários
          </Text>
        </ButtonLink>
      </CascadeButton>
      <LogoutButton onClick={handleLogout}>
        <RiLogoutCircleRLine style={IconStyle} />
        <Text menu={sidebar} >
          Sair
        </Text>
      </LogoutButton>
    </Container>
  );
}

export default SideBar;