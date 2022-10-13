import React, { useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import "./table.css";
// import { GlobalFilter } from "./GlobalFilter";
import { IndeterminateCheckbox } from "./IndeterminateCheckbox";
import { Button, Select, TextField, MenuItem } from "@mui/material";

export default function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    // setGlobalFilter,
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    // useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  // const { globalFilter } = state;

  return (
    <>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
      <div
        className="pagination"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}> */}
          {"<<"}
          {/* </button>{" "} */}
        </Button>
        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          variant="outlined"
        >
          {"<"}
        </Button>{" "}
        <TextField
          size="small"
          variant="outlined"
          type="number"
          value={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          variant="outlined"
        >
          {">"}
        </Button>{" "}
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          variant="outlined"
        >
          {">>"}
        </Button>{" "}
        <Select
          size="small"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            gotoPage(0);
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i}>
              {headerGroup.headers.map((column, i) => (
                <th key={i}>
                  <div
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.id != "selection" &&
                        (column.isSorted
                          ? column.isSortedDesc
                            ? " ▼"
                            : " ▲"
                          : " ⇵")}
                    </span>
                  </div>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup, i) => (
            <tr key={i}>
              {footerGroup.headers.map((column, i) => (
                <th key={i}>
                  <div {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div
        className="pagination"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}> */}
          {"<<"}
          {/* </button>{" "} */}
        </Button>
        <Button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          variant="outlined"
        >
          {"<"}
        </Button>{" "}
        <TextField
          size="small"
          variant="outlined"
          type="number"
          value={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "100px" }}
        />
        <Button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          variant="outlined"
        >
          {">"}
        </Button>{" "}
        <Button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          variant="outlined"
        >
          {">>"}
        </Button>{" "}
        <Select
          size="small"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            gotoPage(0);
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </div>
    </>
  );
}
