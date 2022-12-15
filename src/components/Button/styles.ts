import styled from "styled-components";
import { Utils } from "../../config/Utils";

interface Props {
    width?: string;
    height?: string;
    class?: string;
}

export const ButtonContainer = styled.button<Props>`
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : "40px"};
  padding: 0 16px;
  border: 0;
  border-radius: 8px;
  color: #f9f9f9;
  font-weight: 600;
  cursor: pointer;

  ${props => 
    props.class == undefined &&
    `
      background: ${Utils.COLORS.BLACK};
      :hover {
        background: ${Utils.COLORS.LIGHT_BLACK};
      }
    ` ||
    props.class == "primary" && 
    `
      background: ${Utils.COLORS.PRIMARY};
      :hover {
        background: ${Utils.COLORS.DARK_PRIMARY};
      }
    ` ||
    props.class == "secondary" && 
    `
      background: ${Utils.COLORS.SECONDARY};
      :hover {
        background: ${Utils.COLORS.DARK_SECONDARY};
      }
    `
  }

  :disabled {
    cursor: default;
    background: #ddd;
  }
`;