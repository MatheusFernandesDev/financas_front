import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import { isLogged } from "../../helpers/AuthHandler";

import Header from "../../components/Header";

import { Container } from "./styles";

const DashBoard: React.FC = () => {
  let Logged = isLogged();
	const link_ref = useRef<HTMLAnchorElement>(null); 
  
  useEffect(() => {
    if(Logged == false) {
      if(link_ref.current) {
        link_ref.current.click();
      }
    }
	}, [Logged]);

  return (
    <Container>
      <Header/>
      <NavLink ref={link_ref} to="/" />
    </Container>
  );
};

export default DashBoard;
