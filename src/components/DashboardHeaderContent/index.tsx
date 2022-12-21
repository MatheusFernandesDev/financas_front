import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer";
import { Container } from "./styles";

interface Props {
  children?: React.ReactNode;
  noScroll?: boolean | false;
}

const DashboardHeaderContent: React.FC<Props> = ({ children, noScroll }) => {
  return (
    <Container noScroll={noScroll}>
      {children}
      <Footer />
      <ToastContainer theme="dark" />
    </Container>
  );
};

export default DashboardHeaderContent;
