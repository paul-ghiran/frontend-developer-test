import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const SimpleTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {data.headColumns.map((column, i) => (
            <TableCell key={`column-${i}`}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.rows.map((row, rowIndex) => (
          <TableRow key={`row-${rowIndex}`}>
            {row.map((cellData, i) => (
              <TableCell key={`cell-${rowIndex}-${i}`}>{cellData}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
