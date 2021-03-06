import React from 'react'
import getData from '../helpers/fetchData'

function Hero() {
    const [stateLocation, setStateLocation] = React.useState('')
    const [weatherInfo, setWeatherInfo] = React.useState({})
    const [error, setError] = React.useState('')

    const handleInput = event => {
        // const location = event.target.value
        const {value : inputLocation} = event.target
        // console.log( location )
        setStateLocation(inputLocation)
    }

    const handleSubmit = async event => {
        event.preventDefault()
        setError('')
        setWeatherInfo({})
        // console.log(event)
        // console.log('Form submitted')
        const response = await getData(stateLocation)

        // console.log(response)
        if (response) {
            const { location: { country, lon, lat } } = response
            const { current: { temp_c, temp_f, condition: { text, icon, code } } } = response
            setWeatherInfo({ country, lon, lat, temp_c, temp_f, text, icon, code })
        }
        else {
            setError('Technical challenges encountered. Please try again!')
        }
    }

    const { country, lon, lat, temp_c, temp_f, text, icon, code } = weatherInfo

    return (
        <div>

            <h1> Weather App</h1>
            <p>Use this App to find out the current weather info of a location.</p>
            <form onSubmit={handleSubmit} action="#" method="post">
                <input
                    type="text"
                    placeholder="Location"
                    onChange={handleInput}
                />
                <input type="submit" value="Go"/>
            </form>
            {error}
            {country} <br/>
            {lon} <br/>
            {lat} <br/>
            {temp_c} <br/>
            {temp_f}<br/>
            {text} <br/>
            {icon && <img src={icon} />}<br/>
            {code}
        </div>
    )
}

export default Hero
