import React, { useState } from "react";
import { Container, ItemsLine, MainContainer, SubContainer, Title } from "./styles";


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
    const [actived, setActived] = useState<boolean>(false);

    return (
        <Container>
            <MainContainer onClick={() => setActived(!actived)}>
                <Icon style={{ height: "25px", width: "25px" }}/>
                <Title menu={menu}>{title}</Title>
            </MainContainer>
            <SubContainer actived={actived}>
                <ItemsLine/>
                {children}
            </SubContainer>
        </Container>
    )
}

export default CascadeButton;