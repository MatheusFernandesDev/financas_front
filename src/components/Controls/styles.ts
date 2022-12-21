import styled from "styled-components";
import { Utils } from "../../config/Utils";
import { device } from "../../styles/devices";
import DatePicker from "../DatePicker";
import { IoMdCalendar } from "react-icons/io";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

interface ContentProps {
  expand?: boolean | false;
}

export const Content = styled.div<ContentProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
  /* display: flex; */
  align-items: ${(props) => (props.expand ? "start" : "center")};
  position: relative;
  height: ${(props) => (props.expand ? "150px" : "60px")};
  width: 97%;
  margin: 20px 0px 0px 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${Utils.COLORS.DARK_SECONDARY};
  /* flex-wrap: wrap; */

  @media ${device.desktop} {
    width: 90vw;
  }
  @media ${device.tablet} {
    width: 82vw;
    height: ${(props) => (props.expand ? "340px" : "60px")};
    overflow-y: hidden;
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobile} {
    /* flex-wrap: wrap; */
    top: 70px;
    left: 3px;
    //
    justify-content: center;
    margin: 5px 5px 75px 5px;
    width: 96vw;
    height: ${(props) => (props.expand ? "350px" : "60px")};
  }
`;

// EXPAND BUTTON
export const ExpandButton = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media ${device.desktop} {
    visibility: hidden;
  }
  @media (max-width: 1300px) {
    visibility: visible;
  }
`;
export const More = styled(MdExpandMore)`
  width: 20px;
  height: 20px;
  color: white;
`;
export const Less = styled(MdExpandLess)`
  width: 20px;
  height: 20px;
  color: white;
`;

// PERIOD BUTTON
export const Button = styled.button`
  height: 31px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${Utils.COLORS.PRIMARY};
  background-color: ${Utils.COLORS.BLACK};

  :hover {
    background-color: ${Utils.COLORS.LIGHT_BLACK};
  }
`;
export const FilterArea = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  width: 100%;
  column-gap: 15px;

  @media ${device.tablet} {
    /* flex-wrap: wrap; */
    grid-template-columns: 1fr 1fr;
    row-gap: 15px;
  }
`;
export const DateArea = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  column-gap: 10px;
  margin-right: 5px;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 10px; */
`;
export const Title = styled.span`
  font-size: 11px;
  color: white;
  user-select: none;

  @media ${device.mobile} {
    font-size: 10px;
  }
`;
export const Image = styled(IoMdCalendar)`
  color: white;
  width: 25px;
  height: 25px;

  @media ${device.mobile} {
    width: 20px;
    height: 20px;
  }
`;
export const DateInput = styled(DatePicker).attrs({
  dateFormat: "d/MM/yyyy",
})`
  margin-top: 20px;
  border: 1px solid ${Utils.COLORS.DARK_SECONDARY};
  padding-left: 12px;

  @media ${device.mobile} {
    width: 100%;
  }
`;
