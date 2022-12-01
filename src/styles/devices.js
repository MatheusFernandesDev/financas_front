const size = {
	mobile: "500px",
	mobile_md: "400px",
	mobile_sm: "330px",
	tablet_max: "1023px",
	desktop: "1024px",
	tv: "1336px",
	chart_desk: "801px",
	chart_mobile_max: "800px",
};

export const device = {
	mobile: `(max-width: ${size.mobile})`,
	mobile_md: `(max-width: ${size.mobile_md})`,
	mobile_sm: `(max-width: ${size.mobile_sm})`,
	tablet: `(max-width: ${size.tablet_max})`,
	desktop: `(min-width: ${size.desktop})`,
	tv: `(mix-width: ${size.tv})`,
};
