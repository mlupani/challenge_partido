import { Player } from '../interfaces/Team'

interface Props {
    player: Player,
    setSelectedPlayerState: (player: Player) => void
    selectedPlayer?: Player | null | undefined
    deleteFromTeam: (playerId: string ) => void
}

const PlayerItem = ({player, setSelectedPlayerState, selectedPlayer, deleteFromTeam}: Props) => {
  return (
    <div onClick={() => setSelectedPlayerState(player)}>
        <div className={`flex flex-row cursor-pointer justify-between mx-1 my-2 border-t-cyan-50 border-solid border-2 p-2 ${selectedPlayer?.player_id === player.player_id ? 'bg-blue-600' : ''} relative`}>
            <div className='flex flex-col text-left'>
                <h5>{player.player_name}</h5>
                <p className='text-gray-600 font-bold text-xs'>{player.team_name}</p>
            </div>
            {
                player.player_image ?
                    <img className='w-11 h-11 rounded-full self-center mr-3' src={player.player_image}></img> : null
            }
            <button className='absolute top-0 right-1 font-bold' onClick={() => deleteFromTeam(player.player_id)}>X</button>
        </div>
    </div>
  )
}

export default PlayerItem