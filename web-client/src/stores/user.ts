import {defineStore} from "pinia";

interface User {
    name: string,
    age: number,
    active: boolean
}

const user: User = {
    name: "Yukie",
    age: 17,
    active: true
}

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            ...user
        }
    }
})