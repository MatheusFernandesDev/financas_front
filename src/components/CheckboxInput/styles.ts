// import styled from "styled-components";

// export const Container = styled.div`
// 	display: flex;
//     flex-direction: row;
// 	align-items: center;

// 	& > label {
// 		font-size: 15px;
// 	}
// `

import styled from "styled-components";

export const Container = styled.div`
	height: 2em;
	display: flex;
	align-items: center;
	margin-top: 10px;
	margin-right: 10px;
`;

export const Label = styled.label`
	margin-right: 10px;
`;

export const Input = styled.input.attrs({
	type: "checkbox",
})`
	display: none;
`;

export const InputContainer = styled.div`
	border: 2px solid rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	height: 24px;
	width: 52px;
	position: relative;
	background-color: rgba(0, 0, 0, 0.25);
	cursor: pointer;
	transition: ease-in-out 0.15s;

	&.active {
		background-color: #fff;
		border-color: red;
		transition: ease-in-out 0.15s;
	}
`;

export const Switch = styled.div`
	top: 1px;
	border-radius: 45%;
	height: 18px;
	width: 18px;
	margin: 0px 0px 0px 1px;
	/* margin-top: .7px; */
	background-color: rgba(0, 0, 0, 0.25);
	position: absolute;
	transition: ease-in-out 0.15s;

	&.active {
		transition: ease-in-out 0.15s;
		background-color: red;
		transform: translateX(28px);
	}
`;
