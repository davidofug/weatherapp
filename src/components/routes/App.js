import * as React from 'react'
import Home from '../views/Home'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

function App() {

    return(
        <Router>
            <Switch>
                <Route path="/" exact>

                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
