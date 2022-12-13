import { useState } from "react";
import ReactTooltip from "react-tooltip";

import userImg from "../../assets/images/MYFinance3.jpg";

import { MdSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoNotificationsSharp, IoPersonCircleOutline } from "react-icons/io5";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

import { 
  Container, 
  ButtonLink, 
  Text,
  Button,
  LogoArea,
  LogoIcon,
  ArrowLeft,
  ArrowRight,
} from "./styles";
import CascadeButton from "./CascadeButton";

const SideBar: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  
	const subIconStyle = {
		width: "25px",
		height: "25px",
	};

  return (
    <Container sidebar={sidebar}>
      <Button onClick={() => setSidebar(!sidebar)}>
        {sidebar
          ? <ArrowLeft />
          : <ArrowRight />
        }
      </Button>
      <br/>
      <LogoArea>
        <LogoIcon src={userImg} />
        <Text style={{fontWeight: "bold"}} sub={true} menuActived={false} /*menu*/>
          My Finance
        </Text>
      </LogoArea>
      <br/>
      <ButtonLink href="/">
        <IoPersonCircleOutline style={subIconStyle} />
        <Text sub={true} menuActived={false} /*menu*/>
          Meu Perfil
        </Text>
      </ButtonLink>
      <CascadeButton 
        title="Configuração"
        Icon={MdSettings}
      >
        <></>
      </CascadeButton>
    </Container>
  );
}

export default SideBar;