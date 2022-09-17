import { useContext } from 'react'
import { TeamContext } from '../context/TeamsContext'

export const Welcome = () => {
  const { createTeam } = useContext(TeamContext)
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className="text-2xl bg-white p-4 rounded-lg font-bold text-center">Bienvenido! <br></br> Crea el partido de tus sueños! </h1>
        <br></br>
        <button className="btn btn-primary" onClick={createTeam} >Crea tu primer equipo!</button>
    </div>
  )
}

export default Welcome
