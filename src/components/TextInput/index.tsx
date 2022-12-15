import React, { useState, useEffect, FunctionComponent } from "react";

import { Container, Label, Input, ErrorMessage } from "./styles";

interface TextyInputProps {
  style?: any;
  name_field?: string;
  name_placeholder?: string;
  value?: string;
  param?: string;
  errors?: Array<ErroAll>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
interface ErroAll {
  msg: string;
  param: string;
}

const TextInput: FunctionComponent<TextyInputProps> = ({
  style,
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
          setError(err.msg);
        }
      });
    }
  }, [errors, param]);

  return (
    <Container style={style}>
      <Label errors={error}>{name_field}</Label>
      <Input
        value={value}
        placeholder={name_placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        errors={error}
        onFocus={() => setError("")}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

export default TextInput;
