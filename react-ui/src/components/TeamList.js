import React, {useEffect, useState} from "react";
import {useAppContext} from "../context/application-context";

export default function TeamList() {
  const [teams, setTeams] = useState([])
  const { isAuthConfigured, teamService } = useAppContext()

  useEffect(() => {
    if (!isAuthConfigured) {
      return
    }

    const loadTeams = async () => {
      const response = await teamService.getTeams()
      setTeams(response.sort((a, b) => {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
      }))
    }
    loadTeams()
  }, [isAuthConfigured]) // eslint-disable-line react-hooks/exhaustive-deps

  const teamElements = teams.map(team => (
    <li key={team.name}>
      {team.name} - {team.arena}
    </li>
  ))

  return (
    <ul>
      {teamElements}
    </ul>
  )
}
