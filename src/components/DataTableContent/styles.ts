import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { device } from "../../styles/devices";

interface Props {
	grid_height?: number;
	grid_width?: number;
}

export const Container = styled.div`
	padding: 20px;
`;

export const MainContainer = styled.div`
	max-height: 85vh;
	overflow-y: auto;
	margin-bottom: 20px;
`;

export const TitleTable = styled.div<Props>`
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

export const StyledStatus = styled.button`
  border-radius: 4px;
  padding: 5px 10px;
  color: white;
  margin-left: 8px;
  cursor: default;
  min-width: 75px;
  height: 28px;
  border: 1px solid transparent;
  background-color: ${Utils.COLORS.SECONDARY};
  transition: 0.2s ease-out;

  @media ${device.mobile} {
    width: 50%;
  }

  &.success {
    border: 1px solid #198754;
    background-color: #198754;
  }

  &.alert {
    border: 1px solid #dc3545;
    background-color: #dc3545;
  }

  &.warn {
    border: 1px solid #ffc108;
    background-color: #ffc108;
    color: #fff;
  }

  &.add {
    border: 1px solid #145da0;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 25px;
    height: 25px;
    background-color: #145da0;
    color: #fff;
  }
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
	color: ${Utils.COLORS.PRIMARY};

	@media ${device.tablet} {
		visibility: hidden;
	}
`;
