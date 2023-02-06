import styled from "styled-components";
import { device } from "../../styles/devices";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 10px;
  margin-bottom: 20px;
`;

export const ContainerArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 96%;
  column-gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;