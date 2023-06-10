import axios from "axios"
import Api from "../utils/Api"


export const createUser = async (email: string, name: string) => {
    try {
        const { data } = await axios.post('http://localhost:8088/users', {
            email,
            name
        })
        console.log('THE DATA', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async (id: string) => {
    try {
        const { data } = await axios.get(`http://localhost:8088/users/${id}`)
        console.log('THE DATA', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getUsers = async () => {
    try {
        const { data } = await axios.get('http://localhost:8088/users/')
        return data
    } catch (error) {
console.log(error)
    }
}

export const updateUser = async (id: string, email: string, name: string) => {
    try {
        const { data } = await axios.put(`http://localhost:8088/users/${id}`, {
            email,
            name
        })
        console.log('THE DATA', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (id: string) => {
    try {
        const { data } = await axios.delete(`http://localhost:8088/users/${id}`)
        return data
    } catch (error) {
     console.log(error)
    }
}

