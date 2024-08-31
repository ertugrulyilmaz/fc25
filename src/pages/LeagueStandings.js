import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
    padding: 4,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: 4,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(teamName, player, teamId, o, g, b, m, a, y, av, p) {
  return { teamName, player, teamId, o, g, b, m, a, y, av, p };
}

const ROWS = {
  25: [
    createData("Eintracht Frankfurt", "Batu", 1, 18, 15, 3, 0, 79, 21, 58, 48),
    createData("Lens", "Hüseyin C", 2, 18, 13, 4, 1, 64, 18, 46, 43),
    createData("Feyenoord", "Diren", 3, 18, 11, 1, 6, 39, 36, 3, 34),
    createData("Bournemouth", "Harun", 4, 18, 10, 2, 6, 41, 33, 8, 32),
    createData("Brighton", "Çağlar", 5, 18, 7, 3, 8, 36, 34, 2, 24),
    createData("Mallorca", "Levent", 6, 18, 6, 4, 8, 30, 45, -15, 22),
    createData("Brentford", "Hüseyin T", 7, 18, 6, 3, 9, 24, 35, -11, 21),
    createData("Everton", "Ertuğrul", 8, 18, 4, 4, 10, 18, 37, -19, 16),
    createData("Celta Vigo", "Çağatay", 9, 18, 4, 3, 11, 20, 49, -29, 15),
    createData("Nice", "Barış", 10, 18, 0, 1, 17, 20, 63, -43, 1),
  ],
  24: [],
};

export default function LeagueStandings({ season }) {
  const rows = ROWS[season];

  return (
    <TableContainer component={Paper} style={{ marginTop: 10 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Takım</StyledTableCell>
            <StyledTableCell align="center">O</StyledTableCell>
            <StyledTableCell align="center">G</StyledTableCell>
            <StyledTableCell align="center">B</StyledTableCell>
            <StyledTableCell align="center">M</StyledTableCell>
            <StyledTableCell align="center">A</StyledTableCell>
            <StyledTableCell align="center">Y</StyledTableCell>
            <StyledTableCell align="center">Av</StyledTableCell>
            <StyledTableCell align="center">P</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.teamId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell align="left" component="th" scope="row">
                <Grid container>
                  <Grid alignContent={"center"}>
                    <img
                      src={"/fc25/img/2024/" + row.teamId + ".png"}
                      width={24}
                      height={24}
                      style={{ marginRight: 10, verticalAlign: "middle" }}
                    />
                  </Grid>
                  <Grid>
                    <b>{row.teamName}</b> <br />
                    <span style={{ fontStyle: "italic", textDecoration: "underline" }}>
                      {row.player}
                    </span>
                  </Grid>
                </Grid>
              </StyledTableCell>
              <StyledTableCell align="center">{row.o}</StyledTableCell>
              <StyledTableCell align="center">{row.g}</StyledTableCell>
              <StyledTableCell align="center">{row.b}</StyledTableCell>
              <StyledTableCell align="center">{row.m}</StyledTableCell>
              <StyledTableCell align="center">{row.a}</StyledTableCell>
              <StyledTableCell align="center">{row.y}</StyledTableCell>
              <StyledTableCell align="center">{row.av}</StyledTableCell>
              <StyledTableCell align="center">{row.p}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
