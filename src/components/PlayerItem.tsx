import { useContext } from 'react'
import { TeamContext } from '../context'
import { Player } from '../interfaces/'

interface Props {
    player: Player,
    del?: boolean
}

export const PlayerItem = ({ player, del }: Props) => {
  const { setSelectedPlayer, selectedPlayer, deleteFromTeam } = useContext(TeamContext)
  return (
    <div onClick={!del ? () => setSelectedPlayer(player) : () => null} className={`list-group-item list-group-item-action ${selectedPlayer?.player_id === player.player_id && !del ? 'active' : ''} `}>
        <div className={'flex flex-row cursor-pointer justify-between mx-1 md:my-2'}>
            <div className='flex flex-col text-left'>
                <h5>{player.player_name}</h5>
                <p className='text-gray-600 font-bold text-xs'>{player.team_name}</p>
            </div>
            <div className='flex'>
              <img className='w-9 h-9  md:w-11 md:h-11 rounded-full self-center mr-3 mx-1' src={player.player_image ? player.player_image : 'https://apiv3.apifootball.com/badges/players/97489_t-messing.jpg'}></img>
            {
              del && <button className='font-bold' onClick={() => deleteFromTeam(player.player_id)}><i className="bi bi-trash-fill"></i></button>
            }
            </div>
        </div>
    </div>
  )
}

export default PlayerItem
