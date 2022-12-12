import styled from 'styled-components';

export const Container = styled.button`
  min-width: 50px;
  padding: 0 10px;
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
	flex-wrap: nowrap;
  background-color: transparent;
  border: none;
  cursor: pointer;
  user-select: none;


  &:hover{
    background-color: rgba(0,0,0,.3)
  }

  & span{
    margin-left: 5px
  }

  &:disabled{
    color: gray;
    cursor: default;
  }

  &:hover:disabled{
    background-color: transparent;
  }
`;
