import { React } from "react"
import "./TeamTile.css"
import { Link } from "react-router-dom"
export const TeamTile = ({teamName}) => {

    return (
        <div className = "Team-tile">
            <h1>
                <Link to = {`/teams/${teamName}`}>
                    {teamName}</Link></h1>
        </div>
    )

}