import { useContext } from 'react'
import { PlayerList, SearchList, Welcome } from './components/'
import { TeamContext } from './context/TeamsContext'
import { useSearch } from './hooks/'

function App () {
  const { createTeam, teams, selectedPlayer, addToTeam } = useContext(TeamContext)
  const { players, searchPlayer, searching, error } = useSearch()

  return (
    <div id="div_body" className="w-full h-screen flex-col">
      <div id="teams" className='flex justify-center items-center flex-col md:flex-row '>
        <div className='flex justify-center items-center my-2 sm:d-block md:hidden' id="add-mobile">
          {
            teams.length === 1 && <button className='btn btn-primary' onClick={createTeam} >Crea tu segundo equipo!</button>
          }
        </div>
        {
          teams.length
            ? teams.map((team, i) => (
              <>
                {
                  i === 0
                    ? <SearchList searchPlayer={searchPlayer} players={players} searching={searching} error={error} />
                    : null
                }
                <div className='flex justify-center flex-row md:mb-0' key={i}>
                  {
                    selectedPlayer
                      ? <div className={`flex flex-col ml-5 justify-center ${i === 0 ? 'hidden' : ''}`}>
                        <button title={`Agregar jugador a ${team.teamName}`} onClick={() => addToTeam(i)} ><i className="bi bi-arrow-right-square-fill text-3xl text-white"></i></button>
                      </div>
                      : null
                  }
                  <PlayerList teamName={team.teamName} players={team.players} />
                  {
                    selectedPlayer
                      ? <div className={`flex flex-col mr-5 justify-center ${i === 1 ? 'hidden' : ''}`}>
                      <button title={`Agregar jugador a ${team.teamName}`} disabled={!selectedPlayer} onClick={() => addToTeam(i)} ><i className="bi bi-arrow-left-square-fill text-3xl text-white"></i></button>
                    </div>
                      : null
                  }
                </div>
                </>
            ))
            : <Welcome />
        }
      </div>
      <div className='justify-center items-center mt-10 hidden  md:flex' id="add">
        {
          teams.length === 1 && <button className='btn btn-primary' onClick={createTeam} >Crea tu segundo equipo!</button>
        }
      </div>
    </div>
  )
}

export default App
