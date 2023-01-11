import React, { useEffect, useState } from "react";
import { ClearButton, SearchField, Container } from "./styles";
import { MdClear, MdSearch } from "react-icons/md";
import randomString from "../../../helpers/randomString";
import Select from "./Select";

const Index = ({
	searchServer,
	searchServerHandler,
	changeHasSearched,
	filterColumns,
	filterColumn,
	setFilterColumn,
	filterText,
	onFilter,
	onClear,
	tableName,
}) => {
	useEffect(() => {
		setFilterColumn(filterColumns && filterColumns[0].id);
	}, []);

	const [placeholder, setPlaceholder] = useState("");
	useEffect(() => {
		setPlaceholder(
			filterColumns &&
				filterColumns
					.find((column) => column.id === filterColumn)
					?.name.toLowerCase()
		);
	}, [filterColumn, filterColumns]);

	// DESNECESSARIO
	// function enterHandler(e) {
	// 	if (e.key === "Enter") {
	// 		e.preventDefault();
	// 		searchServerHandler(1, 30, e.target.value, filterColumn);
	// 		changeHasSearched(true, filterColumn, e.target.value);
	// 	}
	// }

	const [filterTextLocal, setFilterTextLocal] = useState("");

	return (
		<Container>
			<Select
				options={filterColumns}
				onChange={(event) => setFilterColumn(event.target.value)}
			/>
			<SearchField
				id={`search_${tableName || randomString(5)}`}
				type="text"
				placeholder={`Filtrar por ${placeholder}`}
				aria-label="Search Input"
				value={filterText}
				onChange={(event) => {
					onFilter(event);
					setFilterTextLocal(event.target.value);
				}}
				// onKeyPress={enterHandler} (desnecessario)
			/>
			<ClearButton
				onClick={
					searchServer
						? () => {
								searchServerHandler(1, 30, filterTextLocal, filterColumn);
								changeHasSearched(true, filterColumn, filterTextLocal);
						  }
						: onClear
				}
			>
				{searchServer ? (
					<MdSearch style={{ width: "20px", height: "20px", color: "white" }} />
				) : (
					<MdClear style={{ width: "20px", height: "20px", color: "white" }} />
				)}
			</ClearButton>
			{searchServer && (
				<MdClear
					onClick={() => {
						searchServerHandler(1, 30);
						onClear();
						changeHasSearched(false, undefined, "");
					}}
					style={{
						width: "15px",
						height: "15px",
						position: "absolute",
						right: "12%",
						top: 8,
						cursor: "pointer",
					}}
				/>
			)}
		</Container>
	);
};

export default Index;
