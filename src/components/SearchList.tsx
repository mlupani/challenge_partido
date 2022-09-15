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
}

export const SearchList = ({ searchPlayer, players, searching, setSelectedPlayerState, selectedPlayer, deleteFromTeam }: Props) => {
  const [search, setSearch] = useState('')

  return (
    <div className='flex flex-col  justify-between w-60'>
        <div className='flex flex-row items-center justify-center mt-8'>
          <input className='mr-3 text-center form-control' type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && searchPlayer(search) } placeholder='Buscar jugador' />
          {
            searching
              ? <p>Buscando...</p>
              : <button onClick={() => searchPlayer(search)}>Buscar</button>
          }
        </div>
        <div className='flex flex-col h-80 overflow-scroll justify-between mt-10'>
          {
              players?.map(p => <PlayerItem player={p} key={p.player_id} setSelectedPlayerState={setSelectedPlayerState} selectedPlayer={selectedPlayer} deleteFromTeam={deleteFromTeam} />)
          }
        </div>
    </div>
  )
}

export default SearchList
