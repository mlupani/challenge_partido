import React from 'react'
import { Player } from '../interfaces/Team'
import PlayerItem from './PlayerItem';

interface Props {
    teamName: string;
    players?: Player[];
    deleteTeam: (name: string) => void
    editTeam: (oldName: string) => void
    setSelectedPlayerState: (player: Player) => void
}

const PlayerList = ({teamName, players, deleteTeam, editTeam, setSelectedPlayerState}: Props ) => {
  return (
    <div className='flex justify-center flex-col items-center mt-10 mx-8 min-h-96 w-80 border-2 border-blue-700'>
        <button onClick={() => deleteTeam(teamName)} >Eliminar equipo</button>
        <div className='flex justify-between'>
            <h3 className='mr-3'>{teamName}</h3>
            <button className='underline' onClick={() => editTeam(teamName)}>Editar</button>
        </div>
        <ol className='w-60'>
            {
                players?.map(player => <PlayerItem player={player} setSelectedPlayerState={setSelectedPlayerState} />)
            }
        </ol>
    </div>
  )
}

export default PlayerList