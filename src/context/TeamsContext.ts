import { createContext } from 'react'
import { Player, Team } from '../interfaces'

interface ContextProps {
    teams: Team[]
    selectedPlayer: Player | null
    createTeam: () => void
    editTeam: (oldName: string) => void
    deleteTeam: (name: string) => void
    setSelectedPlayer: (player: Player) => void
    addToTeam: (teamId: number) => void
    deleteFromTeam: (playerId: string) => void
}

export const TeamContext = createContext({} as ContextProps)
