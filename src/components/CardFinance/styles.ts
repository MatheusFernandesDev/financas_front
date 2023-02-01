import styled from "styled-components";
import { device } from "../../styles/devices";

interface CircleProps {
  color?: string;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;

  background: #fff;
  padding: 1.8rem;
  border-radius: 2rem;
  margin-top: 1rem;
  box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  transition: all 300ms ease;

  & :hover {
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Title = styled.h3`
  margin: 1rem 0 0.6rem;
  font-size: 1rem;
`;
export const Value = styled.h1`
  font-weight: 800;
  font-size: 1.8rem;
`;

export const Insights = styled.div``;

export const Sales = styled.div`
  svg {
    circle {
      /* stroke-dasharray: 200;
      stroke-dashoffset: -35; */
    }
  }
`;

export const Icons = styled.span<CircleProps>`
  background: ${(props) => {
    switch (props.color) {
      case "balance":
        return "#FFD700";
      case "expense":
        return "#DC3545";
      case "revenue":
        return "#198754";
      default:
        return "#8f44fd";
    }
  }};
  padding: 0.5rem;
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Svg = styled.svg`
  width: 7rem;
  height: 7rem;
`;

export const Circle = styled.circle<CircleProps>`
  fill: none;
  stroke: ${(props) => {
    switch (props.color) {
      case "balance":
        return "#FFD700";
      case "expense":
        return "#DC3545";
      case "revenue":
        return "#198754";
      default:
        return "#8f44fd";
    }
  }};
  stroke-width: 14;
  stroke-linecap: round;
  transform: translate(5px, 5px);
`;
export const Left = styled.div``;

export const Progress = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  border-radius: 50%;
`;
export const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextMuted = styled.small`
  margin-top: 1.6rem;
  display: block;
  color: #7d8da1;
`;

export const Porcent = styled.p`
  color: #111e88;
`;
