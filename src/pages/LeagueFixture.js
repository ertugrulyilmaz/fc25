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
import { Box, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
export default function LeagueFixture({ season, initialFixture }) {
  const rows = ROWS[season];

  const [fixture, setFixture] = React.useState(initialFixture);

  const handleFixtureChange = (event) => {
    setFixture(event.target.value);
  };

  return (
    <div style={{ marginTop: 5 }}>
      <Grid container size={12} style={{ marginBottom: 5 }}>
        <Grid item size={4} alignContent={"center"}>
          <Box display="flex" justifyContent="flex-start">
            <KeyboardArrowLeftIcon />
          </Box>
        </Grid>
        <Grid container size={4} direction={"row"}>
          <Grid item size={6} justifyContent={"center"} alignContent={"center"}>
            Fikstür
          </Grid>
          <Grid item size={6}>
            <Select
              value={fixture}
              defaultValue={1}
              label="Sezon"
              size="small"
              onChange={handleFixtureChange}
            >
              {[...Array(12).keys()].map((i) => (
                <MenuItem key={i} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid item size={4} alignContent={"center"}>
          <Box display="flex" justifyContent="flex-end">
            <KeyboardArrowRightIcon />
          </Box>
        </Grid>
      </Grid>
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
                  <span style={{ fontSize: 16 }}>
                    {row.scoreHome} - {row.scoreAway}
                  </span>
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
