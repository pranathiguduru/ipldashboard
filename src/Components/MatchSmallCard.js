import { React } from "react";
import { Link } from "react-router-dom";
import "./MatchSmallCard.css";

export const MatchSmallCard = ({match, teamName}) => {

  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
       <span className="vs">vs</span>
   <h1>
      <Link to = {otherTeamRoute} > {otherTeam}</Link></h1>
    <p className="match-result">{match.matchWinner} won by {match.result_margin} {match.result} </p>
    </div>
  );
}

