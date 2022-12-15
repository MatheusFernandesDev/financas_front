import React, { useEffect, useState } from "react";
import { Input, Label, Container, ErrorMessage } from "./styles";

interface EmptyInputMaskProps {
    style?: any;
	grid_width?: string;
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
	style,
	grid_width,
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
		<Container style={style}>
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
				grid_width={grid_width}
			/>
			<ErrorMessage>{error}</ErrorMessage>
		</Container>
	);
}

export default EmptyInputMask;