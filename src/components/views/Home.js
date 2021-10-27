import * as React from 'react'
import Hero from '../partials/Hero'
import Details from '../partials/Details'

function Home() {

    // const ages = [30, 23, 24, 21, 19]
    // const [,david , abudi, ...rest] = ages

    return (
        <>
            {/*
                {david}<br/>
                {abudi}
            */}
            <Hero />
            <Details />
        </>
    )
}

export default Home
