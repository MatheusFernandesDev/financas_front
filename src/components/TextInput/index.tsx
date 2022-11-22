import React, { useState, useEffect, FunctionComponent } from "react";

import { Container, Input, ErrorMessage } from "./styles";

interface TextyInputProps {
  name_field?: string;
  name_placeholder?: string;
  value?: string;
  param?: string;
  errors: Array<ErroAll>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
interface ErroAll {
  msg: string;
  param: string;
}

const TextInput: FunctionComponent<TextyInputProps> = ({
  name_field,
  name_placeholder,
  value,
  param,
  errors,
  onChange,
  onKeyPress,
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (errors) {
      errors.find((err) => {
        if (err.param === param) {
          console.log(err.msg);
          setError(err.msg);
        }
      });
    }
  }, [errors, param]);

  return (
    <Container>
      <label>{name_field}</label>
      <Input
        value={value}
        placeholder={name_placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

export default TextInput;
