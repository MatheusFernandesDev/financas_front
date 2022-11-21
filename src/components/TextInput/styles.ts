import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > label {
    font-size: 15px;
  }
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

export const ErrorMessage = styled.p`
  position: absolute;
  top: 90%;
  color: darkred;
  ${(props) => {
    if (props.children) {
      return "color: darkred; margin-left: 5px";
    } else {
      return "display: none";
    }
  }}
`;
