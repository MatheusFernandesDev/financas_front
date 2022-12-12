import React from "react";
import { Select, Option } from "./styles";

const index = ({ options = [], ...rest}) => {
	return (
		<Select {...rest}>
			{options.map(option => (
				<Option key={option.id} value={option.id}>
					{option.name}
				</Option>
			))}
		</Select>
	);
};

export default index;
