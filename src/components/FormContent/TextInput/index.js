import React, { useEffect, useState } from "react";
import { Input, Label, Container } from "./styles";
import { ErrorMessage } from "../styles";
import randomString from "../../../helpers/randomString";

export default function Index({
	name_field,
	grid_width,
	grid_height,
	hidden,
	required,
	errors,
	param = randomString(5),
	...rest
}) {
	// grid_width = grid_width || 2;
	name_field = name_field || "";

	const [error, setError] = useState(null);

	useEffect(() => {
		if (errors) {
			setError(errors.find((err) => err.param === param));
		}
	}, [errors, param]);

	return (
		<Container
			hidden={hidden}
			grid_width={grid_width}
			grid_height={grid_height}
		>
			<Label errors={error}>{name_field}</Label>
			<Input
				errors={error}
				autoComplete="new-password"
				{...rest}
				onFocus={() => setError(null)}
				required={required}
			/>
			<ErrorMessage errors={error}>{error ? error.msg : ""}</ErrorMessage>
		</Container>
	);
}