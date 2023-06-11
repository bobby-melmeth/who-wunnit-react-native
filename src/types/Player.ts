export type Player = {
    id: number
    name: string
    position: string
    dateOfBirth: string
    nationality: string
}

export type PlayerPositionType = 'Goalkeeper' | 'Defence' | 'Midfield' | 'Offence'


export interface PlayerFull {
    id: number;
    name: string;
    firstName: string;
    lastName?: any;
    dateOfBirth: string;
    nationality: string;
    section: string;
    position: string;
    shirtNumber: number;
    lastUpdated: string;
    currentTeam: CurrentTeam;
  }

  export interface CurrentTeam {
    area: Area;
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
    runningCompetitions: RunningCompetition[];
    contract: Contract;
  }

  export interface Contract {
    start: string;
    until: string;
  }

  export interface RunningCompetition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  }

  export interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
  }


  export interface PlayerMatches {
    filters: Filters;
    resultSet: ResultSet;
    aggregations: Aggregations;
    person: Person;
    matches: Match[];
  }

  export interface Match {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: string;
    status: string;
    matchday?: number;
    stage: string;
    group?: string;
    lastUpdated: string;
    homeTeam: HomeTeam;
    awayTeam: HomeTeam;
    score: Score;
    odds: Odds;
    referees: Referee[];
  }

  export interface Referee {
    id: number;
    name: string;
    type: string;
    nationality?: string;
  }

  export interface Odds {
    homeWin: number;
    draw: number;
    awayWin: number;
  }

  export interface Score {
    winner: string;
    duration: string;
    fullTime: FullTime;
    halfTime: FullTime;
  }

  export interface FullTime {
    home: number;
    away: number;
  }

  export interface HomeTeam {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
  }

  export interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: Winner;
  }

  export interface Winner {
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
  }

  export interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  }

  export interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
  }

  export interface Person {
    id: number;
    name: string;
    firstName: string;
    lastName?: any;
    dateOfBirth: string;
    nationality: string;
    section: string;
    position?: any;
    shirtNumber?: any;
    lastUpdated: string;
  }

  export interface Aggregations {
    matchesOnPitch: number;
    startingXI: number;
    minutesPlayed: number;
    goals: number;
    ownGoals: number;
    assists: number;
    penalties: number;
    subbedOut: number;
    subbedIn: number;
    yellowCards: number;
    yellowRedCards: number;
    redCards: number;
  }

  export interface ResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
  }

  export interface Filters {
    limit: number;
    offset: number;
    competitions: string;
    permission: string;
  }
