import React from "react";
import Refresh from "../../Refresh";
import { Button } from "./styles";

interface ButtonProps {
  style?: any;
  disabled?: boolean | false;
  children?: React.ReactNode;
  className?: string;
  click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonComponent: React.FC<ButtonProps> = ({ style, children, disabled, className, click }) => {
  return (
    <Button style={style} className={className} disabled={disabled} onClick={click}>
      {disabled ? <Refresh/> : children}
    </Button>
  );
}

export default ButtonComponent;
