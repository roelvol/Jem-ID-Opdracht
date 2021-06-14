import { useState } from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Artikel } from "../Interface/Interface";

interface Props {
    rows: Array<Artikel>
}

export function MyTable({ rows }: Props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Img</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Naam</TableCell>
            <TableCell>Hoogte</TableCell>
            <TableCell>Potmaat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.ID}>
              <TableCell><img src={row.Fotos[0].UrlThumb220}/></TableCell>
              <TableCell>{row.ID}</TableCell>
              <TableCell>{row.Naam}</TableCell>
              <TableCell>{row.Hoogte}</TableCell>
              <TableCell>{row.Potmaat} <button>Detail</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}