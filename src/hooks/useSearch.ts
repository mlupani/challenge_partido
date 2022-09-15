import { useState } from 'react'
import { api } from '../api/apifootball'
import { GetPlayersResp, Player } from '../interfaces/'

export const useSearch = () => {
  const [players, setPlayers] = useState<Player[]>([])
  const [searching, setSearching] = useState(false)
  const [error, setError] = useState('')

  const searchPlayer = async (name: string) => {
    if (!name || name.length < 4) {
      setPlayers([])
      return false
    }
    setSearching(true)
    setError('')
    try {
      const { data } = await api.get<GetPlayersResp[]>(`?action=get_players&player_name=${name}&APIkey=${import.meta.env.VITE_API_KEY}`)
      const newPlayers = data.filter((v, i, a) => a.findIndex(v2 => (v2.player_id === v.player_id)) === i)
      setPlayers(newPlayers.map(({ player_id, player_name, team_name, player_image }) => {
        return {
          player_id,
          player_name,
          team_name,
          player_image
        }
      }))
      setSearching(false)
    } catch (error) {
      setPlayers([])
      setError('Sin resultados')
      setSearching(false)
      return false
    }
  }

  return {
    searchPlayer,
    players,
    error,
    searching
  }
}
