import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

import {
  Bracket,
  RoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  RenderSeedProps,
} from "react-brackets";

const rounds = [
  {
    title: "Round 1",
    seeds: [
      {
        id: 1,
        teams: [
          { id: 6, name: "Alperen", score: 0 },
          { id: 2, name: "Barış", score: 0 },
        ],
      },
      {
        id: 4,
        teams: [
          { id: 10, name: "Çağlar", score: 0 },
          { id: 9, name: "Hüseyin", score: 0 },
        ],
      },
      {
        id: 2,
        teams: [
          { id: 1, name: "Diren", score: 0 },
          { id: 4, name: "Çağatay", score: 0 },
        ],
      },
      {
        id: 3,
        teams: [
          { id: 8, name: "Ertuğrul", score: 0 },
          { id: 3, name: "Levent", score: 0 },
        ],
      },
    ],
  },
  {
    title: "Quarterfinals",
    seeds: [
      {
        id: 5,
        teams: [
          { id: -1, name: "Winner of Match 1", score: 0 },
          { id: -1, name: "Winner of Match 4", score: 0 },
        ],
      },
      {
        id: 6,
        teams: [
          { id: -1, name: "Winner of Match 2", score: 0 },
          { id: -1, name: "Winner of Match 3", score: 0 },
        ],
      },
    ],
  },
  {
    title: "Semifinals",
    seeds: [
      {
        id: 7,
        teams: [
          { id: 7, name: "Harun", score: 0 },
          { id: -1, name: "Winner Of Match 5", score: 0 },
        ],
      },
      {
        id: 8,
        teams: [
          { id: 6, name: "Batu", score: 0 },
          { id: -1, name: "Winner Of Match 6", score: 0 },
        ],
      },
    ],
  },
  {
    title: "Final",
    seeds: [
      {
        id: 9,
        teams: [
          { id: -1, name: "Winner Of Match 7", score: 0 },
          { id: -1, name: "Winner of Match 8", score: 0 },
        ],
      },
    ],
  },
];

const season = "season-3";

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }) => {
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <Grid container spacing={2}>
          <Grid size={24}>
            <Typography variant="h6"> Match {seed.id} </Typography>{" "}
          </Grid>
          <Grid size={6}>
            <Grid alignContent={"center"}>
              {seed.teams[0]?.id === -1 ? (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAA/0lEQVR4nO3RQQ0AIBDAMMC/5+ONAvZoFSzZnplFx/kdwMuQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiLvvNA8UeupsSAAAAAElFTkSuQmCC"
                  alt="Transparent Image"
                  width={24}
                  height={24}
                  style={{ backgroundColor: "white" }}
                />
              ) : (
                <img
                  src={"/fc25/img/" + season + "/" + seed.teams[0].id + ".png"}
                  width={24}
                  height={24}
                  style={{ marginRight: 10, verticalAlign: "middle" }}
                />
              )}
            </Grid>
            <Typography variant="subtitle1"> {seed.teams[0]?.name} </Typography>
          </Grid>
          <Grid size={6}>
            <Grid alignContent={"center"}>
              {seed.teams[1]?.id === -1 ? (
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAA/0lEQVR4nO3RQQ0AIBDAMMC/5+ONAvZoFSzZnplFx/kdwMuQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiDIkxJMaQGENiLvvNA8UeupsSAAAAAElFTkSuQmCC"
                  alt="Transparent Image"
                  width={24}
                  height={24}
                  style={{ backgroundColor: "white" }}
                />
              ) : (
                <img
                  src={"/fc25/img/" + season + "/" + seed.teams[1].id + ".png"}
                  width={24}
                  height={24}
                  style={{ marginRight: 10, verticalAlign: "middle" }}
                />
              )}
            </Grid>
            <Typography variant="subtitle1"> {seed.teams[1]?.name} </Typography>
          </Grid>
          <Grid size={5} style={{ color: "white" }}>
            <Typography variant="subtitle1">{seed.teams[0]?.score}</Typography>
          </Grid>
          <Grid size={2} style={{ color: "white" }}>
            <Typography variant="subtitle1"> - </Typography>
          </Grid>
          <Grid size={5} style={{ color: "white" }}>
            <Typography variant="subtitle1">{seed.teams[1]?.score}</Typography>
          </Grid>
        </Grid>
      </SeedItem>
    </Seed>
  );
};

export default function Playoffs() {
  return (
    <Box
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: 2,
      }}
    >
      <div>
        <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />
      </div>
    </Box>
  );
}
