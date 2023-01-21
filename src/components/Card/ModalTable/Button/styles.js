import styled from 'styled-components';
import { device } from '../../../../styles/devices'

export const Button = styled.button`
	border-radius: 8px;
	padding: 5px 10px;
	color: white;
	margin-left: 8px;
	cursor: pointer;

	border: 1px solid #0e6efd;
	background-color: #0e6efd;

	@media ${device.mobile}{
		width: 50%;
		padding: 10px 10px;

	}

	&:hover{
		border: 1px solid #005edd;
		background-color: #005edd;
	}

	&.success{
		border: 1px solid #198754;
		background-color: #198754;
	}
	&.success:hover{
		border: 1px solid #097744;
		background-color: #097744;
	}
	
	&.secondary{
		border: 1px solid #6D757D;
		background-color: #6D757D;
	}
	&.secondary:hover{
		border: 1px solid #5D656D;
		background-color: #5D656D;
	}
	
	&.alert{
		border: 1px solid #DC3545;
		background-color: #DC3545;
	}
	&.alert:hover{
		border: 1px solid #CC2535;
		background-color: #CC2535;
	}

	&.warn{
		border: 1px solid #FFC108;
		background-color: #FFC108;
		color: #333;
	}
	&.warn:hover{
		border: 1px solid #DFB100;
		background-color: #DFB100;
		color: #333;
	}

	&:last-child{
		margin-right: 8px;
	}

`;