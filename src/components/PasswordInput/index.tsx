import React, { FunctionComponent, useState, useEffect } from "react";

import { Container, Label, Input, Password, PasswordArea, IconOpen, IconClose, ErrorMessage } from "./styles";

interface ErroAll {
    msg: string;
    param: string;
}
interface InputProps {
    name_field?: string;
    name_placeholder?: string;
    value?: string;
    param?: string;
    errors?: Array<ErroAll>;
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const PasswordInput: FunctionComponent<InputProps> = ({
    name_field, 
    name_placeholder,
    value,
    errors,
    param,
    onChange,
    onKeyPress
}) => {
    const [error, setError] = useState("");
    const [showPass, setShowPass] = useState(false)

    const btnStyle = {
        marginRight: "15px",
        background: "none",
        border: "none",
        cursor: "pointer",
    };
  
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
        <Container>
            <Label errors={error}>{name_field}</Label>
            <PasswordArea>
                {showPass 
                    ? <Input errors={error} placeholder={name_placeholder} onChange={onChange} onKeyPress={onKeyPress} value={value} onFocus={() => setError("")} />
                    : <Password errors={error} placeholder={name_placeholder} onChange={onChange} onKeyPress={onKeyPress} value={value} onFocus={() => setError("")} />
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
            <ErrorMessage>{error}</ErrorMessage>
        </Container>
    )
}

export default PasswordInput;