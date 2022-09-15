import { useState } from 'react'
import { Player } from '../interfaces/'
import { PlayerItem } from './'

interface Props {
    searchPlayer: (name: string) => void,
    players: Player[],
    searching: boolean,
    setSelectedPlayerState: (player: Player) => void
    selectedPlayer: Player | null | undefined
    deleteFromTeam: (playerId: string) => void
    error: string
}

export const SearchList = ({ searchPlayer, players, searching, setSelectedPlayerState, selectedPlayer, deleteFromTeam, error }: Props) => {
  const [search, setSearch] = useState('')

  return (
    <div className='flex flex-col justify-between w-60 h-max'>
        <div className='flex flex-row items-center justify-center mt-8 bg-white rounded-md p-1'>
          <input className='mr-3 text-center form-control' type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && searchPlayer(search) } placeholder='Buscar jugador' />
          {
            searching
              ? <div className="spinner-border spinner-border-sm mr-2 text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              : <button className='bg-white pr-2' onClick={() => searchPlayer(search)}><i className="bi bi-search text-xl font-bold text-center px-1"></i></button>
          }
        </div>
        <div className='flex flex-col h-80 overflow-y-auto mt-10 list-group'>
          {
              !error && players?.map(p => <PlayerItem player={p} key={p.player_id} setSelectedPlayerState={setSelectedPlayerState} selectedPlayer={selectedPlayer} deleteFromTeam={deleteFromTeam} />)
          }
          {
            error ? <p className='text-danger font-bold self-center bg-white p-3 rounded-lg'>{error}</p> : null
          }
        </div>
    </div>
  )
}

export default SearchList
