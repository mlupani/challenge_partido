import React from 'react'
import { useState } from 'react';
import { Player } from '../interfaces/Team';

interface Props {
    searchPlayer: (name: string) => void,
    players: Player[]
}

const SearchList = ({searchPlayer, players}: Props) => {

  const [search, setSearch] = useState('')

  return (
    <div className='flex flex-col items-center'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar jugador' />
        <p>Buscando...</p>
        <button onClick={() => searchPlayer(search)}>Buscar</button>
        {
            players?.map(p => <p>{p.name}</p>)
        }
    </div>
  )
}

export default SearchList