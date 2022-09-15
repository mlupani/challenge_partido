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
    <div className='flex flex-col justify-between mt-10 mx-8 h-max w-80 border-2 border-gray-700 bg-white shadow-2xl shadow-black opacity-100'>
        <div className="flex">
            <div className="col-sm-10 flex items-center justify-center text-center"><h3 className='text-lg'>{teamName}</h3></div>
            <div className="col-sm-2 flex items-end justify-end gap-1">
                <button title="Eliminar equipo" onClick={() => deleteTeam(teamName)} ><i className="bi bi-trash-fill"></i></button>
                <button title="Editar equipo" onClick={() => editTeam(teamName)}><i className="bi bi-pencil-fill"></i></button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center '>
            {
                players?.map(player => <PlayerItem key={player.player_id} player={player} setSelectedPlayerState={setSelectedPlayerState} deleteFromTeam={deleteFromTeam} del={true} />)
            }
            <p>Equipo formado: {teamName && players?.length ? <span className='text-success font-bold'>OK!</span> : <span className='text-danger font-bold'>No Formado</span>} </p>
            <p>Equipo completado: {teamName && players?.length === 5 ? <span className='text-success font-bold'>OK!</span> : <span className='text-danger font-bold'>Incompleto</span>} </p>
        </div>
    </div>
  )
}

export default PlayerList
