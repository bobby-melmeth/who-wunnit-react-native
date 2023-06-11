import axios from "axios"
import { PlayerFull, PlayerMatches } from "../types/Player";


export const getPlayer = async (playerId: number): Promise<PlayerFull | undefined> => {
    console.log(playerId)
    try {
        const responseData = await axios(`https://api.football-data.org/v4/persons/${String(playerId)}`, {
            headers: {
                'X-Auth-Token': 'c6850127e15046a984cb953a27a437d2'
            }
        });

        return responseData.data;
    } catch (error) {
        console.log('ERRORFROMSERVICE', error)
    }
}

export const getPlayerMatches = async (playerId: number, limit: number): Promise<PlayerMatches | undefined> => {

    try {
        const responseData = await axios(`https://api.football-data.org/v4/persons/${playerId}/matches?limit=10`, {
            headers: {
                'X-Auth-Token': 'c6850127e15046a984cb953a27a437d2'
            }
        });
        console.log('TOsdf', responseData.data)
        return responseData.data;
    } catch (error) {
        console.log('ERRORFROMSERVICE', error)
    }
}









