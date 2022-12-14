import React, { useEffect, useState } from "react";
import { CurrencyInputOnChangeValues } from "react-currency-input-field/dist/components/CurrencyInputProps";
import { Input, Label, Container, ErrorMessage } from "./styles";

interface DoubleInputProps {
    name_field?: string;
    name_placeholder?: string;
    value?: string;
    param?: string;
    errors?: Array<ErroAll>;
    setState?: any;
    setMask?: any;
    prefix?: string;
    suffix?: string;
  }
  interface ErroAll {
    msg: string;
    param: string;
  }

const DoubleInput: React.FC<DoubleInputProps> = ({
    name_field,
    name_placeholder,
    value,
    prefix,
    suffix,
    param,
    errors,
    setState,
    setMask,
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
			<Input
        value={value}
				errors={error}
				autoComplete="new-password"
				decimalSeparator="," 
        groupSeparator="."
        prefix={prefix}
        suffix={suffix}
        placeholder={name_placeholder}
        // onChange={onChange}
				onValueChange={(value: any, name: any) => {
            setState(value);
            setMask(name);
        }}
				onFocus={() => setError("")}
			/>
			<ErrorMessage>{error}</ErrorMessage>
		</Container>
	);
}

export default DoubleInput;