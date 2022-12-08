import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Utils } from "../../../config/Utils";

export const Container = styled.div`
	height: 65px;
	width: 100%;
	background-color: ${Utils.COLORS.BLACK};
	border-radius: 10px 10px 0px 0px;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	&:first-child :first-child {
		border-top-left-radius: 10px;
	}
	/* &:first-child :last-child {
		border-top-right-radius: 10px;
	} */
`;
export const Button = styled.button`
	height: 100%;
	min-width: 100px;
`;

export const Link = styled(NavLink)`
	display: flex;
	justify-content: center;
	text-decoration: none;
	height: 100%;
	background-color: none;
	text-decoration: none;
`;

export const Linkfy = styled.a`
	display: flex;
	justify-content: center;
	height: 100%;
	background-color: none;
	text-decoration: none;
	cursor: pointer;

  &:disabled {
    cursor: default;
    background: rgba(58, 137, 255, 0.7);
  }
`;