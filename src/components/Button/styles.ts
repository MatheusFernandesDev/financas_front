import styled from "styled-components";

interface Props {
    width?: string;
    height?: string;
}

export const ButtonContainer = styled.button<Props>`
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : "40px"};
  padding: 0 16px;
  border: 0;
  border-radius: 8px;
  background: #272c30;
  color: #f9f9f9;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(39, 44, 48, 0.9);
  }
  &:disabled {
    cursor: default;
    background: rgba(39, 44, 48, 0.7);
  }
`;