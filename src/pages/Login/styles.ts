import styled, { keyframes } from "styled-components";

const pan = keyframes`
    from {
        background-position: 100%
    }
    to {
        background-position: 15% 50%;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0 24px;
    background-image: url('https://acegif.com/wp-content/uploads/gifs/raining-money-26.gif');
    background-position: bottom;
    /* background-repeat: no-repeat;  */
    background-size: cover;
    /* animation: ${pan} 6s infinite alternate linear;  */
`;

export const Componente = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Label = styled.div`
    font-size: 15px;

`;

export const Link = styled.a`
    color: #3a89ff;
    cursor: pointer;
`;

export const Form = styled.div`
    width: 100%;
    margin: 0;
    display: grid;
    gap: 16px;
`;
export const Card = styled.div`
    width: 25%;
    padding: 70px 30px 44px;
    border-radius: 24px;
    background: #fff;
    text-align: center;

    & > h2 {
        margin: 0 0 12px;
        font-size: 36px;
        font-weight: 600;
    }
    & > h3 {
        margin: 0 0 30px;
        font-weight: 500;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.38);
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 56px;
    padding: 0 16px;
    border: 0;
    border-radius: 8px;
    background: #3a89ff;
    color: #f9f9f9;
    font-weight: 600;
    cursor: pointer;
`;

export const Text = styled.input.attrs({
    type:'text'
})`
    height: 28px;
    width: 100%;
	border-radius: 5px;
	border-width: 1px;
	border-color: #e9e9e9;
    padding: 0 5px;
	margin-bottom: 5px;
	padding-left: 10px;
`;
