import React from "react";
import { Icon } from "./styles";

const index = ({ width, height, ...rest }) => {
  return <Icon width={width} height={height} draggable={false} {...rest} />;
};

export default index;
