import { Player, Team } from '../interfaces'
import { TeamsState } from './TeamsProvider'

type TeamsActionType =
| { type: 'CREATE_TEAM', payload: {teamName: string}}
| { type: 'EDIT_TEAM', payload: Team[] }
| { type: 'DELETE_TEAM', payload: Team[] }
| { type: 'SELECT_PLAYER', payload: Player | null }
| { type: 'ADD_PLAYER', payload: Team[] }
| { type: 'DELETE_PLAYER', payload: Team[] }

export const TeamsReducer = (state: TeamsState, { type, payload }: TeamsActionType):TeamsState => {
  switch (type) {
    case 'CREATE_TEAM':
      return {
        ...state,
        teams: [...state.teams, { teamName: payload.teamName, players: [] }]
      }
    case 'EDIT_TEAM':
      return {
        ...state,
        teams: payload
      }
    case 'DELETE_TEAM':
      return {
        ...state,
        teams: payload
      }
    case 'SELECT_PLAYER':
      return {
        ...state,
        selectedPlayer: payload
      }
    case 'ADD_PLAYER':
      return {
        ...state,
        teams: payload
      }
    case 'DELETE_PLAYER':
      return {
        ...state,
        teams: payload
      }
    default:
      return state
  }
}
