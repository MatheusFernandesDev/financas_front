import React, { FunctionComponent } from "react";
import { Icon } from "./styles";

interface RefreshProps {
  width?: string,
  height?: string,
}

const index: FunctionComponent<RefreshProps> = ({ width, height }) => {
  return <Icon width={width} height={height} />;
};

export default index;
