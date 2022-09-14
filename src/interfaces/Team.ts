export interface Team {
    teamName: string,
    players?: Player[]
}

export interface Player {
    id: string,
    name: string,
    team_name: string,
    player_image?: string
}