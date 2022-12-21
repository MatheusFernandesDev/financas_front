const size = {
	// MOBILE
	mobile: "480px",
	mobile_md: "400px",
	mobile_sm: "320px",
	// TABLET
	tablet_min: "481px",
	tablet_max: "768px",
	// LAPTOP
	laptop_min: "769px",
	laptop_max: "1023px",
	// DESKTOP
	desktop_min: "1024px",
	desktop_max: "1200px",
	// TV / EXTRA LARGE
	tv: "1201px",
	// CHARTS
	chart_desk: "801px",
	chart_mobile_max: "800px",
};

export const device = {
	mobile: `(max-width: ${size.mobile})`,
	mobile_md: `(max-width: ${size.mobile_md})`,
	mobile_sm: `(max-width: ${size.mobile_sm})`,
	tablet_min: `(min-width: ${size.tablet_min})`,
	tablet: `(max-width: ${size.tablet_max})`,
	desktop_min: `(min-width: ${size.desktop_min})`,
	desktop: `(max-width: ${size.desktop_max})`,
	tv: `(min-width: ${size.tv})`,
};
