import React from "react";
import { Button } from "./styles";

interface ButtonProps {
  style?: any;
  children?: React.ReactNode;
  className?: string;
  click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonComponent: React.FC<ButtonProps> = ({ style, children, className, click }) => {
  return <Button style={style} className={className} onClick={click}>{children}</Button>;
}

export default ButtonComponent;
