import { useState } from 'react'
import { api } from './api/apifootball'
import PlayerList from './components/PlayerList'
import SearchList from './components/SearchList'
import Welcome from './components/Welcome'
import useManageTeams from './hooks/useManageTeams'
import { GetPlayersResp } from './interfaces/ApiFootball'
import { Player } from './interfaces/Team'

function App() {

  const { teams, createTeam, deleteTeam, editTeam } = useManageTeams()
  const [players, setPlayers] = useState<Player[]>([])

  const searchPlayer = async (name: string) => {
    const { data } = await api.get<GetPlayersResp>(`?action=get_players&player_name=${name}&APIkey=${import.meta.env.VITE_API_KEY}`)
    console.log(data)
  }

  console.log(import.meta.env.VITE_API_KEY)

  return (
    <div className="bg-green-600 w-full h-screen flex-col">
      <div id="teams" className='flex justify-center items-center flex-row'>
        {
          teams.length ?
            teams.map((team, i) => (
                <>
                <PlayerList teamName={team.teamName} players={team.players} deleteTeam={deleteTeam} editTeam={editTeam} />
                {
                  i === 0 ?
                  <SearchList searchPlayer={searchPlayer} players={players} /> : null
                }
                </>
              )
            ) :
            <Welcome createTeam={createTeam} />
        }
      </div>
      <div className='flex justify-center items-center' id="add">
        {
          teams.length === 1 && <button onClick={createTeam} >Crear Otro Equipo</button>
        }
      </div>
    </div>
  )
}

export default App
