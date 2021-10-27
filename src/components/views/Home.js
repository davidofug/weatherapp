import * as React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../partials/Hero'
import Details from '../partials/Details'
function Home() {
    // let form = React.useRef('')
/*     const handleSubmit = (e) => {
        e.preventDefault()
        console.log( form.current[0])
    } */

    return (
        <>
            <Hero />
            <Details />
        </>
    )
}


export default Home
