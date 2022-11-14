import React, { InputHTMLAttributes, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name_field?: string;
    name_placeholder?: string;
    value?: string;
}

const PasswordInput: React.FC<InputProps> = (props) => {
    const [showPass, setShowPass] = useState(false)

    const iconStyle = {
        width: "20px",
        height: "20px",
        color: "black",
        marginRight: "15px",
    };
    const btnStyle = {
        marginRight: "15px",
        background: "none",
        border: "none",
        cursor: "pointer",
    };

    return (
        <Container>
            <label>{props.name_field}</label>
            <input type={showPass ? "text" : "password"} placeholder={props.name_placeholder} {...props} />
            {/* {showPass
                ? 
                <button title="Esconder Senha" style={btnStyle} onClick={() => setShowPass(false)} >
                    <AiOutlineEye style={iconStyle}/>
                </button>
                : 
                <button title="Mostrar Senha" style={btnStyle} onClick={() => setShowPass(true)} >
                    <AiOutlineEyeInvisible style={iconStyle}/>
                </button>
            } */}
        </Container>
    )
}

export default PasswordInput;