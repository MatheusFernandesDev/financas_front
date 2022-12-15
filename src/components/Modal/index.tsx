import { FunctionComponent, MouseEventHandler } from "react";

import Button from "./Button";

import { Container, Box, Msg, Close, Header, Button1, Buttons, Title } from "./styles";

interface ModalProps {
  style?: any;
  children?: React.ReactNode;
  title?: string;
  message?: string;
  closeText?: string;
  saveText?: string;
  hideSave?: boolean | false;
  changeShowedState?: MouseEventHandler<HTMLButtonElement> | undefined;
  saveHandler?: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  style,
  title,
  hideSave,
  closeText,
  saveText,
  children,
  message,
  changeShowedState,
  saveHandler,
}) => {
  return (
    <Container style={style}>
      <Box>
        <Header>
          <Title>{title}</Title>
          <Button1 onClick={changeShowedState}>
            <Close />
          </Button1>
        </Header>
        {children}
        <Msg>{message}</Msg>
        <Buttons>
          <Button className="primary" click={changeShowedState}>{closeText || "Cancelar"}</Button>
          {!hideSave && <Button className="secondary" click={saveHandler}>{saveText || "Salvar"}</Button>}
        </Buttons>
      </Box>
    </Container>
  );
};

export default Modal;
// eslint-disable-next-line react-hooks/exhaustive-deps
