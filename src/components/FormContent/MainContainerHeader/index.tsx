import React, { FunctionComponent } from "react";
import { Container, Link, Linkfy } from "./styles";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { BiSave } from "react-icons/bi";
import { SlReload } from "react-icons/sl";
import { IoAddCircleOutline } from "react-icons/io5";

interface Props {
	saveHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	newHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	reloadHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	hideSave?: boolean | false;
	hideNew?: boolean | false;
	hideReload?: boolean | false;
	customSaveTxt?: string;
	newLink?: string;
}

const Index: FunctionComponent<Props> = ({
	saveHandler,
	customSaveTxt,
	hideSave,
	newHandler,
	reloadHandler,
	hideNew,
	hideReload,
	newLink
}) => {
	const { t } = useTranslation();

	const saveBtnTxt = customSaveTxt || "Salvar";
	return (
		<Container>
			{!hideNew && (
				<Button title={t("NEW")} action={newHandler}>
					<IoAddCircleOutline size={25}/>
				</Button>
			)}
			{newLink && (
				<Linkfy href={newLink}>
					<Button title="Novo">
						<IoAddCircleOutline size={25}/>
					</Button>
				</Linkfy>
			)}
			{!hideReload && (
				<Button title={t("REFRESH")} action={reloadHandler}>
					<SlReload size={22}/>
				</Button>
			)}
			{!hideSave && (
				<Button title={saveBtnTxt} action={saveHandler}>
					<BiSave size={25}/>
				</Button>
			)}
		</Container>
	);
}

export default Index;