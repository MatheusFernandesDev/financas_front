import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

import { Container } from "./styles";
import { isLogged, doLogout } from "../../helpers/AuthHandler";

const DashBoard: React.FC = () => {
  let Logged = isLogged();
  async function handleLogout() {
    doLogout();
    window.location.href = "/";
  }

  return (
    <Container>
      {Logged && (
        <>
          <button>
            <AiOutlineLogout onClick={handleLogout} />
          </button>
        </>
      )}
    </Container>
  );
};

export default DashBoard;
