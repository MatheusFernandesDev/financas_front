import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    initial_state?: boolean;
	name_field?: string;
	is_checked?: boolean;
	toggleState?: Function;
    id?: string;
}

const CheckboxInput: React.FC<InputProps> = (props) => {
    
    const btnStyle = {
        marginRight: "7px",
        height: "20px",
        width: "20px",
    };

    return (
        <Container>
            <input type="checkbox" id={props.id} {...props} checked={props.is_checked} style={btnStyle} />
            <label>{props.name_field}</label>
        </Container>
    )
}

export default CheckboxInput;