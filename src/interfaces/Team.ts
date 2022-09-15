export interface Player {
    player_id: string,
    player_name: string,
    team_name: string,
    player_image?: string
}
export interface Team {
    teamName: string,
    players: Player[]
}
