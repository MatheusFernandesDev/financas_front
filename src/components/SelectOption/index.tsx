import React, { useState, useEffect, InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface Option {
    id: number;
    name: string;
}

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
    name_field?: string;
    value?: number;
    options: Array<Option>;
    name_placeholder?: string;
}

const SelectOption: React.FC<InputProps> = (props) => {
    const options = props.options;


    return (
        <Container>
            <label>{props.name_field}</label>
            <select {...props} >
				{
					<option
						key={-1}
						value={-1}
					>
						{props.name_placeholder}
					</option>
				}
				{options.map((opcao) => (
					<option key={opcao.id} value={opcao.id}>
						{opcao.name}
					</option>
				))}
            </select>
        </Container>
    )
}

export default SelectOption;