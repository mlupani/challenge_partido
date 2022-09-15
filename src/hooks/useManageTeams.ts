import { useState } from 'react'
import { Player, Team } from '../interfaces/'

export const useManageTeams = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>()

  const createTeam = () => {
    const name = prompt('Ingresa el nombre del equipo')
    if (teams.length === 2) return
    if (teams.find(t => t.teamName === name)) {
      alert('El equipo ya existe')
      return
    }
    if (name) setTeams([...teams, { teamName: name, players: [] }])
  }

  const deleteTeam = (name: string) => {
    if (!confirm('Desea Eliminar el equipo?')) return false
    const newTeams = teams.filter(t => t.teamName !== name)
    setTeams(newTeams)
  }

  const editTeam = (oldName: string) => {
    const newName = prompt('Ingrese nuevo nombre para su equipo', oldName)
    if (!newName) return
    let err = false
    const newTeams = teams.map(t => {
      if (t.teamName === newName) err = true
      if (t.teamName === oldName) {
        t.teamName = newName
      }
      return t
    })
    if (err) {
      alert('El nuevo nombre ya existe')
      return
    }
    setTeams(newTeams)
  }

  const deleteFromTeam = (playerId: string) => {
    if (!confirm('Desea quitar el jugador del equipo?')) return false
    const newTeams: Team[] = teams.map(t => {
      return {
        teamName: t.teamName,
        players: t.players.filter(p => p.player_id !== playerId)
      }
    })
    setTeams(newTeams)
  }

  const AddToTeam = (teamId: number) => {
    const team = teams.find((t, i) => i === teamId)
    let err = false
    if (team?.players.length === 5) {
      alert('El equipo solo puede tener hasta 5 jugadores')
      return
    }
    teams.forEach(t => t.players.forEach(p => {
      if (p.player_id === selectedPlayer?.player_id) err = true
    }))
    if (err) {
      alert('El jugador ya pertenece a un equipo')
      return
    }
    if (team && selectedPlayer) team.players.push(selectedPlayer)
    setSelectedPlayer(null)
  }

  const setSelectedPlayerState = (player:Player) => {
    setSelectedPlayer(player)
  }

  return {
    createTeam,
    deleteTeam,
    editTeam,
    deleteFromTeam,
    AddToTeam,
    setSelectedPlayerState,
    teams,
    selectedPlayer
  }
}
