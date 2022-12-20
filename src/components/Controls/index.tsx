import React, { useState } from "react";
import { Container } from "../../App.styles";
import SelectOption from "../SelectOption";
import {
  Content,
  ExpandButton,
  DateArea,
  Icon,
  Image,
  Less,
  More,
  Title,
  DateInput,
  FilterArea,
} from "./styles";

interface ControlsProps {
  children?: React.ReactNode;
  monthState?: number;
  monthOnChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  startDate?: Date | null;
  setStartDate?: any;
  endDate?: Date | null;
  setEndDate?: any;
}

const Controls: React.FC<ControlsProps> = ({
  children,
  monthState,
  monthOnChange,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [toggleExpand, setToggleExpand] = useState<boolean>(false);
  const months = [
    { id: 0, name: "Janeiro" },
    { id: 1, name: "Fevereiro" },
    { id: 2, name: "Março" },
    { id: 3, name: "Abriu" },
    { id: 4, name: "Maio" },
    { id: 5, name: "Junho" },
    { id: 6, name: "Julho" },
    { id: 7, name: "Agosto" },
    { id: 8, name: "Setembro" },
    { id: 9, name: "Outubro" },
    { id: 10, name: "Novembro" },
    { id: 11, name: "Dezembro" },
  ];

  return (
    <Container>
      <Content expand={toggleExpand}>
        <DateArea>
          <Icon>
            <Title>Início</Title>
            <Image/>
          </Icon>
          <DateInput value={startDate} setState={setStartDate} />
        </DateArea>
        <DateArea>
          <Icon>
            <Title>Fim</Title>
            <Image/>
          </Icon>
          <DateInput value={endDate} setState={setEndDate} />
        </DateArea>
        <DateArea>
          <Icon>
            <Title>Mês</Title>
            <Image/>
          </Icon>
          <SelectOption
            name_placeholder="Filtrar por mês"
            grid_width="17"
            value={monthState}
            onChange={monthOnChange}
            options={months}
          />
        </DateArea>
        {/* AJUSTE PARA DIMINUIR TAMANHO DOS FILTROS */}
          <div></div>
          <div></div>
          <div></div>
        {/* AJUSTE PARA DIMINUIR TAMANHO DOS FILTROS */}
        {children}
        <ExpandButton onClick={() => setToggleExpand(!toggleExpand)}>
          {toggleExpand ? <Less /> : <More />}
        </ExpandButton>
      </Content>
    </Container>
  );
};

export default Controls;
