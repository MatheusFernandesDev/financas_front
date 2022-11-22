import { FunctionComponent } from "react";
import ReactTooltip from "react-tooltip";

import { doLogout } from "../../helpers/AuthHandler";

import { Container, IconsArea, PerfilIcon, ConfigIcon, LogoutIcon } from "./styles";

interface HeaderProps {
}

const Header: FunctionComponent<HeaderProps> = (props) => {
  function handleLogout() {
    doLogout();
    window.location.href = "/";
  }
  function handleProfile() {
    window.location.href = "/myprofile";
  }
  function handleConfig() {
    window.location.href = "/config";
  }
    return (
      <Container>
        <div style={{color: "white"}}>LOGO</div>
        <IconsArea>
            <ReactTooltip effect="solid" place="bottom" multiline={true} delayShow={500}/>
            <PerfilIcon data-tip="Perfil" onClick={handleProfile} /> 
            <ConfigIcon data-tip="Configuração" onClick={handleConfig} />
            <LogoutIcon data-tip="Sair" onClick={handleLogout} />
        </IconsArea>
      </Container>
    );
  };
  
  export default Header;
  