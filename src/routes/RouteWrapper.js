import { Navigate } from "react-router-dom";
import { isLogged } from "../helpers/AuthHandler";

const Private = ({ Component, defaultC }) => {
  const logged = isLogged();

  if(defaultC){
    return logged ? <Navigate to={"/dashboard"} /> : <Component />;
  }

  return logged ? <Component /> : <Navigate to={"/"} />;
};

export default Private;
