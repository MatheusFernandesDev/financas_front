import { title } from "process";
import React, { ComponentType } from "react";
import { IconType } from "react-icons/lib";
import { MdAttachMoney } from "react-icons/md";

import {
  Container,
  Icons,
  Insights,
  Left,
  Middle,
  Number,
  Porcent,
  Progress,
  Sales,
  TextMuted,
  Title,
  Value,
  Svg,
  Circle,
} from "./styles";

interface CardProps {
  title?: string;
  value?: string | number;
  icon?: IconType | any;
  color?: string;
  porcent?: string;
}

const CardFinance: React.FC<CardProps> = ({
  title,
  value,
  icon,
  color,
  porcent,
}) => {
  return (
    <Container>
      <Sales>
        <Icons color={color}> {icon} </Icons>
        <Middle>
          <Left>
            <Title>{title}</Title>
            <Value>{value}</Value>
          </Left>
          <Progress>
            <Svg>
              <Circle color={color} cx="38" cy="38" r="36"></Circle>
            </Svg>
            <Number>
              <Porcent>{`${porcent}%`}</Porcent>
            </Number>
          </Progress>
        </Middle>
        <TextMuted>Last 24 Hours</TextMuted>
      </Sales>
    </Container>
  );
};

export default CardFinance;
