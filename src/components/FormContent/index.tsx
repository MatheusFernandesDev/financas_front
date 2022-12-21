import React, { FunctionComponent } from "react";

import MainContainerHeader from "./MainContainerHeader";

import { Container, MainContainer, ContentFormContainer } from "./styles";

interface FormContentProps {
  style?: any;
  height?: string;
  children?: React.ReactNode;
  saveHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  editHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  newHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  reloadHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  returnHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  hideNew?: boolean | false;
  hideReload?: boolean | false;
  hideSave?: boolean | false;
  showReturn?: boolean | false;
  hideAll?: boolean | false;
  newLink?: string;
  edit?: boolean | false;
	// CLASSES
	newFirst?: boolean | false;
	reloadFirst?: boolean | false;
	editFirst?: boolean | false;
	saveFirst?: boolean | false;
	returnFirst?: boolean | false;
}

const FormContent: FunctionComponent<FormContentProps> = ({
  style,
  height,
  children,
  saveHandler,
  editHandler,
  newHandler,
  reloadHandler,
  returnHandler,
  hideNew,
  hideReload,
  hideSave,
  showReturn,
  newLink,
  hideAll,
  edit,
	// CLASSES
	newFirst,
	reloadFirst,
	editFirst,
	saveFirst,
	returnFirst,
}) => {
  return (
    <Container>
      <MainContainer>
        <MainContainerHeader
          style={style}
          edit={edit}
          newLink={newLink}
          hideAll={hideAll}
          hideSave={hideSave || hideAll}
          hideNew={hideNew || hideAll}
          hideReload={hideReload || hideAll}
          showReturn={showReturn}
          saveHandler={saveHandler}
          editHandler={editHandler}
          newHandler={newHandler}
          reloadHandler={reloadHandler}
          returnHandler={returnHandler}
          // CLASSES
          newFirst={newFirst}
          reloadFirst={reloadFirst}
          editFirst={editFirst}
          saveFirst={saveFirst}
          returnFirst={returnFirst}
        />
        <ContentFormContainer style={style} height={height}>{children}</ContentFormContainer>
      </MainContainer>
    </Container>
  );
};

export default FormContent;
