import styled from "styled-components";
// import { device } from "../../../styles/devices";

export const Container = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
	position: relative;
	/* @media  { */
	width: ${(props) =>
		props.grid_width ? props.grid_width * 8.3 + "%" : "100%"};
	/* } */
	/* @media {
		width: ${(props) =>
		props.grid_width ? props.grid_width * 16.6 + "%" : "100%"};
	} */
	/* @media {
		width: 100%;
	} */
`;

export const Label = styled.label`
	${(props) => (props.errors ? "color: red;" : "")}
`;

export const ErrorMessage = styled.p`
	position: absolute;
	top: 90%;
	${(props) => {
		if (props.errors) {
			return "color: darkred; margin-left: 5px";
		} else {
			return "display: none";
		}
	}}
`;

export const Input = styled.input.attrs({
	type: "text",
})`
	height: 33px;
	width: 100%;
	padding: 0 5px;
	color: ${({ theme }) => theme.INPUT.COLOR};
	background-color: ${({ theme }) => theme.INPUT.BACKGROUND_COLOR};
	border-radius: 8px;
	border-width: 1px;
	border-style: solid;
	border-color: ${(props) =>
		props.errors ? "red" : "#e5e5e5"};
	${(props) => (props.errors ? "border-color: red; border-style: solid;" : "")}
	&:disabled{
		background-color: #ddd; 
	}
	&:focus {
		border-color: #3A89FF;
	}
`;