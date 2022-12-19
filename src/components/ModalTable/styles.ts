import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import {device} from '../../styles/devices';

interface BoxProps {
	size?: string;
}

export const Container = styled.div`
	background-color: rgba(0,0,0,.2);
	position: fixed;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items:center;
	justify-content: center;
	top: 0;
	left: 0;
`;

export const Box = styled.div<BoxProps>`
	background-color: white;
	width: ${props => {
		switch(props.size){
		case 'full':
			return '95vw';
		case 'md':
			return '1000px';
		case 'sm':
			return '400px';
		default:
			return '400px';
		}
	}};

	height: ${props => {
		switch(props.size){
		case 'full':
			return '90vh';
		case 'md':
			return '650px';
		case 'sm':
			return '400px';
		default:
			return '650px';
		}
	}};

	@media ${device.mobile}{
		width: 90%;
		height: ${props => {
			switch(props.size){
			case 'full':
				return '85vh';
			case 'md':
				return '700px';
			case 'sm':
				return '400px';
			default:
				return '700px';
			}
		}};
	}

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 40px auto 50px;
	border-radius: 10px;
	box-shadow: 3px 3px 6px 0 rgba(0,0,0,.3);
`;

export const Msg = styled.div`
	grid-area: span 1 / span 2;
	padding: 10px;
	border-top: .75px solid rgba(0,0,0,.2);
	overflow-y: hidden;
`;

export const Buttons = styled.div`
	grid-area: span 1 / span 2;
	align-items: center;
	display: flex;
	justify-content: flex-end;
`;

export const Button = styled.button`
	border-radius: 8px;
	padding: 5px;
	color: white;
	margin-left: 8px;
	cursor: pointer;

	border: 1px solid #0e6efd;
	background-color: #0e6efd;

	&.success{
		border: 1px solid #198754;
		background-color: #198754;
	}
	&.secondary{
		border: 1px solid #6D757D;
		background-color: #6D757D;
	}
	&.alert{
		border: 1px solid #DC3545;
		background-color: #DC3545;
	}
	&.warn{
		border: 1px solid #FFC108;
		background-color: #FFC108;
		color: #333;
	}

	&:last-child{
		margin-right: 8px;
	}

`;

export const Header = styled.div`
	background-color: white;
	grid-area: span 1 / span 2;
	display: flex;
	align-items: center;
	padding-left: 10px;
	position: relative;
	border-radius: 10px;
`;

export const Title = styled.span.attrs(props => ({
	title: props.children,
}))`
	font-size: 20px;
	white-space: nowrap;
	text-overflow: ellipsis;
	max-width: 95%;
	overflow: hidden;
`;

export const Close = styled(MdClose)`
	font-size: 18px;
	position: absolute;
	right: 5px;
	cursor: pointer;
`;