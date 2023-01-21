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
  hideClose?: boolean | false;
  hideCloseButton?: boolean | false;
  disabled?: boolean | false;
  changeShowedState?: MouseEventHandler<HTMLButtonElement> | undefined;
  saveHandler?: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  style,
  title,
  hideSave,
  hideClose,
  hideCloseButton,
  closeText,
  saveText,
  children,
  message,
  disabled,
  changeShowedState,
  saveHandler,
}) => {
  return (
    <Container style={style}>
      <Box>
        <Header>
          <Title>{title}</Title>
          {!hideClose && <Button1 onClick={changeShowedState}>
            <Close />
          </Button1>}
        </Header>
        {children}
        <Msg>{message}</Msg>
        <Buttons>
          {!hideClose || !hideCloseButton && <Button className="primary" disabled={disabled} click={changeShowedState}>{closeText || "Cancelar"}</Button>}
          {!hideSave && <Button className="secondary" disabled={disabled} click={saveHandler}>{saveText || "Salvar"}</Button>}
        </Buttons>
      </Box>
    </Container>
  );
};

export default Modal;
