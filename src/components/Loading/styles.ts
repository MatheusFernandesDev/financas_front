import styled, { keyframes } from "styled-components";

interface Temp {
  RotationBack?: string;
  LoaderOut?: string;
  Rotation?: string;
  Loader?: string;
}
export const LoaderOut = keyframes`
100% {
    visibility: hidden;
    opacity: 0;

}
`;
export const Container = styled.div<Temp>`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background: #1a1a1a;

  /* .loaded {
    animation: ${LoaderOut} 0.3s both;
  } */
`;

export const Rotation = keyframes`
0% {rotate: 0deg;}
100% {rotate: 360deg;}

`;

export const RotationBack = keyframes`
0% {rotate: 0deg;}
100% {rotate: -360deg;}

`;

export const Loader = styled.span<Temp>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 3px solid;
  border-color: #f9f9f9 #f9f9f9 transparent transparent;
  scale: 1.5;
  animation: ${Rotation} 1.5s linear infinite;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    right: 0;
    top: 4px;
    bottom: 0;
    border: 3px solid;
    border-color: transparent transparent #8f44fd #8f44fd;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform-origin: center center;
    animation: ${RotationBack} 0.5s linear infinite;
  }
`;
