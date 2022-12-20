import React, { useState } from "react";
import {
  Container,
  ItemsLine,
  MainContainer,
  SubContainer,
  Title,
} from "./styles";

interface CascadeButtonProps {
  children?: React.ReactNode;
  Icon?: any;
  menu?: boolean | false;
  title?: string;
}

const CascadeButton: React.FC<CascadeButtonProps> = ({
  children,
  Icon,
  title,
  menu,
}) => {
  const [actived, setActived] = useState<boolean>(false);

  return (
    <Container>
      <MainContainer onClick={() => setActived(!actived)}>
        <Icon style={{ height: "25px", width: "25px" }} />
        <Title menu={menu}>{title}</Title>
      </MainContainer>
      <SubContainer menu={menu} actived={actived}>
        <ItemsLine menu={menu}/>
        {children}
      </SubContainer>
    </Container>
  );
};

export default CascadeButton;
