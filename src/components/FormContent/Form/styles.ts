import styled from "styled-components";
import { device } from "../../../styles/devices";

interface TitleProps {
    title?: string;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px 10px;
    width: 90%;
    margin-left: 20px;
    padding: 10px 0 15px 0;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }
`;

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 20px 10px;
    margin-left: 20px;
    padding: 10px 0 15px 0;

    @media ${device.mobile} {
        width: 90%;
    }
    @media ${device.mobile_sm} {
        width: 80%;
    }
`;

export const Title = styled.div<TitleProps>`
    display: ${props => props.title ? 'block' : 'none'};
    font-size: 25px;
    margin-left: 20px;
    margin-bottom: 10px;
`