import { defineStore} from "pinia";

export const useTestStore = defineStore("test",{
    state: () => ({
        data: null
    }),
    getters: {
        getComments (): any {
            return this.data
        }
    },
    actions: {
        async fetchComments () {
            try {
                const result = await $fetch('https://jsonplaceholder.typicode.com/comments') as any
                this.data = result
            }
            catch (error) {
                console.log(error)
            }
        }
    },
})
