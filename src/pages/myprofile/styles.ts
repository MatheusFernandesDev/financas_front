import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdModeEditOutline, MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface TextProps {
    noPerfil?: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

export const PerfilArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PerfilIcon = styled(IoPersonCircleOutline)`
    width: 100px;
    height: 150px;
    background: none;
    color: ${Utils.COLORS.SECONDARY};
    margin-bottom: -20px;
`;

export const NameText = styled.span<TextProps>`
    font-size: 18px;
    ${props => props.noPerfil ? "" : "font-weight: bold"};
`;

export const PassButton = styled.button`
    width: 100%;
    height: 35px;
    padding: 0 16px;
    border: 0;
    border-radius: 8px;
    color: #f9f9f9;
    font-weight: 600;
    background-color: ${Utils.COLORS.LIGHT_SECONDARY};
    cursor: pointer;

    :hover {
        background-color: ${Utils.COLORS.SECONDARY};
    }
    :disabled {
        cursor: default;
        background: #ddd;
    }
`;

export const EditIcon = styled(MdModeEditOutline)`
    height: 30px;
    width: 30px;
    color: ${Utils.COLORS.SECONDARY};
    cursor: pointer;
    margin-top: 10px;

    :hover {
        color: ${Utils.COLORS.DARK_SECONDARY};
    }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
    height: 30px;
    width: 30px;
    color: ${Utils.COLORS.SECONDARY};
    cursor: pointer;
    margin-top: 10px;

    :hover {
        color: ${Utils.COLORS.DARK_SECONDARY};
    }
`;

export const NameIcon = styled(IoPersonCircleOutline)`
    width: 25px;
    height: 25px;
    background: none;
    color: ${Utils.COLORS.SECONDARY};
`;

export const EmailIcon = styled(MdOutlineMail)`
    width: 25px;
    height: 25px;
    background: none;
    color: ${Utils.COLORS.SECONDARY};
`;

export const TelephoneIcon = styled(BsTelephone)`
    width: 25px;
    height: 25px;
    background: none;
    color: ${Utils.COLORS.SECONDARY};
`;

export const PasswordIcon = styled(RiLockPasswordLine)`
    width: 25px;
    height: 25px;
    background: none;
    color: ${Utils.COLORS.SECONDARY};
`;
export const ConfirmPasswordIcon = styled(RiLockPasswordFill)`
    width: 25px;
    height: 25px;
    background: none;
    color: ${Utils.COLORS.SECONDARY};
`;
