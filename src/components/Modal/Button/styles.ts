import styled from "styled-components";
import { device } from "../../../styles/devices";
import { Utils } from "../../../config/Utils";

export const Button = styled.button`
  border-radius: 4px;
  padding: 5px 10px;
  color: white;
  margin-left: 8px;
  cursor: pointer;
  min-width: 75px;
  height: 28px;
  border: 1px solid transparent;
  background-color: ${Utils.COLORS.LIGHT_BLACK};
  transition: 0.2s ease-out;

  @media ${device.mobile} {
    width: 50%;
  }

  :disabled {
    cursor: default;
    pointer-events: none;
  }

  &:hover {
    /* border: 1px solid #005edd; */
    background-color: ${Utils.COLORS.BLACK};
  }

  &.success {
    border: 1px solid #198754;
    background-color: #198754;
  }
  &.success:hover {
    border: 1px solid #097744;
    background-color: #097744;
  }

  &.secondary {
    border: 1px solid ${Utils.COLORS.PRIMARY};
    color: ${Utils.COLORS.PRIMARY};
    background-color: ${Utils.COLORS.LIGHT_SECONDARY};
  }
  &.secondary:hover {
    border: 1px solid transparent;
    color: white;
    background-color: ${Utils.COLORS.SECONDARY};
  }

  &.alert {
    border: 1px solid #dc3545;
    background-color: #dc3545;
  }
  &.alert:hover {
    border: 1px solid transparent;
    background-color: #a8202d;
  }

  &.warn {
    border: 1px solid #ffc108;
    background-color: #ffc108;
    color: #333;
  }
  &.warn:hover {
    border: 1px solid #dfb100;
    background-color: #dfb100;
    color: #333;
  }

  &:last-child {
    margin-right: 8px;
  }

  &.add {
    border: 1px solid #145da0;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 25px;
    height: 25px;
    background-color: #145da0;
    color: #fff;
  }
`;
