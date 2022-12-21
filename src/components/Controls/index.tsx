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
  Button,
} from "./styles";

interface ControlsProps {
  children?: React.ReactNode;
  month?: number;
  monthState?: any;
  startDate?: Date | null;
  setStartDate?: any;
  endDate?: Date | null;
  setEndDate?: any;
  monthFilter?: boolean | false;
  filterFunction?: any;
  filtro?: boolean | false;
}

const Controls: React.FC<ControlsProps> = ({
  children,
  month,
  monthState,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  monthFilter,
  filterFunction,
  filtro,
}) => {
  const [toggleExpand, setToggleExpand] = useState<boolean>(false);
  const months = [
    { id: 0, name: "Janeiro" },
    { id: 1, name: "Fevereiro" },
    { id: 2, name: "Março" },
    { id: 3, name: "Abril" },
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
        {!filtro ?
          (<>
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
          </>) :
          (<DateArea>
            <Icon>
              <Title>Mês</Title>
              <Image/>
            </Icon>
            <SelectOption
              name_placeholder="Selecione um mês"
              grid_width="17"
              value={month}
              onChange={event => monthState(parseInt(event.target.value))}
              options={months}
            />
          </DateArea>)
        }
        {monthFilter &&
          <Button onClick={filterFunction}>
            Filtrar por {filtro ? "período" : "mês"}
          </Button>
        }
        {/* AJUSTE PARA DIMINUIR TAMANHO DOS FILTROS */}
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
