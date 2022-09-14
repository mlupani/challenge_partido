import React from 'react'

interface Props {
    createTeam: () => void
}

const Welcome = ({createTeam}: Props ) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h2>Bienvenido! Crea tus equipos para comenzar! </h2>
        <button onClick={createTeam} >Crear Equipo</button>
    </div>
  )
}

export default Welcome