import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > label {
    font-size: 15px;
  }
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
