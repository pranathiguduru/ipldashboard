import { React } from "react"
import { Link } from "react-router-dom"
import "./YearSelector.css"

export const YearSelector = ({teamName}) => { 
    console.log(teamName)
    let Years = [];
  //  const startYear = process.env.REACT_APP_DATA_START_YEAR;
   // const endYear = process.env.REACT_APP_DATA_END_YEAR;
   const startYear = 2008;
   const endYear = 2020

    for (let i = startYear; i <= endYear; i++) {
        Years.push(i);
    }

    return (
        <ol className="YearSelector">
            { Years.map(year => (
                <li key={year}>
                    <Link to = {`/teams/${teamName}/matches/${year}`}>{year}</Link>
                </li>
            ))}
        </ol>

    )

}