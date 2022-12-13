import React from "react";
import { Button } from "./styles";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, className, click }) => {
  return <Button className={className} onClick={click}>{children}</Button>;
}

export default ButtonComponent;
