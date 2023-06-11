import axios from "axios"

export const getTeams = async () => {
    try {
        const { data } = await axios.get('http://192.168.0.228:8088/teams/')
        return data
    } catch (error) {
        console.log('DB error', error)
    }
}

export const getSquad = async (teamId: number) => {
    console.log(teamId)
    try {
        const responseData = await axios(`https://api.football-data.org/v4/teams/${String(teamId)}`, {
            headers: {
                'X-Auth-Token': 'c6850127e15046a984cb953a27a437d2'
            }
        });

        return responseData.data.squad;
    } catch (error) {
        console.log('ERRORFROMSERVICE', error)
    }
}