import styled, { keyframes } from "styled-components";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import SelectOption from "../../components/SelectOption";

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
  background-image: url("https://acegif.com/wp-content/uploads/gifs/raining-money-26.gif");
  background-position: bottom;
  background-size: cover;
	border: 1px solid transparent;
	border-radius: 18px;
  overflow-y: hidden;
  overflow-x: hidden;
  /* animation: ${pan} 6s infinite alternate linear;  */
`;

export const Linkfy = styled.a`
  color: #3a89ff;
  cursor: pointer;

  &:disabled {
    cursor: default;
    background: rgba(58, 137, 255, 0.7);
  }
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
  position: relative;
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
  height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 8px;
  background: #272c30 /*#3a89ff*/;
  color: #f9f9f9;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(39, 44, 48, 0.9);
  }
  &:disabled {
    cursor: default;
    background: rgba(39, 44, 48, 0.7);
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled(TextInput)`
  height: 28px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: #e5e5e5;
  padding: 0 5px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export const Password = styled(PasswordInput)`
  height: 28px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: #e5e5e5;
  padding: 0 5px;
  background-color: white;
  margin-bottom: 5px;
  padding-left: 10px;
`;

export const Select = styled(SelectOption)`
  height: 28px;
  width: 100%;
  padding: 0 5px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #e5e5e5;
  background-color: white;
`;
