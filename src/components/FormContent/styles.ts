import styled from "styled-components";
import { device } from "../../styles/devices";

interface ContentProps {
	height?: string;
}

export const Container = styled.div`
	padding: 20px;
	height: 95%;
	width: 99%;
`;

export const MainContainer = styled.div`
	width: 100%;
	border-radius: 5px;
`;

export const ContentFormContainer = styled.div<ContentProps>`
	${props => props.height ? `height: ${props.height}` : "height: 88vh"};
	max-height: 88vh;
  	padding: 10px;
	background-color: white;
	border-radius: 0px 0px 18px 18px;
`;