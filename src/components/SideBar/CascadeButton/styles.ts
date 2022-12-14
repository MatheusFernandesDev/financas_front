import styled from "styled-components";
import { Utils } from "../../../config/Utils";
import { device } from "../../../styles/devices";

interface MainProps {
    menu?: boolean | false;
}

interface SubProps {
    menu?: boolean | false;
    actived?: boolean | false;
}

interface TextProps {
    menu?: boolean | false;
    subCascade?: boolean;
}

export const Container = styled.div`
    margin-left: 10px;
    color: ${Utils.COLORS.LIGHT_PRIMARY};
`;

export const MainContainer = styled.div<MainProps>`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    cursor: pointer;

    &:hover {
        color: ${Utils.COLORS.SECONDARY};
    }
`;

export const SubContainer = styled.div<SubProps>`
    padding-left: ${props => props.menu ? "15px" : "5px"};
    display: ${props => props.actived ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    position: relative;

    @media ${device.tablet} {
        padding-left: 5px;
    }
`;

export const ItemsLine = styled.div<MainProps>`
	position: absolute;
	left: ${props => props.menu ? "15px" : "5px"};;
	height: 100%;
	width: 1px;
	background-color: #b4b4b4;

    @media ${device.tablet} {
        left: 5px;
    }
`;

export const Title = styled.span<TextProps>`
  margin-left: 10px;
  color: ${Utils.COLORS.PRIMARY};
  display: ${props => props.menu ? 'block' : 'none'};
  font-size: ${props => props.subCascade ? '12px' : '16px'};
  user-select: none;
  
  @media ${device.mobile}{
    display: none;
  }
`;