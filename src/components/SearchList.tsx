import { useEffect, useState } from 'react'
import { PlayerItem } from './'
import { Player } from '../interfaces'

interface Props {
    searchPlayer: (name: string) => void,
    searching: boolean,
    error: string,
    players: Player[]
}

export const SearchList = ({ searchPlayer, searching, error, players }: Props) => {
  const [search, setSearch] = useState('')
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    if (!searching) setShowList(true)
  }, [searching])

  return (
    <div className='flex flex-col justify-between w-60 h-max'>
        <div className='flex flex-row items-center justify-center md:mt-8 bg-white rounded-md p-1'>
          <input className='mr-3 text-center form-control' type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && searchPlayer(search) } placeholder='Buscar jugador' />
          {
            searching
              ? <div className="spinner-border spinner-border-sm mr-2 text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              : players.length
                ? <>
                  <button className='bg-white pr-2' onClick={() => searchPlayer(search)}><i className="bi bi-search text-xl font-bold text-center px-1"></i></button>
                  <button className='bg-white pr-2 sm:d-block md:hidden' onClick={() => setShowList(!showList)}><i className={`bi ${showList ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}  text-xl font-bold text-center px-1`}></i></button>
                </>
                : null
          }
        </div>
        <div className={`flex-col overflow-y-auto h-52 sm:h-96 mt-1 list-group mb-1 ${showList ? 'flex' : 'd-none'}`}>
          {
              !error && players?.map(p => <PlayerItem player={p} key={p.player_id} />)
          }
          {
            error ? <p className='text-danger font-bold self-center bg-white p-3 rounded-lg'>{error}</p> : null
          }
        </div>
    </div>
  )
}

export default SearchList
