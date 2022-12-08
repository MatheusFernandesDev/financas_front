import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { device } from "../../styles/devices";

export const Container = styled.div`
	padding: 20px;
`;

export const MainContainer = styled.div`
	max-height: 85vh;
	overflow-y: auto;
	margin-bottom: 20px;
`;
export const TitleTable = styled.div`
	font-size: 18px;
	color: black;
	font-family: Roboto Bold;
	margin-top: 20px;
	margin-left: 18px;
	grid-area: span ${(props) => (props.grid_height ? props.grid_height : 1)} /
		span ${(props) => (props.grid_width ? props.grid_width : 12)};
	position: relative;

	@media ${device.mobile} {
		margin-left: 0;
	}
`;

export const ColumnTitle = styled.p`
	font-family: Roboto Bold;
	font-size: 16px;
`;

export const Actions = styled.div`
	display: flex;
`;
export const InputCell = styled.div`
	display: flex;
	align-items: center;
`;

export const Icon = styled.div`
	width: 20px;
	height: 20px;
	color: black;
`;

export const SubTitle = styled.span`
	position: absolute;
	left: 18px;
	font-size: 12px;
	color: ${Utils.COLORS.OTHER};

	@media ${device.tablet} {
		visibility: hidden;
	}
`;
