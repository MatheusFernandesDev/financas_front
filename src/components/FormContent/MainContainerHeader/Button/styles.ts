import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

export const Container = styled.button`
  min-width: 50px;
  padding: 0 10px;
  color: white;
  height: 100%;
  width: 120px;
  display: flex;
  justify-content: center;
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
  
	&.newFirst {
		border-top-left-radius: 10px;
	}
	&.reloadFirst {
		border-top-left-radius: 10px;
	}
	&.editFirst {
		border-top-left-radius: 10px;
	}
	&.saveFirst {
		border-top-left-radius: 10px;
	}
	&.returnFirst {
		border-top-left-radius: 10px;
	}
`;

export const ReactTooltipStyled = styled(ReactTooltip).attrs({
	place: "right",
	effect: "solid",
	id: "header-form",
})``;