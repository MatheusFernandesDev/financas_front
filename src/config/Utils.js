/* eslint-disable import/no-anonymous-default-export */
export const Utils = {
	COLORS: {
		PRIMARY: "rgb(249, 249, 249)",
        LIGHT_PRIMARY: "rgba(249, 249, 249, 0.7)",
		SECONDARY: "rgb(143, 68, 253)",
        LIGHT_SECONDARY: "rgba(143, 68, 253, 0.7)",
		BLACK: "rgb(39, 44, 48)",
        LIGHT_BLACK: "rgba(39, 44, 48, 0.7)",
	},
	MONTHS: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],
	BACKGROUND_COLOR: [
		"rgba(255, 99, 132, 0.2)",
		"rgba(54, 162, 235, 0.2)",
		"rgba(255, 206, 86, 0.2)",
		"rgba(75, 192, 192, 0.2)",
		"rgba(153, 102, 255, 0.2)",
		"rgba(255, 159, 64, 0.2)",
	],
	BORDER_COLOR: [
		"rgba(255, 99, 132, 1)",
		"rgba(54, 162, 235, 1)",
		"rgba(255, 206, 86, 1)",
		"rgba(75, 192, 192, 1)",
		"rgba(153, 102, 255, 1)",
		"rgba(255, 159, 64, 1)",
	],
	PERIODS: [
		{
			id: 1 * 60 * 60,
			name: "1 hora atrás",
		},
		{
			id: 6 * 60 * 60,
			name: "6 horas atrás",
		},
		{
			id: 12 * 60 * 60,
			name: "12 horas atrás",
		},
		{
			id: 24 * 60 * 60,
			name: "1 dia atrás",
		},
		{
			id: 3 * 24 * 60 * 60,
			name: "3 dias atrás",
		},
		{
			id: 5 * 24 * 60 * 60,
			name: "5 dias atrás",
		},
		{
			id: 7 * 24 * 60 * 60,
			name: "1 semana atrás",
		},
	],
	INTERVALS: [
		// {
		// 	id: 5 * 1000,
		// 	name: "5s",
		// },
		// {
		// 	id: 10 * 1000,
		// 	name: "10s",
		// },
		{
			id: 30 * 1000,
			name: "30s",
		},
		{
			id: 60 * 1000,
			name: "1min",
		},
		{
			id: 2 * 60 * 1000,
			name: "2min",
		},
		{
			id: 5 * 60 * 1000,
			name: "5min",
		},
		{
			id: 10 * 60 * 1000,
			name: "10min",
		},
		{
			id: 15 * 60 * 1000,
			name: "15min",
		},
		{
			id: 30 * 60 * 1000,
			name: "30min",
		},
	]
};
