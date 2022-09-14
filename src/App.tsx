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
  const [searching, setSearching] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>()

  const searchPlayer = async (name: string) => {
    setSearching(true)
    setPlayers([])
    const { data } = await api.get<GetPlayersResp[]>(`?action=get_players&player_name=${name}&APIkey=${import.meta.env.VITE_API_KEY}`)
    const newPlayers = data.filter((v,i,a)=>a.findIndex(v2=>(v2.player_id===v.player_id))===i)
    setPlayers(newPlayers.map(({player_id, player_name, team_name, player_image}) => {
      return {
        player_id,
        player_name,
        team_name,
        player_image
      }
    }))
    setSearching(false)
  }

  const setSelectedPlayerState = (player:Player) => {
    setSelectedPlayer(player)
  }

  const AddToTeam = (teamId: number) => {
    const team = teams.find((t,i)=> i === teamId)
    let err = false
    if(team?.players.length === 5) {
      alert('El equipo solo puede tener hasta 5 jugadores')
      return
    }
    teams.forEach(t => t.players.forEach(p => {
      if( p.player_id === selectedPlayer?.player_id)  err = true
    }))
    if(err) {
      alert('El jugador ya pertenece a un equipo')
      return
    }
    if(team && selectedPlayer) team.players.push(selectedPlayer)
    setSelectedPlayer(null)
  }

  return (
    <div className="bg-green-600 w-full h-screen flex-col">
      <div id="teams" className='flex justify-center items-center flex-row'>
        {
          teams.length ?
            teams.map((team, i) => (
                <>
                <div className={`flex flex-col mx-3 ${i === 0 ? 'hidden' : ''}`}>
                  <button disabled={!selectedPlayer ? true : false} onClick={() => AddToTeam(i)} >Agregar</button>
                </div>
                <PlayerList teamName={team.teamName} players={team.players} deleteTeam={deleteTeam} editTeam={editTeam} setSelectedPlayerState={setSelectedPlayerState} />
                <div className={`flex flex-col mx-3 ${i === 1 ? 'hidden' : ''}`}>
                  <button disabled={!selectedPlayer ? true : false} onClick={() => AddToTeam(i)} >Agregar</button>
                </div>
                {
                  i === 0 ?
                  <SearchList searchPlayer={searchPlayer} players={players} searching={searching} setSelectedPlayerState={setSelectedPlayerState} /> : null
                }
                </>
              )
            ) :
            <Welcome createTeam={createTeam} />
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
