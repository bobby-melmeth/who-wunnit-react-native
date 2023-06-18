export type Team = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string;
    areaId: number;
}

export interface Standings {
    filters: Filters
    area: Area
    competition: Competition
    season: Season
    standings: Standing[]
  }

  export interface Filters {
    season: string
  }

  export interface Area {
    id: number
    name: string
    code: string
    flag: string
  }

  export interface Competition {
    id: number
    name: string
    code: string
    type: string
    emblem: string
  }

  export interface Season {
    id: number
    startDate: string
    endDate: string
    currentMatchday: number
    winner: Winner
  }

  export interface Winner {
    id: number
    name: string
    shortName: string
    tla: string
    crest: string
    address: string
    website: string
    founded: number
    clubColors: string
    venue: string
    lastUpdated: string
  }

  export interface Standing {
    stage: string
    type: string
    group: any
    table: Table[]
  }

  export interface Table {
    position: number
    team: TeamInStanding
    playedGames: number
    form: string
    won: number
    draw: number
    lost: number
    points: number
    goalsFor: number
    goalsAgainst: number
    goalDifference: number
  }

  export interface TeamInStanding {
    id: number
    name: string
    shortName: string
    tla: string
    crest: string
  }