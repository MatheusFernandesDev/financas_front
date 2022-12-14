import React, { FunctionComponent } from "react";
import { Container, Link, Linkfy } from "./styles";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { BiSave } from "react-icons/bi";
import { SlReload } from "react-icons/sl";
import { IoAddCircleOutline, IoReturnDownBack } from "react-icons/io5";

interface Props {
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
}

const Index: FunctionComponent<Props> = ({
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
	returnHandler
}) => {
	return (
		<Container hideAll={hideAll}>
			{!hideNew && (
				<Button title="Novo" action={newHandler}>
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
				<Button title="Recarregar" action={reloadHandler}>
					<SlReload size={22}/>
				</Button>
			)}
			{!hideSave ?
				edit ?
					<Button title="Editar" action={editHandler}>
						<BiSave size={25}/>
					</Button> :
					<Button title="Salvar" action={saveHandler}>
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
				<Button title="Voltar" action={returnHandler}>
					<IoReturnDownBack size={25}/>
				</Button>
			)}
		</Container>
	);
}

export default Index;