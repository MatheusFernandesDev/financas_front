import { FunctionComponent } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

import financia_logo from "../../assets/MYFinance2.png";
import financia_logo_mini from "../../assets/MYFinance3.png";

import { doLogout } from "../../helpers/AuthHandler";

import { Container, LogoImage, IconsArea, PerfilIcon, ConfigIcon, LogoutIcon } from "./styles";

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
      <Link to="/dashboard">
        <LogoImage src={window.innerWidth > 1023 ? financia_logo : financia_logo_mini} />
      </Link>
      <IconsArea>
          {!hideProfile &&
            <>
              <ReactTooltip effect="solid" place="bottom" multiline={true} delayShow={500}/>
              <PerfilIcon data-tip="Perfil" onClick={handleProfile}/> 
            </>
          }
          {!hideConfig &&
            <> 
              <ReactTooltip effect="solid" place="bottom" multiline={true} delayShow={500}/>
              <ConfigIcon data-tip="Configuração" onClick={handleConfig}/> 
            </>
          }
          <ReactTooltip effect="solid" place="bottom" multiline={true} delayShow={500}/>
          <LogoutIcon data-tip="Sair" onClick={handleLogout} />
      </IconsArea>
    </Container>
  );
};
  
  export default Header;
  