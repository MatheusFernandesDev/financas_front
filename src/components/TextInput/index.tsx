import React, { useState, useEffect, FunctionComponent } from "react";

import { Container, ErrorMessage, Input } from "./styles";

type ErrorsProps = {
  msg: string | undefined;
  param: string;
  value: string;
  email: string;
};

interface TextyInputProps {
  name_field?: string;
  name_placeholder?: string;
  value?: string;
  param?: string;
  errors: Array<ErrorsProps>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
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
  return (
    <Container>
      <label>{name_field}</label>
      <Input
        value={value}
        placeholder={name_placeholder}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {/* <ErrorMessage>{error ? error.msg : ""}</ErrorMessage> */}
    </Container>
  );
};

export default TextInput;
