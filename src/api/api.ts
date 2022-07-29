import axios from 'axios'

export const $axios = axios.create({
    baseURL: 'https://baconipsum.com/api/?type=meat-and-filler'
})