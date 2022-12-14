import styled, { keyframes } from "styled-components";
import { device } from "../../styles/devices";
import { Utils } from "../../config/Utils";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

interface TextProps {
  menu?: boolean | false;
}

interface ContainerProps {
  sidebar: boolean | false;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  height: 96vh;
  margin-top: 15px;
  padding: 8px;
  width: ${props => props.sidebar ? "200px" : "70px"};
  background-color: ${Utils.COLORS.BLACK};
  border-radius: 0 18px 18px 0;
`;

export const LogoArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
`;

export const LogoIcon = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
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
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    color: ${Utils.COLORS.SECONDARY};
  }
`;


export const Text = styled.span<TextProps>`
  margin-left: 10px;
  color: ${Utils.COLORS.PRIMARY};
  display: ${props => props.menu ? 'block' : 'none'};
  font-size: 16px;

  @media ${device.tablet}{
    display: none;
  }

  @media ${device.mobile}{
    display: none;
  }
`;

export const ArrowLeft = styled(BsArrowLeft)`
  height: 25px;
  width: 25px;
  color: ${Utils.COLORS.LIGHT_PRIMARY}
`;

export const ArrowRight = styled(BsArrowRight)`
  height: 25px;
  width: 25px;
  color: ${Utils.COLORS.LIGHT_PRIMARY}
`;