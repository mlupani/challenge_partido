import { Player } from '../interfaces/'
import { PlayerItem } from './'

interface Props {
    teamName: string;
    players?: Player[];
    deleteTeam: (name: string) => void
    editTeam: (oldName: string) => void
    setSelectedPlayerState: (player: Player) => void
    deleteFromTeam: (playerId: string) => void
}

export const PlayerList = ({ teamName, players, deleteTeam, editTeam, setSelectedPlayerState, deleteFromTeam }: Props) => {
  return (
    <div className='flex justify-center flex-col items-center mt-10 mx-8 min-h-96 w-80 border-2 border-blue-700'>
        <button onClick={() => deleteTeam(teamName)} >Eliminar equipo</button>
        <div className='flex justify-between'>
            <h3 className='mr-3'>{teamName}</h3>
            <button className='underline' onClick={() => editTeam(teamName)}>Editar</button>
        </div>
        <ol className='w-60'>
            {
                players?.map(player => <PlayerItem key={player.player_id} player={player} setSelectedPlayerState={setSelectedPlayerState} deleteFromTeam={deleteFromTeam} />)
            }
        </ol>
        <p>Equipo formado: {teamName && players?.length ? 'OK' : 'No formado'} </p>
        <p>Equipo completado: {teamName && players?.length === 5 ? 'OK' : 'Incompleto'} </p>
    </div>
  )
}

export default PlayerList
