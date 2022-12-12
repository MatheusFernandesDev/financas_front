import React, { FunctionComponent } from "react";

import MainContainerHeader from "./MainContainerHeader";

import { Container, MainContainer, ContentFormContainer } from "./styles";

interface FormContentProps {
  children?: React.ReactNode;
  saveHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  newHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  reloadHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  hideNew?: boolean | false;
  hideReload?: boolean | false;
  hideSave?: boolean | false;
  hideAll?: boolean | false;
  customSaveTxt?: string;
  newLink?: string;
}

const FormContent: FunctionComponent<FormContentProps> = ({
  children,
  saveHandler,
  newHandler,
  reloadHandler,
  hideNew,
  hideReload,
  hideSave,
  customSaveTxt,
  newLink,
  hideAll,
}) => {
  return (
    <Container>
      <MainContainer>
        <MainContainerHeader
          newLink={newLink}
          saveHandler={saveHandler}
          customSaveTxt={customSaveTxt}
          hideSave={hideSave || hideAll}
          hideNew={hideNew || hideAll}
          hideReload={hideReload || hideAll}
          newHandler={newHandler}
          reloadHandler={reloadHandler}
        />
      </MainContainer>
      <ContentFormContainer>{children}</ContentFormContainer>
    </Container>
  );
};

export default FormContent;
