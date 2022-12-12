import React from "react";
import { Container, Table, Row, Header, Data, Actions } from "./styles";
import getProp from '../../../helpers/getProp';

const index = ({ data, expandColumns }) => {
	return (
		<Container>
			<Actions>
				{(function () {
					if (expandColumns) {
						const actionsColumn = expandColumns.find(column => column.actions);
						if (actionsColumn && !actionsColumn.omit && actionsColumn.actions) {
							return data && actionsColumn.actions(data);
						}
						return <></>
					}
					return <></>
				})()}
			</Actions>
			<Table>
				{expandColumns &&
					expandColumns.map((column) => {
						if (!column.omit) {
							return (
								<Row>
									<Header> {column.title ? column.title : ""}</Header>
									<Data textAlign={column.textAlign && column.textAlign}>
										{data && column.selector && getProp(data, column.selector)
											? getProp(data, column.selector)
											: ""}
									</Data>
								</Row>
							);
						} else {
							return <></>
						}
					})}
			</Table>
		</Container>
	);
};

export default index;
