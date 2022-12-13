import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
    display: flex;
`;

export const Title = styled.div`
    font-size: 25px;
    margin-left: 20px;
    margin-bottom: 20px;
`

export const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px 10px;
    width: 90%;
    margin-left: 20px;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }
`;