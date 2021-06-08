import { React, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from "../Components/MatchDetailCard";
import { YearSelector } from "../Components/YearSelector";
import "./MatchPage.css"

export const MatchPage = () => {

  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(
    () => { 
      const fetchMatches = async () => {
          const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
          const data = await response.json();
          setMatches(data);
          
      }; 
      fetchMatches();
    }, [teamName, year]
  );
 
  return (
    <div className="MatchPage">
    
      <div className="YearSelector">
      <h3>Select Year</h3>
        <YearSelector key = {year} teamName = {teamName} />
      </div>
     
<div>
<h1 className="Page-heading">{teamName} matches in {year}</h1>
     {
      matches.map(match => <MatchDetailCard key = {match.id} teamName={teamName} match={match} />)
      }
</div>
    </div>
  );
}


