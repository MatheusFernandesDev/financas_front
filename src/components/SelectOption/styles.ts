import styled from "styled-components";
import { Utils } from "../../config/Utils";

interface ErrorProps {
  errors: string;
}

export const Container = styled.div`
	display: flex;
  flex-direction: column;
	align-items: flex-start;
`;

export const Label = styled.label<ErrorProps>`
  font-size: 15px;
  color: ${props => props.errors != "" ? "darkred" : "black"};
`;

export const Select = styled.select<ErrorProps>`
  height: 28px;
  width: 100%;
  padding: 0 5px;
  border: ${props => props.errors != "" ? "1px solid darkred" : "1px solid #e5e5e5"};
  border-radius: 5px;
  background-color: white; 
  
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