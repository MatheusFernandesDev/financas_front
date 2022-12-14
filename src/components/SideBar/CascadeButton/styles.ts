import styled from "styled-components";
import { Utils } from "../../../config/Utils";
import { device } from "../../../styles/devices";

interface MainProps {
    menu?: boolean | false;
}

interface SubProps {
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
    /* height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.menu ? 'center' : 'flex-start'};
    position: relative;
    cursor: pointer;
    color: ${Utils.COLORS.LIGHT_BLACK};
    transition: .2s ease-in-out;

    &:hover {
        color: ${Utils.COLORS.SECONDARY};
    } */
`;

export const SubContainer = styled.div<SubProps>`
    padding-left: 15px;
    display: ${props => props.actived ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    position: relative;

    @media ${device.tablet} {
        position: absolute;
        top: 1;
        bottom: 0;
        left: 0;
        right: 0;
        flex-direction: row;
    }
`;

export const ItemsLine = styled.div`
	position: absolute;
	left: 15px;
	height: 100%;
	width: 1px;
	background-color: #b4b4b4;
`;

export const Title = styled.span<TextProps>`
  margin-left: 10px;
  color: ${Utils.COLORS.PRIMARY};
  display: ${props => props.menu ? 'block' : 'none'};
  font-size: ${props => props.subCascade ? '12px' : '16px'};
  user-select: none;
`;