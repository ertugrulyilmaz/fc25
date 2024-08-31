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
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 12,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
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

function createData(
  teamHome,
  playerHome,
  teamHomeId,
  teamAway,
  playerAway,
  teamAwayId,
  scoreHome,
  scoreAway
) {
  return {
    teamHome,
    playerHome,
    teamHomeId,
    teamAway,
    playerAway,
    teamAwayId,
    scoreHome,
    scoreAway,
  };
}

const ROWS = {
  25: [
    createData("Lens", "Batu", 1, "Everton", "Ertuğrul", 8, 4, 0),
    createData("Lens", "Batu", 1, "Everton", "Ertuğrul", 8, 4, 0),
    createData("Lens", "Batu", 1, "Everton", "Ertuğrul", 8, 4, 0),
    createData("Lens", "Batu", 1, "Everton", "Ertuğrul", 8, 4, 0),
    createData("Lens", "Batu", 1, "Everton", "Ertuğrul", 8, 4, 0),
  ],
  24: [],
};
export default function LeagueFixture({ season }) {
  const rows = ROWS[season];
  return (
    <div style={{ marginTop: 10 }}>
      <Typography variant="h6" gutterBottom align="center">
        Fikstür
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" width={"40%"}>
                Home
              </StyledTableCell>
              <StyledTableCell align="center" width={"20%"}>
                Score
              </StyledTableCell>
              <StyledTableCell align="right" width={"40%"}>
                Away
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.teamId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="left">
                  <img
                    src={"/fc25/img/2024/" + row.teamHomeId + ".png"}
                    width={24}
                    height={24}
                    style={{ marginRight: 10, verticalAlign: "middle" }}
                  />
                  <b>{row.teamHome}</b>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.scoreHome} - {row.scoreAway}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>{row.teamAway}</b>
                  <img
                    src={"/fc25/img/2024/" + row.teamAwayId + ".png"}
                    width={24}
                    height={24}
                    style={{ marginLeft: 10, verticalAlign: "middle" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
