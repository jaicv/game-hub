import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7e72e072750f4334bb6e44157cd44529'
    }
})