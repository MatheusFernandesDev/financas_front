import styled from "styled-components";

interface ContainerProps {
  noScroll?: boolean;
}

export const Container = styled.div<ContainerProps>`
	width: 100vw;
	height: 100vh;
	padding-top: 0px;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: ${({ noScroll }) => (noScroll ? "hidden" : "auto")};
`;
