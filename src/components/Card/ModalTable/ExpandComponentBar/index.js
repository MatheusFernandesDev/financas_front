import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { toast } from 'react-toastify';
import GraphChart from '../../GraphChart';
import Refresh from '../../Refresh';
import {Container} from './styles';

const Index = ({data, loadHandler, chartOptions, refreshPageHandler, replacements, filter}) => {
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
			if(loadHandler) {
				setPD(true);
				refreshPageHandler();
				const response = await loadHandler(replacementsWithData, filter);
				setPD(false);
				setChartData(response);
			}
		}
		const replacementsWithData = giveDataToReplacements(replacements, data);
		getChartData(replacementsWithData)
	}, []);


	return (
		<Container>
				{
					progressPending ? 
						<Refresh/> :
						<GraphChart>
								<Bar
								data={chartData && chartData.formatted}
								options={chartOptions}
								/>
						</GraphChart>
				}
			</Container>
	);
}

export default Index;
