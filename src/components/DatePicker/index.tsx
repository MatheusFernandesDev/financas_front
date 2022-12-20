import React, { useEffect, useState } from "react";
import { Input, Label, Container, ErrorMessage } from "./styles";

interface DatePickerProps {
    style?: any;
	grid_width?: string;
	value?: Date | null;
	setState?: any;
	name_field?: string;
	param?: string;
	dateFormat?: string;
	errors?: Array<ErroAll>;
	minDate?: any;
	maxDate?: any;
	withPortal?: boolean | false;
	disabled?: boolean | false;
}
interface ErroAll {
  msg: string;
  param: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
	style,
	grid_width,
	value,
	setState,
	name_field,
	param,
	dateFormat,
	errors,
	minDate,
	maxDate,
	withPortal,
	disabled,
}) => {
	// const [state, setState] = useState(value);

	dateFormat = dateFormat || "dd/MM/yyyy";

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
				errors={error}
				selected={value}
				onChange={(date: any) => setState(date)}
				onFocus={() => setError("")}
				dateFormat={dateFormat}
				minDate={minDate}
				maxDate={maxDate}
				grid_width={grid_width}
				withPortal={withPortal}
				disabled={disabled}
			/>
			<ErrorMessage>{error}</ErrorMessage>
		</Container>
	);
}

export default DatePicker;