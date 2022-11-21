import styled from "styled-components";

export const Container = styled.div`
	display: flex;
  flex-direction: column;
	align-items: flex-start;

	& > label {
		font-size: 15px;
	}
`;

export const Select = styled.select`
  height: 28px;
  width: 100%;
  padding: 0 5px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
`;