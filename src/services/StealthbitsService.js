import axios from 'axios'

// TODO: put into environment variable
const STEALTHBITS_URL = 'https://sb-backendapi.azurewebsites.net/api'

export async function getDashboard() {
    const [computers, users] = await Promise.all([
        getTotalComputers(),
        getTotalUsers()
    ])

    return { computers, users }
}

async function getTotalComputers() {
    const computers = await axios.get(`${STEALTHBITS_URL}/Computers`)

    return computers.data.length
}

export async function getComputers() {
    const computers = await axios.get(`${STEALTHBITS_URL}/Computers`)

    return computers.data
}

async function getTotalUsers() {
    const users = await axios.get(`${STEALTHBITS_URL}/Users`)

    return users.data.length
}

export async function getUsers() {
    const users = await axios.get(`${STEALTHBITS_URL}/Users`)

    return users.data
}