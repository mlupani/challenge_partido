import { useState } from 'react'
import { api } from '../api/apifootball'
import { GetPlayersResp, Player } from '../interfaces/'

export const useSearch = () => {
  const [players, setPlayers] = useState<Player[]>([])
  const [searching, setSearching] = useState(false)

  const searchPlayer = async (name: string) => {
    setSearching(true)
    setPlayers([])
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
  }

  return {
    searchPlayer,
    players,
    searching
  }
}
