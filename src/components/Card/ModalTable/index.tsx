import React, { useEffect } from 'react'
import {Container, Box, Msg, Close, Header, Buttons, Title} from './styles'
import Button from './Button'
import DataTable from '../../DataTableContent';

interface ModalTableProps {
	size?: string | 'md';
	title?: string | 'Título';
	changeShowedState?: React.MouseEventHandler<SVGElement> | undefined;
	columns?: any;
	data?: any;
	filterColumn?: any;
	defaultSortAsc?: any;
	expandableRows?: any;
	expandableRowsComponent?: any;
}

const ModalTable: React.FC<ModalTableProps> = ({
	size, 
	title, 
	changeShowedState,
	columns,
	data,
	filterColumn,
	defaultSortAsc,
	expandableRows,
	expandableRowsComponent
}) => {	
	useEffect(() => {
		function listener (event: any) {
			if (event.key === "Escape") {
				changeShowedState;
			}
		}

		document.addEventListener('keydown', listener);

		return () => {
			document.removeEventListener('keydown', listener);
		};
	}, [changeShowedState]);
	
	return (
		<Container>
			<Box size={size}>
				<Header>
					<Title>
						{title}
					</Title> 
					<Close onClick={changeShowedState}/>
				</Header>
				<Msg>
					<DataTable
						columns={columns || []}
						data={data || []}
						filterColumns={filterColumn || []}
						defaultSortAsc={defaultSortAsc}
						expandableRows={expandableRows}
						expandableRowsComponent={expandableRowsComponent}
					/>
				</Msg>
				<Buttons>
					<Button onClick={changeShowedState} className="secondary">Fechar</Button>
				</Buttons>
			</Box>
		</Container>
	)
}

export default ModalTable;