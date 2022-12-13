import { useState } from "react";
import ReactTooltip from "react-tooltip";

import userImg from "../../assets/images/MYFinance3.jpg";

import { MdSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoNotificationsSharp, IoPersonCircleOutline } from "react-icons/io5";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

import { 
  Container, 
  Content, 
  Button, 
  ClosedSideBar, 
  OpenSideBar 
} from "./styles";

const SideBar: React.FC = () => {
  const [sideBar, setSideBar] = useState(false);

  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
  }
  
  function handleDashboard() {
    window.location.href = "/dashboard";
  }
  return (
    <Container>
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <Button onClick={handleChangeSideBar}>
                <BsArrowRight />
              </Button>
              <img src={userImg} alt="My Finance" onClick={handleDashboard} style={{cursor: "pointer"}}/>

              {/* Links principais do app */}
              <ul>
                <ReactTooltip className="width" effect="solid" place="right" multiline={true} delayShow={500} />
                <a href="/myprofile" data-tip="Meu Perfil">
                  <IoPersonCircleOutline />
                </a>
                <a href="/expenseMovement" data-tip="Movimentação de Despesa">
                  <GiPayMoney />
                </a>
                <a href="/revenueMovement" data-tip="Movimentação de Receita">
                  <GiReceiveMoney />
                </a>
                <a href="/configuration" data-tip="Configuração">
                  <MdSettings />
                </a>
                <a href="/" data-tip="Sair">
                  <RiLogoutCircleRLine />
                </a>
              </ul>
            </nav>
            {/* <div>
              // Icones que pode não ser tão principais no app
              <ul>
                <a href="/" title="Notificações">
                  <IoNotificationsSharp />
                </a>
                <a href="/" title="Configurações">
                  <MdSettings />
                </a>
                <a href="/" title="Sair da conta">
                  <RiLogoutCircleRLine />
                </a>
              </ul>
            </div> */}
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <span >
                  <Button onClick={handleChangeSideBar}>
                    <BsArrowLeft />
                  </Button>
                </span>
                <div onClick={handleDashboard} style={{cursor: "pointer"}}>
                  <img src={userImg} alt="My Finance"/>
                  <h1>My Finance</h1>
                </div>

                {/* Icones principais do app */}
                <ul>
                  <a href="/myprofile">
                    <IoPersonCircleOutline />
                    <p>Meu Perfil</p>
                  </a>
                <a href="/">
                  <GiPayMoney />
                    <p>Movimentação de Despesa</p>
                </a>
                <a href="/">
                  <GiReceiveMoney />
                    <p>Movimentação de Receita</p>
                </a>
                  <a href="/configuration">
                    <MdSettings />
                    <p>Configuração</p>
                  </a>
                  <a href="/">
                    <RiLogoutCircleRLine />
                    <p>Sair</p>
                  </a>
                </ul>
              </nav>
              {/* <div>
                // Icones que pode não ser tão principais no app
                <ul>
                  <a href="/">
                    <IoNotificationsSharp />
                    <p>Notificações</p>
                  </a>
                  <a href="/">
                    <MdSettings />
                    <p>Configurações</p>
                  </a>
                  <a href="/">
                    <RiLogoutCircleRLine />
                    <p> Sair da conta </p>
                  </a>
                </ul>
              </div> */}
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}

export default SideBar;