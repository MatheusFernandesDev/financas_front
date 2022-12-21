import styled from "styled-components";

interface ContainerProps {
    noScroll?: boolean;
}

export const Container = styled.div<ContainerProps>`
	width: 100vw;
	height: 100vh;
	/* background-color: #f0f0ee; */
	padding-top: 90px;
	/* overflow-y: hidden; */
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* row-gap: 10px; */
	overflow-y: ${({ noScroll }) => (noScroll ? "hidden" : "auto")};
`;
