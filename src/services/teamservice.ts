import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Standing, Team } from "../screens/Home/types"
import { Player } from "../types/Player"
import Api from "../utils/Api"




export const useGetTeams = () => {
    return useQuery({
        queryKey: ['allTeams'],
        queryFn: async () => {
            const { data } = await Api.get('teams/')
            return data as Team[]
        }
    })

}



export const useGetSquad = (teamId: number) => {
    return useQuery({
        queryKey: ['squad', teamId],
        keepPreviousData: true,
        queryFn: async () => {
            const { data } = await axios.get(`https://api.football-data.org/v4/teams/${String(108)}`, {
                headers: {
                    'X-Auth-Token': process.env.XAUTH_TOKEN
                }
            })
            console.log('squad', JSON.stringify(data.squad, null, 2))
            return data.squad as Player[]
        }
    })
}


export const useGetStandings = (season: number) => {
    return useQuery({
        queryKey: ['squad', season],
        queryFn: async () => {
            const { data } = await axios.get(`https://api.football-data.org/v4/competitions/PL/standings?season=${season}`, {
                headers: {
                    'X-Auth-Token': process.env.XAUTH_TOKEN
                }
            })
            console.log('standfi', JSON.stringify(data.standings, null, 2))
            return data.standings as Standing[]
        }
    })

}

