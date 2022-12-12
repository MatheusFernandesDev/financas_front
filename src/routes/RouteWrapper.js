import { Navigate } from "react-router-dom";
import { isLogged } from "../helpers/AuthHandler";

const Private = ({ Component }) => {
  const logged = isLogged();

  return logged ? <Component /> : <Navigate to={"/"} />;
};

export default Private;
