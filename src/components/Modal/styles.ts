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
  z-index: 2;
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
  border-top: 0.75px solid rgba(0, 0, 0, 0.2);
`;

export const Buttons = styled.div`
  grid-area: span 1 / span 2;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  border-radius: 8px;
  padding: 5px;
  color: white;
  margin-left: 8px;
  cursor: pointer;

  border: 1px solid #0e6efd;
  background-color: #0e6efd;

  &.success {
    border: 1px solid #198754;
    background-color: #198754;
  }
  &.secondary {
    border: 1px solid #6d757d;
    background-color: #6d757d;
  }
  &.alert {
    border: 1px solid #dc3545;
    background-color: #dc3545;
  }
  &.warn {
    border: 1px solid #ffc108;
    background-color: #ffc108;
    color: #333;
  }

  &:last-child {
    margin-right: 8px;
  }
`;

export const Header = styled.div`
  grid-area: span 1 / span 2;
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const Close = styled(MdClose)`
  font-size: 18px;
  position: absolute;
  right: 5px;
  cursor: pointer;
`;
