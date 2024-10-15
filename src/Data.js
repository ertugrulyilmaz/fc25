import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PeopleIcon from "@mui/icons-material/People";

export const TEST_DATA_URL =
  "https://docs.google.com/spreadsheets/d/1iV4BsE_5roZQQnQbMlWl_0zn48b6Q6oWr5D5ZdBtEXg/gviz/tq";
export const DATA_URLS = {
  "season-3":
    "https://docs.google.com/spreadsheets/d/1iV4BsE_5roZQQnQbMlWl_0zn48b6Q6oWr5D5ZdBtEXg/gviz/tq",
  "season-2":
    "https://docs.google.com/spreadsheets/d/1IHVx2k1xjg_pNVGcidalgJhz2rBigPmr9kluKKEY-gg/gviz/tq",
  "season-1":
    "https://docs.google.com/spreadsheets/d/13qOBaZAwfEQzaKkkhvHPiiDgBKikk7C3MD3EbEHu44k/gviz/tq",
};

export const TEAMS = {
  "season-3": {
    "Sport-Club Freiburg": {
      id: 1,
      player: "Diren",
      teamName: "Sport-Club Freiburg",
      partnerId: 2,
    },
    "Olympique Lyonnais": {
      id: 2,
      player: "Barış",
      teamName: "Olympique Lyonnais",
      partnerId: 1,
    },
    Everton: {
      id: 3,
      player: "Levent",
      teamName: "Everton",
      partnerId: 4,
    },
    "Eintracht Frankfurt": {
      id: 4,
      player: "Çağatay",
      teamName: "Eintracht Frankfurt",
      partnerId: 3,
    },
    "Racing Club de Lens": {
      id: 5,
      player: "Alperen",
      teamName: "Racing Club de Lens",
      partnerId: 6,
    },
    "Olympique de Marseille": {
      id: 6,
      player: "Batu",
      teamName: "Olympique de Marseille",
      partnerId: 5,
    },
    "Real Betis": {
      id: 7,
      player: "Harun",
      teamName: "Real Betis",
      partnerId: 8,
    },
    "Wolverhampton Wanderers": {
      id: 8,
      player: "Ertuğrul",
      teamName: "Wolverhampton Wanderers",
      partnerId: 7,
    },
    "VfB Stuttgart": {
      id: 9,
      player: "Hüseyin T",
      teamName: "VfB Stuttgart",
      partnerId: 10,
    },
    PSV: {
      id: 10,
      player: "Çağlar",
      teamName: "PSV",
      partnerId: 9,
    },
  },
  "season-2": {
    Feyenoord: {
      id: 1,
      player: "Diren",
      teamName: "Feyenoord",
      partnerId: 6,
    },
    Bournemouth: {
      id: 2,
      player: "Harun",
      teamName: "Bournemouth",
      partnerId: 4,
    },
    Brighton: {
      id: 3,
      player: "Çağlar",
      teamName: "Brighton",
      partnerId: 10,
    },
    Brentford: {
      id: 4,
      player: "Hüseyin T",
      teamName: "Brentford",
      partnerId: 2,
    },
    "Celta Vigo": {
      id: 5,
      player: "Çağatay",
      teamName: "Celta Vigo",
      partnerId: 8,
    },
    Nice: {
      id: 6,
      player: "Barış",
      teamName: "Nice",
      partnerId: 1,
    },
    Lens: {
      id: 7,
      player: "Hüseyin C",
      teamName: "Lens",
      partnerId: 9,
    },
    Mallorca: {
      id: 8,
      player: "Levent",
      teamName: "Mallorca",
      partnerId: 5,
    },
    Everton: {
      id: 9,
      player: "Ertuğrul",
      teamName: "Everton",
      partnerId: 7,
    },
    "Eintracht Frankfurt": {
      id: 10,
      player: "Batu",
      teamName: "Eintracht Frankfurt",
      partnerId: 3,
    },
  },
  "season-1": {
    Harun: {
      id: 2,
      player: "Harun",
      teamName: "Juventus",
      partnerId: 4,
    },
    Çağlar: {
      id: 3,
      player: "Çağlar",
      teamName: "B.Leverkusen",
      partnerId: 7,
    },
    "Hüseyin T": {
      id: 4,
      player: "Hüseyin T",
      teamName: "Milan",
      partnerId: 2,
    },
    Çağatay: {
      id: 5,
      player: "Çağatay",
      teamName: "Aston Villa",
      partnerId: 8,
    },
    Barış: {
      id: 6,
      player: "Barış",
      teamName: "Lazio",
      partnerId: 6,
    },
    "Hüseyin C": {
      id: 7,
      player: "Hüseyin C",
      teamName: "Sevilla",
      partnerId: 3,
    },
    Levent: {
      id: 8,
      player: "Levent",
      teamName: "Mallorca",
      partnerId: 5,
    },
  },
};

export const MENU_ITEMS = [
  {
    text: "Lig Puan Durumu",
    section: "league-standings",
    icon: <FormatListNumberedIcon />,
  },
  { text: "Takim Puan Durumu", section: "team-league-standings", icon: <PeopleIcon /> },
  { text: "Playoffs", section: "playoffs", icon: <AccountTreeIcon /> },
];
