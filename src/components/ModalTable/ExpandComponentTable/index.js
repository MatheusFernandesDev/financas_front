import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DataTableContent from '../../DataTableContent';

const Index = ({
	data,
	loadHandler,
	columns,
	title,
	refreshPageHandler,
	filterColumn,
	filterPlaceholder,
	defaultSortField,
	defaultSortAsc,
	replacements
}) => {
	if (title && typeof title === "function") {
		title = title(data);
	}
	function giveDataToReplacements(replacements, data) {
		try {
			const keys = Object.keys(replacements);
			const newObj = {};
			let replacementsWithData;
			for (const key of keys) {
				if (typeof replacements[key] === 'function') {
					newObj[key] = replacements[key](data);
				}
				replacementsWithData = {...replacements, ...newObj};
			}
			return replacementsWithData;
		} catch (err) {
			toast.error("Erro nas propriedades do componente de expand da tabela.");
			return {};
		}
	}
	
	const [chartData, setChartData] = useState([]);
	const [progressPending, setPD] = useState(true);
	
	useEffect(() => {
		async function getChartData(replacementsWithData) {
			if (loadHandler) {
				setPD(true);
				refreshPageHandler();
				const response = await loadHandler(replacementsWithData);
				setChartData(response);
				setPD(false);
			}
		}
		const replacementsWithData = giveDataToReplacements(replacements, data);
		getChartData(replacementsWithData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<DataTableContent
			title={title}
			progressPending={progressPending}
			columns={columns}
			data={chartData}
			filterColumns={filterColumn}
			filterPlaceholder={filterPlaceholder}
			height={'5vh'}
			defaultSortField={defaultSortField}
			defaultSortAsc={defaultSortAsc}
		/>
	);
};

export default Index;
