import React from "react";
import { Footer, Link } from "./styles";
import { MdComputer } from "react-icons/md";

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <MdComputer /> Desenvolvido por&nbsp;
      <Link href="http://www.com.br/" target="_blank">
        Matheus Fernandes e Guilherme Medeiros
        {/* NOME DA EMPRESA (NO CASO SERIA O NOSSO) */}
      </Link>
    </Footer>
  );
};

export default FooterComponent;
