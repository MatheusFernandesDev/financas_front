import React, { useState, useEffect, FunctionComponent } from "react";

import { Container, Select } from "./styles";

interface Option {
    id: number;
    name: string;
}

interface InputProps {
    name_field?: string;
    value?: number;
    options: Array<Option>;
    name_placeholder?: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const SelectOption: FunctionComponent<InputProps> = ({
    name_field,
    value,
    options,
    name_placeholder,
    onChange
}) => {


    return (
        <Container>
            <label>{name_field}</label>
            <Select value={value} onChange={onChange} >
				{
					<option
						key={-1}
						value={-1}
					>
						{name_placeholder}
					</option>
				}
				{options.map((opcao) => (
					<option key={opcao.id} value={opcao.id}>
						{opcao.name}
					</option>
				))}
            </Select>
        </Container>
    )
}

export default SelectOption;