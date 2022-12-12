import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 20px 5px;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const Row = styled.tr`
	border-bottom: 1px solid rgba(0,0,0,.12);
	`;

export const Header = styled.th`
	width: 50%;
	padding-left: 10px;
	text-align: start;
	`;

export const Data = styled.td`
	padding: 15px 0;
	max-height: 20px;
	text-align: ${({textAlign}) => textAlign || 'center'};
`;

export const Actions = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;