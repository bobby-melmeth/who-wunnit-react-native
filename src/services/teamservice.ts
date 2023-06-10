import axios from "axios"

export const getTeams = async () => {
try {
    const { data } = await axios.get('http://localhost:8088/teams/')
    console.log('DATAAAA', JSON.stringify(data, null, 2))
    return data
} catch (error) {
    console.log(error)
}
}