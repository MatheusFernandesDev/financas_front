import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { IoPersonCircleOutline } from "react-icons/io5";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

export const PerfilIcon = styled(IoPersonCircleOutline)`
    width: 100px;
    height: 150px;
    background: none;
    color: ${Utils.COLORS.LIGHT_SECONDARY};
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
