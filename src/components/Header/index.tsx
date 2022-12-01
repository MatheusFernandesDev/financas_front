import { FunctionComponent } from "react";
import ReactTooltip from "react-tooltip";

import { doLogout } from "../../helpers/AuthHandler";

import { Container, IconsArea, PerfilIcon, ConfigIcon, LogoutIcon } from "./styles";

interface HeaderProps {
  hideProfile?: boolean;
  hideConfig?: boolean; 
}

const Header: FunctionComponent<HeaderProps> = ({
  hideProfile,
  hideConfig
}) => {
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
            {!hideProfile 
              ? <>
                  <ReactTooltip effect="solid" place="bottom" multiline={true} delayShow={500}/>
                  <PerfilIcon data-tip="Perfil" onClick={handleProfile}/> 
                </>
              : <></>
            }
            {!hideConfig 
              ? <> 
                  <ReactTooltip effect="solid" place="bottom" multiline={true} delayShow={500}/>
                  <ConfigIcon data-tip="Configuração" onClick={handleConfig}/> 
                </>
              : <></>
            }
            <ReactTooltip effect="solid" place="bottom" multiline={true} delayShow={500}/>
            <LogoutIcon data-tip="Sair" onClick={handleLogout} />
        </IconsArea>
      </Container>
    );
  };
  
  export default Header;
  