import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name_field?: string;
    name_placeholder?: string;
    value?: string;
}

const TextInput: React.FC<InputProps> = (props) => {

    return (
        <Container>
            <label>{props.name_field}</label>
            <input placeholder={props.name_placeholder} {...props} />
        </Container>
    )
}

export default TextInput;