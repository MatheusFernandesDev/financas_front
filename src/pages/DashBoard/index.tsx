import React, { useEffect, useRef, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";

import api from "../../service/api";
import { isLogged } from "../../helpers/AuthHandler";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import FormContent from "../../components/FormContent";
import DataTableContent from "../../components/DataTableContent";

import { ColumnTitle } from "../../components/DataTableContent/styles";
import ButtonActions from "../../components/DataTableContent/ButtonActions";

import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

import { Container, Linkify } from "./styles";

const DashBoard: React.FC = () => {
  let Logged = false || isLogged();
  const link_ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (Logged == false) {
      if (link_ref.current) {
        link_ref.current.click();
      }
    }
  }, [Logged]);

  return (
    <Container>
      <Header />
      <FormContent children={undefined}></FormContent>
      <NavLink ref={link_ref} to="/" />
    </Container>
  );
};

export default DashBoard;
