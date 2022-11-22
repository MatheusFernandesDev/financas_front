import styled from "styled-components";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 80%;
    margin: 5px 10%;
    padding: 5px;
    padding-left: 15px;
    border-radius: 10px;
    background-color: #272c30;
`;

export const IconsArea = styled.div`
    display: flex; 
    justify-content: space-around;
`;

export const PerfilIcon = styled(IoPersonCircleOutline)`
    width: 70px;
    height: 30px;
    background: none;
    color: #e5e5e5;
    cursor: pointer;
`;

export const ConfigIcon = styled(BsGear)`
    width: 70px;
    height: 30px;
    background: none;
    color: #e5e5e5;
    cursor: pointer;
`;

export const LogoutIcon = styled(IoLogOutOutline)`
    width: 70px;
    height: 30px;
    background: none;
    color: #e5e5e5;
    cursor: pointer;
`;