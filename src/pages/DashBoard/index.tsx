import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";

import { Container } from "./styles";
import { isLogged, doLogout } from "../../helpers/AuthHandler";
import Loading from "../../components/Loading";

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
      <Loading />
    </Container>
  );
};

export default DashBoard;
