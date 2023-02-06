import styled from "styled-components";

import { Utils } from "../../config/Utils";
import { device } from "../../styles/devices";
import { BsPlus } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import SelectOption from "../../components/SelectOption";

interface ContainerProps {
  size?: string;
  column?: boolean;
  height?: number;
}

interface ButtonProps {
  priorityButton?: boolean;
}
interface SelectProps {
  hide?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  flex-grow: 1;
  align-items: center;
  /* justify-content: center; */
  width: ${(props) => {
    if(props.size == "full") {
      return "100%";
    } else if(props.size == "lg") {
      return "69%";
    } else if(props.size == "sm") {
      return "29%";
    } else {
      return "49%";
    }
  }};
  position: relative;
  height: ${(props) => (props.height ? props.height * 14 : 420)}px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 18px;
  padding: 10px 30px;

  @media ${device.tablet} {
    width: 100%;
    padding: 10px 75px;
  }
  @media ${device.mobile} {
    width: 100%;
    padding: 10px 10px;
    overflow-x: auto;
  }
`;

export const Title = styled.span`
  font-family: Roboto Bold;
  position: absolute;
  top: 15px;
  font-size: 13px;
  color: #303030;
  user-select: none;
`;

export const MoreData = styled(BsPlus)<ButtonProps>`
  position: absolute;
  right: 50px;
  top: 7px;
  height: 25px;
  width: 25px;
  color: ${Utils.COLORS.SECONDARY};
  cursor: pointer;
  /* ${(props) => props.priorityButton && "z-index: 1"}; */

  &:hover {
    opacity: 0.7;
  }

  @media ${device.mobile} {
    left: 10px;
  }
`;
export const Select = styled(SelectOption)<SelectProps>`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  height: 25px;

  visibility: ${(props) => (props.hide ? "hidden" : "visible")};

  @media ${device.desktop} {
    width: 120%;
  }

  @media ${device.tablet} {
    margin-left: 0;
    width: 420px;
  }

  @media (max-width: 650px) {
    width: 280px;
  }

  @media ${device.mobile} {
    width: 220px;
    font-size: 12px;
  }

  @media (max-width: 425px) {
    width: 190px;
  }

  @media ${device.mobile_md} {
    width: 170px;
  }

  @media ${device.mobile_sm} {
    width: 130px;
  }
`;
