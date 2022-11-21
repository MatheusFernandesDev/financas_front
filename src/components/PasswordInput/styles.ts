import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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

export const Input = styled.input.attrs({
  type:'text'
})`
  height: 28px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 5px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export const Password = styled.input.attrs({
	type: "password"
  })`
  height: 28px;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0 5px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export const IconOpen = styled(AiOutlineEyeInvisible)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 25px;
  margin-top: 1px;
`;

export const IconClose = styled(AiOutlineEye)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 25px;
  margin-top: 1px;
`