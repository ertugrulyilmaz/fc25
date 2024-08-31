import logo from "./logo.svg";
import "./App.css";

import TournamentBracket from "./TournamentBracket";

const tournamentData = {
  rounds: [
    {
      name: "Round 1",
      matches: [
        { teams: ["Caglar", "Ertugrul"], scores: [2, 2], result: "1-2" },
        { teams: ["Harun", "Cagatay"], scores: [5, 1], result: "2-2" },
        { teams: ["Diren", "Baris"], scores: [4, 0], result: "4-1" },
        { teams: ["Levent", "HRT"], scores: [2, 2], result: "3-2" },
      ],
    },
    {
      name: "Quarterfinals",
      matches: [
        { teams: ["Ertugrul", "Huseyin"], scores: [3, 2], result: "3-1" },
        { teams: ["Diren", "Levent"], scores: [2, 2], result: "2-3" },
      ],
    },
    {
      name: "Semifinals",
      matches: [
        { teams: ["Batu", "Ertugrul"], scores: [4, 0], result: "3-4" },
        { teams: ["Huseyin", "Levent"], scores: [5, 0], result: "5-1" },
      ],
    },
    {
      name: "Final",
      matches: [{ teams: ["Batu", "Huseyin"], scores: [0, 4] }],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <TournamentBracket />
    </div>
  );
}

export default App;
