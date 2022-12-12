import React, { useState, useEffect, FunctionComponent } from "react";

import { Container, Label, Select, ErrorMessage } from "./styles";

interface Option {
    id: number;
    name: string;
}

interface ErroAll {
    msg: string;
    param: string;
}
interface InputProps {
    name_field?: string;
    value?: number;
    options: Array<Option>;
    name_placeholder?: string;
    param?: string;
    errors?: Array<ErroAll>;
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const SelectOption: FunctionComponent<InputProps> = ({
    name_field,
    value,
    options,
    name_placeholder,
    param,
    errors,
    onChange
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
        <Container>
          <Label errors={error}>{name_field}</Label>
          <Select errors={error} value={value} onChange={onChange} onFocus={() => setError("")}>
          {
            <option
              key={-1}
              value={-1}
            >
              {name_placeholder || `Selecione ${name_field?.toLowerCase()}`}
            </option>
          }
          {options.map((opcao) => (
            <option key={opcao.id} value={opcao.id}>
              {opcao.name}
            </option>
          ))}
          </Select>
          <ErrorMessage>{error}</ErrorMessage>
        </Container>
    )
}

export default SelectOption;