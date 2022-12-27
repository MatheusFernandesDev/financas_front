import React from "react";
import { Footer, Link } from "./styles";
import { MdComputer } from "react-icons/md";

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      {/* <MdComputer /> */}
      💻 Desenvolvido por&nbsp;
      <Link href="http://www.com.br/" target="_blank">
        Matheus Fernandes 
        {/* NOME DA EMPRESA (NO CASO SERIA O NOSSO) */}
      </Link>
      <div style={{fontSize: "11px", color: "#686868", margin: "0 3px 2px 3px"}}>
        e
      </div>
      <Link href="http://www.com.br/" target="_blank">
        Guilherme Medeiros 
        {/* NOME DA EMPRESA (NO CASO SERIA O NOSSO) */}
      </Link>
    </Footer>
  );
};

export default FooterComponent;
