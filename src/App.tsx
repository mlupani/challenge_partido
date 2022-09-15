import { PlayerList, SearchList, Welcome } from './components/'
import { useManageTeams, useSearch } from './hooks/'

function App () {
  const { teams, selectedPlayer, createTeam, deleteTeam, editTeam, deleteFromTeam, setSelectedPlayerState, AddToTeam } = useManageTeams()
  const { players, searchPlayer, searching } = useSearch()

  return (
    <div className="bg-green-600 w-full h-screen flex-col">
      <div id="teams" className='flex justify-center items-center flex-row'>
        {
          teams.length
            ? teams.map((team, i) => (
                <>
                <div className={`flex flex-col mx-3 ${i === 0 ? 'hidden' : ''}`}>
                  <button disabled={!selectedPlayer} onClick={() => AddToTeam(i)} >Agregar</button>
                </div>
                <PlayerList teamName={team.teamName} players={team.players} deleteTeam={deleteTeam} editTeam={editTeam} setSelectedPlayerState={setSelectedPlayerState} deleteFromTeam={deleteFromTeam} />
                <div className={`flex flex-col mx-3 ${i === 1 ? 'hidden' : ''}`}>
                  <button disabled={!selectedPlayer} onClick={() => AddToTeam(i)} >Agregar</button>
                </div>
                {
                  i === 0
                    ? <SearchList searchPlayer={searchPlayer} players={players} searching={searching} setSelectedPlayerState={setSelectedPlayerState} selectedPlayer={selectedPlayer} deleteFromTeam={deleteFromTeam} />
                    : null
                }
                </>
            )
            )
            : <Welcome createTeam={createTeam} />
        }
      </div>
      <div className='flex justify-center items-center mt-10' id="add">
        {
          teams.length === 1 && <button onClick={createTeam} >Crear Otro Equipo</button>
        }
      </div>
    </div>
  )
}

export default App
