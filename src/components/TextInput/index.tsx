import React, { InputHTMLAttributes, useState, useEffect } from "react";

import { Container, ErrorMessage } from "./styles";

type ErrorsProps = {
  msg: string;
  param: string;
  value: string;
  error: object;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name_field?: string;
  name_placeholder?: string;
  value?: string;
  param?: string;
  errors: Array<ErrorsProps>;
}

const TextInput: React.FC<InputProps> = (props) => {
  const [error, setError] = useState<ErrorsProps>();

  const mensagem = props.errors;

  console.log(mensagem);

  // useEffect(() => {
  //   if (props.errors) {
  //     setError(props.errors.find((err) => err.param === props.param));
  //   }
  // }, [props.errors, props.param]);

  return (
    <Container>
      <label>{props.name_field}</label>
      <input placeholder={props.name_placeholder} {...props} />
      {/* <ErrorMessage>{error ? error.msg : ""}</ErrorMessage> */}
    </Container>
  );
};

export default TextInput;
