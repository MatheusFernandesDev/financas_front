import React, { useEffect, useState } from "react";
import { Input, Label, Container, ErrorMessage } from "./styles";

interface EmptyInputMaskProps {
	name_field?: string;
	name_placeholder?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	mask?: any;
	maskChar?: string;
	alwaysShowMask?: boolean | false;
	errors?: Array<ErroAll>;
	param?: string;
}
interface ErroAll {
  msg: string;
  param: string;
}


const EmptyInputMask: React.FC<EmptyInputMaskProps> = ({
	name_field,
	name_placeholder,
	value,
	onChange,
	mask,
	maskChar,
	alwaysShowMask,
	errors,
	param,
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
				placeholder={name_placeholder}
				onChange={onChange}
				mask={mask}
				maskChar={maskChar}
				alwaysShowMask={alwaysShowMask}
				onFocus={() => setError("")}
				errors={error}
			/>
			<ErrorMessage>{error}</ErrorMessage>
		</Container>
	);
}

export default EmptyInputMask;