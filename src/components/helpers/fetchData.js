import axios from 'axios'

const apiKey = process.env.REACT_APP_APIKEY

const getData = async (location = 'Kampala') => {

    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`;
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