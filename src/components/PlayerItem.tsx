import { Player } from '../interfaces/'

interface Props {
    player: Player,
    setSelectedPlayerState: (player: Player) => void
    selectedPlayer?: Player | null | undefined
    deleteFromTeam: (playerId: string) => void
    del?: boolean
}

export const PlayerItem = ({ player, setSelectedPlayerState, selectedPlayer, deleteFromTeam, del }: Props) => {
  return (
    <div onClick={() => setSelectedPlayerState(player)} className={`list-group-item list-group-item-action ${selectedPlayer?.player_id === player.player_id ? 'active' : ''} `}>
        <div className={'flex flex-row cursor-pointer justify-between mx-1 my-2 p-2'}>
            <div className='flex flex-col text-left'>
                <h5>{player.player_name}</h5>
                <p className='text-gray-600 font-bold text-xs'>{player.team_name}</p>
            </div>
            {
                player.player_image
                  ? <img className='w-11 h-11 rounded-full self-center mr-3 mx-1' src={player.player_image}></img>
                  : null
            }
            {
              del && <button className='font-bold' onClick={() => deleteFromTeam(player.player_id)}><i className="bi bi-trash-fill"></i></button>
            }
        </div>
    </div>
  )
}

export default PlayerItem
