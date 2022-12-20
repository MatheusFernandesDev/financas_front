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
  display: flex;
  /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  align-items: ${(props) => (props.expand ? "start" : "center")};
  position: relative;
  height: ${(props) => (props.expand ? "200px" : "60px")};
  width: 90vw;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${Utils.COLORS.DARK_SECONDARY};

  @media ${device.desktop} {
    width: 93vw;
  }
  @media ${device.tablet} {
    width: 90vw;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 850px) {
    width: 85vw;
  }
  @media ${device.mobile} {
    flex-wrap: wrap;
    justify-content: center;
    width: 75vw;
    padding-left: 20px;
    overflow-y: hidden;
    height: ${(props) => (props.expand ? "430px" : "60px")};
    /* grid-template-columns: 1fr; */
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
export const FilterArea = styled.div`
  display: flex;
  column-gap: 15px;

  @media ${device.mobile} {
    flex-wrap: wrap;
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
    width: 70vw;
  }
`;
