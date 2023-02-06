import React, { useEffect, FunctionComponent } from "react";
import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import RefreshComponent from "../Refresh";

import FilterComponent from "./FilterComponent";

import { Container, MainContainer, TitleTable } from "./styles";

interface DataTableContentProps {
  noSearch?: any;
  searchServer?: any;
  searchServerHandler?: any;
  changeHasSearched?: any;
  columns: any;
  style?: any;
  title?: any;
  titleLineComponents?: any;
  data: any;
  filterColumns?: any;
  name?: any;
  selectableRows?: any;
  subHeaderComponents?: any;
  height?: any;
  defaultSortAsc?: any;
  expandableRows?: boolean;
  expandableRowsComponent?: any;
  progressPending?: boolean | false;
}

function getProp(obj: any, prop: any) {
  if (typeof obj !== "object")
    return toast.error("Erro no filtro da tabela.");
  if (typeof prop !== "string"){
    return toast.error("Erro no filtro da tabela.");
  }

  // Replace [] notation with dot notation
  prop = prop.replace(/\[["'`](.*)["'`]\]/g, ".$1");

  return prop
    .split(".")
    .reduce(function (prev: { [x: string]: any }, curr: string | number) {
      return prev ? prev[curr] : undefined;
    }, obj); // || self
}

const DataTableContent: FunctionComponent<DataTableContentProps> = ({
  noSearch,
  searchServer,
  searchServerHandler,
  changeHasSearched,
  columns,
  style,
  title,
  titleLineComponents = [],
  data,
  filterColumns,
  name,
  selectableRows,
  subHeaderComponents = [],
  height,
  defaultSortAsc,
  expandableRows,
  expandableRowsComponent,
  progressPending,
}) => {
  const { t, i18n } = useTranslation();
  const [filterText, setFilterText] = React.useState("");
  const [filterColumn, setFilterColumn] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  let filteredItems = data;

  if (data && data[0]) {
    filteredItems = data.filter((item: any) => {
      const propString = String(getProp(item, filterColumn));

      return (
        propString &&
        propString.toLowerCase().includes(filterText.toLowerCase())
      );
    });
  }

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        searchServer={searchServer}
        searchServerHandler={searchServerHandler}
        changeHasSearched={changeHasSearched}
        tableName={name}
        onFilter={(e: { target: { value: React.SetStateAction<string> } }) =>
          setFilterText(e.target.value)
        }
        onClear={handleClear}
        filterText={filterText}
        filterColumns={filterColumns}
        setFilterColumn={(column: React.SetStateAction<string>) =>
          setFilterColumn(column)
        }
        filterColumn={filterColumn}
      />
    );
  }, [
    searchServer,
    searchServerHandler,
    changeHasSearched,
    name,
    filterText,
    filterColumns,
    filterColumn,
    resetPaginationToggle,
  ]);

  // useEffect(() => {
  // 	const table = document.querySelector('.rdt_Table');
  // 	let tableContainer 
  //   if(table) {
  //     tableContainer = table.parentElement;
  //     if(tableContainer) {
  //       tableContainer.style.padding = '0';
  //     }
  //   }
  // }, []);

  return (
    <Container style={style}>
      <MainContainer>
        <TitleTable>
          {title}
          {titleLineComponents}
        </TitleTable>
        <DataTable
          // name={name}
          // defaultSortField={defaultSortField}
          defaultSortAsc={defaultSortAsc}
          progressPending={progressPending}
          progressComponent={<RefreshComponent />}
          columns={columns}
          data={filteredItems}
          pagination
          responsive
          paginationResetDefaultPage={resetPaginationToggle}
          noHeader
          subHeader
          selectableRows={selectableRows}
          // onSelectedRowsChange={(event) =>
          //   handleSelection(event.selectedRows[0])
          // }
          subHeaderComponent={[
            ...subHeaderComponents,
            !noSearch && subHeaderComponentMemo,
          ]}
          fixedHeader
          paginationComponentOptions={{
            rowsPerPageText: "Linhas por página:",
            rangeSeparatorText: "de",
            noRowsPerPage: false,
            selectAllRowsItem: false,
            selectAllRowsItemText: "Todos",
          }}
          noDataComponent="Nenhum registro encontrado."
          expandableRows={expandableRows}
          expandableRowsComponent={expandableRowsComponent}
          customStyles={{
            table: {
              style: {
                height: height || window.screen.width < 1024 ? "35vh" : "50vh",
                // width: "98%",
                backgroundColor: "transparent",
              },
            },
            header: { 
              style: { 
                paddingLeft: "0",
                paddingRight: "0"
              }
            },
            head: { 
              style: { 
                paddingLeft: "0",
                paddingRight: "0"
              }
            },
            headRow: {
              style: {
                backgroundColor: "white",
              },
            },
            subHeader: {
              style: {
                backgroundColor: "transparent",
              },
            },
            rows: {
              style: {
                backgroundColor: "transparent",
              },
            },
            pagination: {
              style: {
                color: "rgb(0, 0, 0)",
                backgroundColor: "transparent",
              },
            },
          }}
        />
      </MainContainer>
    </Container>
  );
};

export default DataTableContent;
