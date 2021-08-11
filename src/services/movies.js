
import axios from "axios";

export const GetService = async () => {
    const response = await axios.get("https://utsavmovies2.free.beeceptor.com");
    console.log(response.data)
    return response.data
}