import React from "react";
import { Button } from "./styles";

export default function ButtonComponent({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
