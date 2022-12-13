import styled from "styled-components";
import { device } from "../../styles/devices";
import { Utils } from "../../config/Utils";
import { BsGear } from "react-icons/bs";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 96%;
    margin: 5px 1.5%;
    padding: 5px;
    padding-left: 15px;
    border-radius: 10px;
    background-color: #272c30;
`;

export const LogoImage = styled.img`
	height: 40px;
	display: block;
	@media ${device.tablet} {
		height: 40px;
	}
`;

export const IconsArea = styled.div`
    display: flex; 
    justify-content: space-around;
`;

export const PerfilIcon = styled(IoPersonCircleOutline)`
    width: 70px;
    height: 30px;
    background: none;
    color: ${Utils.COLORS.PRIMARY};
    cursor: pointer;

    &:hover {
        color: ${Utils.COLORS.LIGHT_PRIMARY};
    }
`;

export const ConfigIcon = styled(BsGear)`
    width: 70px;
    height: 30px;
    background: none;
    color: ${Utils.COLORS.PRIMARY};
    cursor: pointer;

    &:hover {
        color: ${Utils.COLORS.LIGHT_PRIMARY};
    }
`;

export const LogoutIcon = styled(IoLogOutOutline)`
    width: 70px;
    height: 30px;
    background: none;
    color: ${Utils.COLORS.PRIMARY};
    cursor: pointer;

    &:hover {
        color: ${Utils.COLORS.LIGHT_PRIMARY};
    }
`;