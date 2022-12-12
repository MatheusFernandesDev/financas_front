import React, { FunctionComponent } from "react";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { Button, Container } from "./styles";

interface ButtonProps {
    click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children?: React.ReactNode
}

const Index: FunctionComponent<ButtonProps> = ({click, children }) => {
	return (
        <Button onClick={click}>
            {children}
        </Button>
	);
};

export default Index;