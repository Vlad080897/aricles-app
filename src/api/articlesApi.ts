import { $axios } from "./api";

export const articlesApi = {
    getArt: () => {
        return $axios.get('').then(res => res.data);
    }
}