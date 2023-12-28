import axios from "axios"

const client = axios.create({
    baseURL: '/users/',
    headers: {
        "Content-Type": "application/json"
    }
})

const endpoints = {
    REGISTER: 'register',
    LOGIN: 'login',
    SENDCONFIRMCODE: 'sendConfirmCode',
    LOGOUT: 'logout'
}

export class AuthService {
    static async register(payload) {
        try {
            return await client.post(endpoints.REGISTER, payload)
        } catch (err) {
            console.log("Error registering user", err)
        }
    }

    static async login(payload) {
        try {
            return await client.post(endpoints.LOGIN, payload)
        } catch (err) {
            console.log("Error logging user in", err)
        }
    }

    static async sendConfirmCode(payload) {
        try {
            return await client.post(endpoints.SENDCONFIRMCODE, payload)
        } catch (err) {
            console.log("Error sending confirm code", err)
        }
    }

    static async logout(payload) {
        try {
            return await client.post(endpoints.LOGOUT, payload)
        } catch (err) {
            console.log("Error logging user out", err)
        }
    }
}