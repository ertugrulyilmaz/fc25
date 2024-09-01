import React, { useState } from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "./App.css";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PeopleIcon from "@mui/icons-material/People";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";

import TournamentBracket from "./TournamentBracket";
import Copyright from "./components/Copyright";
import LeagueStandings from "./pages/LeagueStandings";
import TeamStandings from "./pages/TeamStandings";
import Playoffs from "./pages/Playoffs";
import { ListItemButton, ListItemIcon, Select } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import League from "./pages/League";
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

  const [season, setSeason] = React.useState(25);
  const [initialFixture, setInitialFixture] = React.useState(1);

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  const menuItems = [
    {
      text: "Lig Puan Durumu",
      section: "league-standings",
      icon: <FormatListNumberedIcon />,
    },
    { text: "Takim Puan Durumu", section: "team-league-standings", icon: <PeopleIcon /> },
    { text: "Playoffs", section: "playoffs", icon: <AccountTreeIcon /> },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FC League
          </Typography>
          <Select
            value={season}
            defaultValue={25}
            label="Sezon"
            size="small"
            onChange={handleSeasonChange}
          >
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={24}>24</MenuItem>
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
            {menuItems.map((item, index) => (
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
          {/* Add any other additional items or sections in the drawer here */}
        </div>
      </Drawer>

      <Container style={{ marginTop: "0px", padding: 5, flexGrow: 0 }}>
        {selectedMenu === "league-standings" && (
          <League season={season} initialFixture={initialFixture} />
        )}
        {selectedMenu === "team-league-standings" && <TeamStandings />}
        {selectedMenu === "playoffs" && <Playoffs />}
      </Container>
    </div>
  );
}
