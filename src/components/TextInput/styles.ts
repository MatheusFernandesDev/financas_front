import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { device } from "../../styles/devices";

interface ErrorProps {
  errors: string;
  grid_width?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > label {
    font-size: 15px;
  }
`;

export const Label = styled.label<ErrorProps>`
	color: ${props => props.errors != "" ? 'darkred' : 'black'};
`;

export const Input = styled.input.attrs({
  type: "text"
})<ErrorProps>`
  height: 28px;
  width: ${(props) => props.grid_width ? Number(props.grid_width) * 8.3 + "%" : "100%"};
  border: ${props => props.errors != "" ? '1px solid darkred' : '1px solid #e5e5e5'};
  border-radius: 5px;
  padding: 0 5px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;
  
	@media ${device.mobile} {
		width: 100%;
	}

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
