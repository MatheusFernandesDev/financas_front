import React from "react";
import { IconType } from "react-icons/lib";

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
    menu?: boolean;
    title?: string;
}

const CascadeButton: React.FC<CascadeButtonProps> = ({
    children,
    Icon,
    title,
    menu,
}) => {
    return (
        <Container>
            <MainContainer>
                <Icon style={{ height: "25px", width: "25px" }}/>
                <Title menu={menu}>{title}</Title>
            </MainContainer>
            <SubContainer>
                <ItemsLine/>
                {children}
            </SubContainer>
        </Container>
    )
}

export default CascadeButton;