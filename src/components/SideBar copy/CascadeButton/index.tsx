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
    title?: string;
}

const CascadeButton: React.FC<CascadeButtonProps> = ({
    children,
    Icon,
    title,
}) => {
    return (
        <Container>
            <MainContainer>
                <Icon style={{ height: "25px", width: "25px" }}/>
                <Title>{title}</Title>
            </MainContainer>
            <SubContainer>
                <ItemsLine/>
                {children}
            </SubContainer>
        </Container>
    )
}

export default CascadeButton;