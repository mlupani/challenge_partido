interface Props {
    createTeam: () => void
}

export const Welcome = ({ createTeam }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className="text-2xl bg-white p-2 rounded-lg font-bold">Bienvenido! Crea tus equipos para comenzar! </h1>
        <br></br>
        <button className="btn btn-primary" onClick={createTeam} >Crea tu primer equipo!</button>
    </div>
  )
}

export default Welcome
