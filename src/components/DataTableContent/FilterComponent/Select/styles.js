import styled from "styled-components";
import { device } from "../../../../styles/devices";

export const Select = styled.select`
	height: 100%;
	min-width: 55px;
	border: 1px solid #e5e5e5;
	border-right: none;
	border-radius: 10px 0px 0px 10px;
	padding: 5px;

	@media ${device.tablet} {
		width: 30%;
		max-width: 110px;
	}
`;

export const Option = styled.option``;
