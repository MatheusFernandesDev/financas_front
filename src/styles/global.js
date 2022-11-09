import Roboto from "../assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "../assets/fonts/Roboto/Roboto-Bold.ttf";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url(${Roboto}) format('truetype');
}

@font-face {
    font-family: 'Roboto Bold';
    font-style: normal;
    font-weight: normal;
    src: url(${RobotoBold}) format('truetype');
}

::placeholder {
    color: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar{
		width: 3px;
}

input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}
	input.error{
		border-color: red !important;
	}

  *{
  font-size: 14px;
  outline: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: Roboto; */
  }

  body,html,#root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
    background: #dededead;
    position: relative !important;
  }

li{
  list-style: none;
}

// scrollbar
/* width */
::-webkit-scrollbar {
	width: 5px;
	max-width: 7px;
	max-height: 7px;
  background: #272C30;
}

/* Track */
::-webkit-scrollbar-track {
  background: #d8d8d8; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
	border-radius: 5px;
  background: rgb(119,119,119); 
	max-width: 3px;
	max-height: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: rgb(85, 85, 85); 
}
::-webkit-scrollbar-thumb:active {
	background: rgb(72,72,72); 
}
`;
