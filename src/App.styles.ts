import styled from "styled-components";
import { device } from "./styles/devices";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const Header = styled.div`
  margin: 0;
  background-color: darkblue;
  height: 150px;
`;
export const FormContainer = styled.div``;
export const Title = styled.h1`
  color: whitesmoke;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;
export const Footer = styled.div`
  background-color: black;
  height: 150px;
`;
