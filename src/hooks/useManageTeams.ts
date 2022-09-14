import { useState } from "react"
import { Team } from "../interfaces/Team"

const useManageTeams = () => {
    const [teams, setTeams] = useState<Team[]>([])

    const createTeam = () => {
      const name = prompt('Ingresa el nombre del equipo')
      if(teams.length === 2) return
      if(teams.find(t => t.teamName === name)){
        alert('El equipo ya existe')
        return
      }
      if(name)  setTeams([...teams, {teamName: name} ])
    }

    const deleteTeam = (name: string) => {
      const newTeams = teams.filter(t => t.teamName !== name)
      setTeams(newTeams)
    }

    const editTeam = (oldName: string) => {
      const newName = prompt('Ingrese nuevo nombre para su equipo', oldName)
      if(!newName) return
      let err = false
      const newTeams = teams.map(t => {
        if(t.teamName === newName) err = true
        if(t.teamName === oldName){
          t.teamName = newName
        }
        return t
      })
      if(err) {
        alert('El nuevo nombre ya existe')
        return
      }
      setTeams(newTeams)
    }

    return {
        createTeam,
        deleteTeam,
        editTeam,
        teams
    }

}

export default useManageTeams