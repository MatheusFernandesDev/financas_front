import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Box = styled.div`
  background-color: white;
  width: 400px;
  height: 250px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40px auto 50px;
  box-shadow: 2px 2px 10px #686868;
  border-radius: 10px;
`;

export const Msg = styled.div`
  grid-area: span 1 / span 2;
  padding: 10px;
`;

export const Buttons = styled.div`
  grid-area: span 1 / span 2;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const Button1 = styled.button`
  border: none;
  background-color: transparent;
`;

export const Header = styled.div`
  grid-area: span 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  border-bottom: 0.75px solid rgba(0, 0, 0, 0.2);
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Close = styled(MdClose)`
  font-size: 18px;
  right: 5px;
  margin-top: 5px;
  cursor: pointer;
`;
