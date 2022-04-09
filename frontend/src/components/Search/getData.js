import axios from "axios"
import backend from "../../backend"
// eslint-disable-next-line import/no-anonymous-default-export
export default async cep => {
    const link = backend.link
    let axiosResponse
    try {
        axiosResponse = await axios.get(link+`/${cep}`)
    } catch (err) {
        return undefined
    }
    
    return axiosResponse.data
}