// MODO JAVASCRIPT
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ptbr from "./locales/pt-br";
import es from "./locales/es";

const resources = {
	en,
	pt: ptbr,
	es,
};

i18n.use(initReactI18next).init({
	resources,
	fallbackLng: "pt",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;

// MODO TYPESCRIPT
// export const defaultNS = 'ns1'
// export const resources = {
//   en: {
//     ns1,
//     ns2,
//   },
// };

// i18n.use(initReactI18next).init({
//   lng: 'en',
//   ns: ['ns1', 'ns2'],
//   defaultNS,
//   resources,
// });
