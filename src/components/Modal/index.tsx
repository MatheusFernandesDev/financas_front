import { FunctionComponent } from "react";

import { Container, Box, Msg, Close, Header, Buttons, Title } from "./styles";

interface ModalProps {
  children?: React.ReactNode;
  title?: string;
  content?: string | undefined;
  showed?: boolean | false;
  changeShowedState?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Modal: FunctionComponent<ModalProps> = ({
  title,
  content,
  children,
  showed,
  changeShowedState,
}) => {
  return (
    <Container>
      <Box>
        <Header>
          <Title>{title}</Title>
          {/* <Close changeShowedState={changeShowedState} /> */}
        </Header>
        <Msg>{content}</Msg>
        <Buttons>{children}</Buttons>
      </Box>
    </Container>
  );
};

export default Modal;
// eslint-disable-next-line react-hooks/exhaustive-deps
