import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

export const createType= async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data

}
export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data

}
export const createItems= async (vitamin) => {
    const {data} = await $authHost.post('api/vitamins', vitamin)
    return data

}
export const fetchItems = async (typeId, page, limit = 5) => {
    const {data} = await $host.get('api/vitamins', {params:{
            typeId, page, limit
        }})
    return data

}
export const fetchOneItem = async (id) => {
    const {data} = await $host.get('api/vitamins/' + id)
    return data

}