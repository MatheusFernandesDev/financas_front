import React, { FunctionComponent } from "react";

import Refresh from "../Refresh";

import { ButtonContainer } from "./styles";

interface ButtonProps {
    children: React.ReactNode;
    height?: string | ""; 
    width?: string | "";
    disabled?: boolean | false;
    click: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FunctionComponent<ButtonProps> = ({
    children,
    height, 
    width,
    disabled,
    click
}) => {

  return (
    <ButtonContainer height={height} width={width} onClick={click} disabled={disabled}>
        {disabled ? <Refresh/> : children}
    </ButtonContainer>
  );
};

export default Button;
