import axios from 'axios'

const getData = async (location = 'Kampala') => {
    
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=fdd18b52417e444c842134157212210&q=${location}`;
    let response = ''

    try {
        response = await axios.get(API_URL);
        // console.log(response)
        let { data } = response
        return data
        // console.log(data)
    } catch (error) {

        console.log(error)
        console.log(response)
        return {'error': 'Resource not found'}
    }
}

export default getData