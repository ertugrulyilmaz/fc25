import React from "react";
import LeagueFixture from "./LeagueFixture";
import LeagueStandings from "./LeagueStandings";

export default function League({ season, initialFixture }) {
  return (
    <div>
      <LeagueStandings season={season} />
      <LeagueFixture season={season} initialFixture={initialFixture} />
    </div>
  );
}
