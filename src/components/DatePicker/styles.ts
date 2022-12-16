import DatePicker, { registerLocale } from "react-datepicker";
import ptbr from "date-fns/locale/pt-BR"; // the locale you want
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { device } from "../../styles/devices";
import { Utils } from "../../config/Utils";

registerLocale("ptbr", ptbr);

interface ErrorProps {
	errors?: String;
	grid_width?: string;
}

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const Label = styled.label<ErrorProps>`
	${(props) => (props.errors ? "color: darkred;" : "")}
`;

export const Input = styled(DatePicker).attrs({
	locale: "ptbr",
})<ErrorProps>`
	height: 28px;
	width: ${(props) => props.grid_width ? Number(props.grid_width) * 8.3 + "%" : "100%"};
	border: ${props => props.errors != "" ? '1px solid darkred' : '1px solid #e5e5e5'};
	border-radius: 5px;
	padding: 0 5px;
  	background-color: white;
	display: flex;
	align-items: center;
	&:focus {
		border-color: ${Utils.COLORS.SECONDARY};
	}
	&:disabled{
		background-color: #ddd;
	}
`;

export const ErrorMessage = styled.p`
  /* margin-left: -20px; */
  color: darkred;
  ${(props) => {
    if (props.children) {
      return "color: darkred; margin-left: 5px";
    } else {
      return "display: none";
    }
  }}
`;
