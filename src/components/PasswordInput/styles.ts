import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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

export const PasswordArea = styled.div`
  position: relative;
  width: 100%;
  height: 28px;
  border: 1px solid transparent;
`;

export const Label = styled.label<ErrorProps>`
	color: ${props => props.errors != "" ? 'darkred' : 'black'};
`;

export const Input = styled.input.attrs({
  type:'text'
})<ErrorProps>`
  height: 28px;
  width: 100%;
  border: ${props => props.errors != "" ? '1px solid darkred' : '1px solid #e5e5e5'};
  border-radius: 5px;
  padding: 0 5px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;

  
  &:focus {
		border-color: ${Utils.COLORS.SECONDARY};
	}
	&:disabled{
		background-color: #ddd; 
	}
`;

export const Password = styled.input.attrs({
	type: "password"
  })<ErrorProps>`
  height: 28px;
  width: ${(props) => props.grid_width ? Number(props.grid_width) * 8.3 + "%" : "100%"};
  border: ${props => props.errors != "" ? '1px solid darkred' : '1px solid #e5e5e5'};
  border-radius: 5px;
  padding: 0 5px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;

  
  &:focus {
		border-color: ${Utils.COLORS.SECONDARY};
	}
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1px;
`;

export const IconOpen = styled(AiOutlineEyeInvisible)`
  width: 25px;
  height: 25px;
`;

export const IconClose = styled(AiOutlineEye)`
  width: 25px;
  height: 25px;
`
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