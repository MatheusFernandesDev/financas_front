import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import loading from "../../components/Loading";

import { Container } from "./styles";
import { isLogged, doLogout } from "../../helpers/AuthHandler";

const DashBoard: React.FC = () => {
  const [removeLoading, setremoveLoading] = useState(false);
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
