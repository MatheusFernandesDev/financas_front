import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
	padding: 20px;
	height: 95%;
	width: 99%;
`;

export const MainContainer = styled.div`
	width: 100%;
	border-radius: 5px;
`;

export const ContentFormContainer = styled.div`
	max-height: 75vh;
  	padding: 10px;
	background-color: white;
	border-radius: 0px 0px 18px 18px;

	@media ${device.tablet} {
		height: 65vh;
	}
`;