import React, { FunctionComponent } from "react";

import MainContainerHeader from "./MainContainerHeader";

import { Container, MainContainer, ContentFormContainer } from "./styles";

interface FormContentProps {
  style?: any;
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
}

const FormContent: FunctionComponent<FormContentProps> = ({
  style,
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
}) => {
  return (
    <Container style={style}>
      <MainContainer>
        <MainContainerHeader
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
        />
      </MainContainer>
      <ContentFormContainer>{children}</ContentFormContainer>
    </Container>
  );
};

export default FormContent;
