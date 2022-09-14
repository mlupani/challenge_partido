import React from 'react'
import { Player } from '../interfaces/Team'

interface Props {
    teamName: string;
    players?: Player[];
    deleteTeam: (name: string) => void
    editTeam: (oldName: string) => void
}

const PlayerList = ({teamName, players, deleteTeam, editTeam}: Props ) => {
  return (
    <div className='flex justify-center flex-col items-center m-60 h-96 w-80 border-2 border-blue-700'>
        <button onClick={() => deleteTeam(teamName)} >Eliminar equipo</button>
        <div className='flex justify-between'>
            <h3 className='mr-3'>{teamName}</h3>
            <button className='underline' onClick={() => editTeam(teamName)}>Editar</button>
        </div>
        <ol>
            {
                players?.map(player => <li>{player.name}</li>)
            }
        </ol>
    </div>
  )
}

export default PlayerList