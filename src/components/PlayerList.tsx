import { Player } from '../interfaces/'
import { PlayerItem } from './'
import { useContext } from 'react'
import { TeamContext } from '../context/TeamsContext'

interface Props {
    teamName: string;
    players?: Player[];
}

export const PlayerList = ({ teamName, players }: Props) => {
  const { deleteTeam, editTeam } = useContext(TeamContext)
  return (
    <div className='flex flex-col justify-between mt-2 md:mt-10 mx-2 md:mx-8 h-max w-80 border-2 border-gray-700 bg-white shadow-2xl shadow-black opacity-100 rounded-lg'>
        <div className="flex">
            <div className="col-10 flex items-center justify-center text-center"><h3 className='text-xl font-bold my-1'>{teamName}</h3></div>
            <div className="col-2 flex items-center justify-end gap-1 px-2">
                <button title="Editar equipo" onClick={() => editTeam(teamName)}><i className="bi bi-pencil-fill"></i></button>
                <button title="Eliminar equipo" onClick={() => deleteTeam(teamName)} ><i className="bi bi-trash-fill"></i></button>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center list-group'>
            {
                players?.map(player => <PlayerItem key={player.player_id} player={player} del={true} />)
            }
            {
                !players?.length && <div><br></br><h1 className='flex justify-center text-center text-lg '>Tu equipo esta vacio! <br></br> Busca jugadores y añadelos a tu equipo!</h1><br></br></div>
            }
            <p>Equipo formado: {teamName && players?.length ? <span className='text-success font-bold'>OK!</span> : <span className='text-danger font-bold'>No Formado</span>} </p>
            <p>Equipo completado: {teamName && players?.length === 5 ? <span className='text-success font-bold'>OK!</span> : <span className='text-danger font-bold'>Incompleto</span>} </p>
        </div>
    </div>
  )
}

export default PlayerList
