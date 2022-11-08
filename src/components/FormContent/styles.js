import styled from "styled-components";
// import { device } from "../../styles/devices";

export const Container = styled.div`
	padding: 20px;
	height: 95%;
	width: 99%;
`;

export const Title = styled.h2`
	font-size: 18px;
	font-family: Roboto Bold;
	margin-top: 20px;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	height: 100%;
	box-shadow: ${({ theme }) => theme.CARD.BOX_SHADOW}; //2px 2px 10px #85858565;
	/* background-color: ${(props) => props.theme.CARD.BACKGROUND_COLOR}; */
	/* @media {
		flex-direction: column;
	} */
`;

export const ContentFormContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 10px;
	background-color: ${({ theme }) => theme.CARD.BACKGROUND_COLOR};
	border-radius: 0px 10px 10px 0px;
	overflow-y: ${(props) => (props.disableScroll ? "hidden" : "auto")};
	/* @media {
		border-radius: 0px 0px 10px 10px;
	} */
`;

export const ErrorMessage = styled.p`
	position: absolute;
	margin-top: -3px;
	/* top: 5%; */
	${(props) => {
		if (props.errors) {
			return "color: darkred; margin-left: 5px";
		} else {
			return "display: none";
		}
	}}
`;

export const FormObs = styled.span`
	color: #888;
	font-style: italic;
`;