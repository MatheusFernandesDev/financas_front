import React, { FunctionComponent } from "react";
import { Container, Link, Linkfy } from "./styles";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { BiSave } from "react-icons/bi";
import { SlReload } from "react-icons/sl";
import { IoAddCircleOutline, IoReturnDownBack } from "react-icons/io5";
import { ReactTooltipStyled } from "./Button/styles";

interface Props {
	style?: any;
	saveHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	editHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	newHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	reloadHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	returnHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	hideAll?: boolean | false;
	hideSave?: boolean | false;
	hideNew?: boolean | false;
	hideReload?: boolean | false;
	showReturn?: boolean | false;
	newLink?: string;
	edit?: boolean | false;
	// CLASSES
	newFirst?: boolean | false;
	reloadFirst?: boolean | false;
	editFirst?: boolean | false;
	saveFirst?: boolean | false;
	returnFirst?: boolean | false;
}

const Index: FunctionComponent<Props> = ({
	style,
	edit,
	newLink,
	hideAll,
	hideSave,
	hideNew,
	hideReload,
	showReturn,
	saveHandler,
	editHandler,
	newHandler,
	reloadHandler,
	returnHandler,
	// CLASSES
	newFirst,
	reloadFirst,
	editFirst,
	saveFirst,
	returnFirst,
}) => {
	return (
		<Container style={style} hideAll={hideAll}>
			<ReactTooltipStyled/>
			{!hideNew && (
				<Button title="Novo" newFirst={newFirst} action={newHandler}>
					<IoAddCircleOutline size={25}/>
				</Button>
			)}
			{newLink && (
				<Linkfy href={newLink}>
					<Button title="Novo" newFirst={newFirst}>
						<IoAddCircleOutline size={25}/>
					</Button>
				</Linkfy>
			)}
			{!hideReload && (
				<Button title="Recarregar" reloadFirst={reloadFirst} action={reloadHandler}>
					<SlReload size={22}/>
				</Button>
			)}
			{!hideSave ?
				edit ?
					<Button title="Editar" editFirst={editFirst} action={editHandler}>
						<BiSave size={25}/>
					</Button> :
					<Button title="Salvar" saveFirst={saveFirst} action={saveHandler}>
						<BiSave size={25}/>
					</Button> :
					<></>		
			}
			{/* {!hideSave && (
				<Button title="Salvar" action={saveHandler}>
					<BiSave size={25}/>
				</Button>
			)} */}
			{showReturn && (
				<Button title="Voltar" returnFirst={returnFirst} action={returnHandler}>
					<IoReturnDownBack size={25}/>
				</Button>
			)}
		</Container>
	);
}

export default Index;