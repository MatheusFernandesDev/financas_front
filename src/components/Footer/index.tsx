import React from "react";
import { Footer, Link } from "./styles";

const FooterComponent: React.FC = () => {
    return (
        <Footer>
			Desenvolvido por&nbsp;
			<Link href="http://www.com.br/" target="_blank">
				{/* NOME DA EMPRESA (NO CASO SERIA O NOSSO) */}
			</Link>
		</Footer>
    )
}

export default FooterComponent;