import { FC, ReactNode, useReducer } from 'react'
import { Player, Team } from '../interfaces'
import { TeamContext, TeamsReducer } from './'

export interface TeamsState {
    teams: Team[];
    selectedPlayer: Player | null
}

interface Props {
    children: ReactNode
}

export const INITIAL_STATE: TeamsState = {
  teams: [],
  selectedPlayer: null
}

export const TeamsProvider: FC<Props> = ({ children }: any) => {
  const [state, dispatch] = useReducer(TeamsReducer, INITIAL_STATE)

  const createTeam = () => {
    const name = prompt('Ingresa el nombre del equipo')
    if (state.teams.length === 2) return
    if (state.teams.find(t => t.teamName === name)) {
      alert('El equipo ya existe')
      return
    }
    if (name) {
      dispatch({ type: 'CREATE_TEAM', payload: { teamName: name } })
    }
  }

  const editTeam = (oldName: string) => {
    const newName = prompt('Ingrese nuevo nombre para su equipo', oldName)
    if (!newName) return
    let err = false
    const newTeams: Team[] = state.teams.map(t => {
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
    dispatch({ type: 'EDIT_TEAM', payload: newTeams })
  }

  const deleteTeam = (name: string) => {
    if (!confirm('Desea Eliminar el equipo?')) return false
    const newTeams = state.teams.filter(t => t.teamName !== name)
    dispatch({ type: 'DELETE_TEAM', payload: newTeams })
  }

  const setSelectedPlayer = (player: Player | null) => {
    dispatch({ type: 'SELECT_PLAYER', payload: player })
  }

  const addToTeam = (teamId: number) => {
    let err = false
    const newTeams: Team[] = state.teams.map((t, it) => {
      const newPlayers:Player[] = []

      t.players.forEach(p => {
        if (p.player_id === state.selectedPlayer?.player_id && !err) {
          err = true
          alert('El jugador ya pertenece a un equipo')
        }
      })

      if (it === teamId && state.selectedPlayer?.player_id && !err) {
        if (t.players.length === 5) {
          err = true
          alert('El equipo ya posee el maximo de jugadores')
        } else {
          newPlayers.push(state.selectedPlayer!)
        }
      }

      return {
        teamName: t.teamName,
        players: [...t.players, ...newPlayers]
      }
    })

    if (err) {
      return false
    }
    dispatch({ type: 'ADD_PLAYER', payload: newTeams })
    setSelectedPlayer(null)
  }

  const deleteFromTeam = (playerId: string) => {
    if (!confirm('Desea quitar el jugador del equipo?')) return false
    const newTeams: Team[] = state.teams.map(t => {
      return {
        teamName: t.teamName,
        players: t.players.filter(p => p.player_id !== playerId)
      }
    })
    dispatch({ type: 'DELETE_PLAYER', payload: newTeams })
  }

  return (
        <TeamContext.Provider value={{
          ...state,
          createTeam,
          editTeam,
          deleteTeam,
          addToTeam,
          deleteFromTeam,
          setSelectedPlayer
        }}>
             {children}
        </TeamContext.Provider>
  )
}
