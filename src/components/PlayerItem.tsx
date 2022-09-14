import React from 'react'
import { Player } from '../interfaces/Team'

interface Props {
    player: Player,
    setSelectedPlayerState: (player: Player) => void
}

const PlayerItem = ({player, setSelectedPlayerState}: Props) => {
  return (
    <div onClick={() => setSelectedPlayerState(player)}>
        <div className='flex flex-row justify-between mx-1 my-2 border-t-cyan-50 border-solid border-2 p-2'>
            <div className='flex flex-col text-left cursor-pointer'>
                <h5>{player.player_name}</h5>
                <p className='text-gray-600 font-bold text-xs'>{player.team_name}</p>
            </div>
            {
                player.player_image ?
                    <img className='w-11 h-11 rounded-full self-center' src={player.player_image}></img> : null
            }
        </div>
    </div>
  )
}

export default PlayerItem