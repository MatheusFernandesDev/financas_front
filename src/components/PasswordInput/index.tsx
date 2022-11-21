import React, { FunctionComponent, useState } from "react";

import { Container, Input, Password, PasswordArea, IconOpen, IconClose } from "./styles";

interface InputProps {
    name_field?: string;
    name_placeholder?: string;
    value?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

const PasswordInput: FunctionComponent<InputProps> = ({
    name_field, 
    name_placeholder,
    value,
    onChange,
    onKeyPress
}) => {
    const [showPass, setShowPass] = useState(false)

    const iconStyle = {
        position: "absolute",
        top: "0",
        right: "0",
        width: "30px",
        height: "20px",
        // width: "20px",
        // height: "20px",
        // color: "black",
        // marginRight: "15px",
    };
    const btnStyle = {
        marginRight: "15px",
        background: "none",
        border: "none",
        cursor: "pointer",
    };

    return (
        <Container>
            <label>{name_field}</label>
            <PasswordArea>
                {showPass 
                    ? <Input placeholder={name_placeholder} onChange={onChange} onKeyPress={onKeyPress} value={value} />
                    : <Password placeholder={name_placeholder} onChange={onChange} onKeyPress={onKeyPress} value={value} />
                }
                {showPass
                    ? 
                    <button title="Esconder Senha" style={btnStyle} onClick={() => setShowPass(false)} >
                        <IconClose/>
                    </button>
                    : 
                    <button title="Mostrar Senha" style={btnStyle} onClick={() => setShowPass(true)} >
                        <IconOpen/>
                    </button>
                }
            </PasswordArea>
        </Container>
    )
}

export default PasswordInput;