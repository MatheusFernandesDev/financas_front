import styled from "styled-components";
import { Utils } from "../../../config/Utils";
import { device } from "../../../styles/devices";

export const Container = styled.div`
	display: flex;
	height: 32px;
	position: relative;
`;

export const SearchField = styled.input`
	width: 200px;
	height: 100%;
	border: 1px solid #e5e5e5;
	padding: 0 5px 0 16px;
	border-radius: 0px;

	@media ${device.mobile} {
		width: 60%;
	}
`;

export const ClearButton = styled.button`
	height: 100%;
	width: 32px;
	min-width: 21px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-style: none;
	background-color: ${Utils.COLORS.SECONDARY};
	border-radius: 0px 10px 10px 0px;
	cursor: pointer;

	@media ${device.mobile} {
		width: 10%;
	}

	:hover {
		background-color: ${Utils.COLORS.DARK_SECONDARY};
	}
`;

export const Select = styled.select`
	height: 100%;
	min-width: 50px;
	border: 1px solid #e5e5e5;
	border-right: none;
	border-radius: 10px 0px 0px 10px;
`;
