import styled from "styled-components";
import { device } from "../../styles/devices";
import { Utils } from "../../config/Utils";
import { BsGear } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

interface ContainerProps {
    showIcons?: boolean | false;
}
interface TextProps {
  menu?: boolean | false;
}

// MAIN
export const Container = styled.div<ContainerProps>`
    display: none;
    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        height: ${props => props.showIcons ? "50%" : "60px"};
        width: 96%;
        margin: 5px 1.5%;
        padding: 15px;
        border-radius: 10px;
        background-color: ${Utils.COLORS.BLACK};
    }
`;
export const Always = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 20px;
`;

// EXPAND
export const LogoImage = styled.img`
	height: 40px;
    border-radius: 50%;
    margin-top: -5px;
`;
export const IconsArea = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
`;
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${Utils.COLORS.LIGHT_PRIMARY};
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;

  :hover {
    color: ${Utils.COLORS.SECONDARY};
  }
`;
export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  color: ${Utils.COLORS.LIGHT_PRIMARY};
  margin-left: 10px;
  padding-right: 5px;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    color: ${Utils.COLORS.SECONDARY};
  }
`;

export const Text = styled.span<TextProps>`
  margin-left: 10px;
  color: ${Utils.COLORS.PRIMARY};
  font-size: 16px;
`;

// ICONS
export const Bars = styled(HiBars3)`
    color: ${Utils.COLORS.DARK_PRIMARY};
    width: 25px;
    height: 25px;
    cursor: pointer;

    :hover {
        color: ${Utils.COLORS.SECONDARY};
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

