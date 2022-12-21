import styled from "styled-components";

interface ContentProps {
	height?: string;
}

export const Container = styled.div`
	padding: 20px;
	height: 95%;
	width: 100%;
`;

export const MainContainer = styled.div`
	/* width: 100%;
	border-radius: 5px; */
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	height: 100%;
	box-shadow: 2px 2px 10px #85858565;
`;

export const ContentFormContainer = styled.div<ContentProps>`
	height: ${props => props.height ? props.height : "100%"};
	width: 100%;
	padding: 10px 0px 0px 10px;
	background-color: #fff;
	border-radius: 0px 0px 10px 10px;
	overflow-y: auto;
`;