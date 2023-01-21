import React, { useState } from "react";
import Refresh from "../Refresh";
import { Container, MoreData, Title } from "./styles";
import ModalTable from "./ModalTable";

interface CardProps {
  title?: string;
  height?: number;
  size?: string;
  priorityButton?: boolean | false;
  loading?: boolean | false;
  children?: React.ReactNode;
  hideButton?: boolean | false;
  // MODAL TABLE
  modalTitle?: string;
  modalColumns?: any;
  modalData?: Array<any>;
  modalFilterColumn?: any;
  modalSize?: string;
  modalDefaultSortAsc?: any;
  modalExpandableRows?: any;
  modalExpandableRowsComponent?: any;
}

const Card: React.FC<CardProps> = ({
  title,
  height,
  size,
  priorityButton,
  loading,
  children,
  hideButton,
  modalTitle,
  modalColumns,
  modalData,
  modalFilterColumn,
  modalSize,
  modalDefaultSortAsc,
  modalExpandableRows,
  modalExpandableRowsComponent,
}) => {
  const [modalTable, setModalTable] = useState(false);

  function changeShowedState() {
    setModalTable(!modalTable);
  }

  return (
    <Container height={height} size={size}>
      {title && <Title> {title} </Title>}
      {!hideButton && (
        <MoreData priorityButton={priorityButton} onClick={changeShowedState} />
      )}
      {loading && <Refresh />}
      {children}
      {modalTable && (
        <ModalTable
          size={modalSize || "md"}
          title={modalTitle}
          changeShowedState={changeShowedState}
          columns={modalColumns}
          data={modalData}
          filterColumn={modalFilterColumn}
          defaultSortAsc={modalDefaultSortAsc}
          expandableRows={modalExpandableRows}
          expandableRowsComponent={modalExpandableRowsComponent}
        />
      )}
    </Container>
  );
};

export default Card;
