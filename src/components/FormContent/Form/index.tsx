import React, { FunctionComponent } from "react";
import { Container, ContainerColumn, Title } from "./styles";

interface Props {
    children?: React.ReactNode;
    column?: boolean;
    title?: string | "";
}

const Index: FunctionComponent<Props> = ({ children, title, column }) => {
	return (
        <>
        {!column &&
            <>
                <Title title={title}>{title}</Title>
                <Container>
                    {children}
                </Container>
            </>
        }
        {column &&
            <>
                <Title title={title}>{title}</Title>
                <ContainerColumn>
                    {children}
                </ContainerColumn>
            </>
        }
        </>
	);
}

export default Index;