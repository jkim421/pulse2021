import React from "react";
import styled from "styled-components";

function Table({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  page,
  prepareRow,
}) {
  const firstPageRows = rows.slice(0, 500);
  return (
    <>
      <table
        {...getTableProps()}
        style={{
          borderSpacing: "0",
          border: "1px solid black",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    padding: "1rem",
                    borderBottom: "solid 3px blue",
                    background: "green",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        margin: "0",
                        padding: "0.5rem",
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div>Showing {rows.length} rows</div>
    </>
  );
}

export default Table;
