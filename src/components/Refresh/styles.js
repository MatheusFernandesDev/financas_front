import { BiLoaderAlt } from "react-icons/bi";
import styled from "styled-components";

export const Icon = styled(BiLoaderAlt)`
	width: ${(props) => props.width || "21px"};
	height: ${(props) => props.height || "21px"};
	@keyframes rotation {
		0% {
		}
		100% {
			transform: rotate(360deg);
		}
	}
	animation: rotation 1s infinite linear;
	user-select: none;
`;
