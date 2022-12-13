import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Linkify = styled(Link)`
  text-decoration: none;
  color: black;
  /* &:hover {
		opacity: 0.7;
	} */
`;
