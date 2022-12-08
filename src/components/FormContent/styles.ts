import styled from "styled-components";
import { device } from "../../styles/devices";

interface Props {
	disableScroll?: boolean;
	disableScrollx?: boolean;
}

export const Container = styled.div`
	padding: 20px;
	width: 100%;
`;

export const MainContainer = styled.div`
	width: 100%;
	border-radius: 5px;
`;

export const ContentFormContainer = styled.div<Props>`
	max-height: 75vh;
  	padding: 10px;
	background-color: white;
	border-radius: 0px 0px 18px 18px;
	overflow-y: ${props => props.disableScroll ? 'hidden' : 'auto'};
	overflow-x: ${props => props.disableScrollx ? 'hidden' : 'auto'};

	@media ${device.tablet} {
		height: 65vh;
	}
`;