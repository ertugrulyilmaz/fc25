import React, { useState } from "react";
import Container from "@mui/material/Container";
import "./App.css";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PeopleIcon from "@mui/icons-material/People";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import TeamStandings from "./pages/TeamStandings";
import Playoffs from "./pages/Playoffs";
import { ListItemButton, ListItemIcon, Select } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import League from "./pages/League";

const MENU_ITEMS = [
  {
    text: "Lig Puan Durumu",
    section: "league-standings",
    icon: <FormatListNumberedIcon />,
  },
  { text: "Takim Puan Durumu", section: "team-league-standings", icon: <PeopleIcon /> },
  { text: "Playoffs", section: "playoffs", icon: <AccountTreeIcon /> },
];

function createFixtureData(
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

const FIXTURE_DATA = {
  "season-3": {
    "week-1": [],
    "week-2": [],
    "week-3": [],
    "week-4": [],
    "week-5": [],
    "week-6": [],
    "week-7": [],
    "week-8": [],
    "week-9": [],
    "week-10": [],
    "week-11": [],
    "week-12": [],
  },
  "season-2": {
    "week-1": [
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
    ],
    "week-2": [
      createFixtureData("Lens", "Huseyin C", 2, "Everton", "Ertuğrul", 8, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
      createFixtureData("Lens", "Batu", 1, "Everton", "Ertuğrul", 9, 4, 0),
    ],
  },
  "season-1": {
    "week-1": [],
    "week-2": [],
    "week-3": [],
    "week-4": [],
    "week-5": [],
    "week-6": [],
    "week-7": [],
    "week-8": [],
    "week-9": [],
    "week-10": [],
    "week-11": [],
    "week-12": [],
  },
};

function createStandingsData(teamName, player, teamId, o, g, b, m, a, y, av, p) {
  return { teamName, player, teamId, o, g, b, m, a, y, av, p };
}

const STANDINGS_DATA = {
  "season-3": [],
  "season-2": [
    createStandingsData("Eintracht Frankfurt", "Batu", 1, 18, 15, 3, 0, 79, 21, 58, 48),
    createStandingsData("Lens", "Hüseyin C", 2, 18, 13, 4, 1, 64, 18, 46, 43),
    createStandingsData("Feyenoord", "Diren", 3, 18, 11, 1, 6, 39, 36, 3, 34),
    createStandingsData("Bournemouth", "Harun", 4, 18, 10, 2, 6, 41, 33, 8, 32),
    createStandingsData("Brighton", "Çağlar", 5, 18, 7, 3, 8, 36, 34, 2, 24),
    createStandingsData("Mallorca", "Levent", 6, 18, 6, 4, 8, 30, 45, -15, 22),
    createStandingsData("Brentford", "Hüseyin T", 7, 18, 6, 3, 9, 24, 35, -11, 21),
    createStandingsData("Everton", "Ertuğrul", 9, 18, 4, 4, 10, 18, 37, -19, 16),
    createStandingsData("Celta Vigo", "Çağatay", 8, 18, 4, 3, 11, 20, 49, -29, 15),
    createStandingsData("Nice", "Barış", 10, 18, 0, 1, 17, 20, 63, -43, 1),
  ],
  "season-1": [],
};

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState("league-standings");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (section) => {
    setSelectedMenu(section);
    setDrawerOpen(false);
  };

  const [season, setSeason] = React.useState("season-2");
  const [initialWeek, setInitialWeek] = React.useState(1);

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static" style={{ backgroundColor: "#C8102E" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/fc25/img/logo.png" width={48} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={1}>
            League
          </Typography>
          <Select
            value={season}
            defaultValue={season}
            label="Sezon"
            size="small"
            style={{ color: "white" }}
            onChange={handleSeasonChange}
          >
            <MenuItem value="season-3">Sezon 3</MenuItem>
            <MenuItem value="season-2">Sezon 2</MenuItem>
            <MenuItem value="season-1">Sezon 1</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <div
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {MENU_ITEMS.map((item, index) => (
              <ListItemButton
                key={index}
                selected={item.section === selectedMenu}
                onClick={() => handleMenuItemClick(item.section)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>

      <Container style={{ marginTop: "0px", padding: 5, flexGrow: 0 }}>
        {selectedMenu === "league-standings" && (
          <League
            season={season}
            standingsData={STANDINGS_DATA[season]}
            initialWeek={initialWeek}
            fixtureData={FIXTURE_DATA[season]}
          />
        )}
        {selectedMenu === "team-league-standings" && <TeamStandings />}
        {selectedMenu === "playoffs" && <Playoffs />}
      </Container>
    </div>
  );
}
