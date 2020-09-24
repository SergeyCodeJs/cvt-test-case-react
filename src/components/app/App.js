import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from '../../hoc/layout/layout'
import Switcher from '../switcher/switcher'
import Movies from '../../pages/movies'
import Channels from '../channels/renderChannels'
import Login from '../login/login'
import DummyMoviesService from '../../services/dummyMoviesService'

function App() {
    const movieService = new DummyMoviesService();

    return (
        <Router>
            <Layout>
                <Switcher/>
                <Switch>
                    <Route path="/channels">
                        <Channels movieService={movieService}/>
                    </Route>
                    <Route path="/">
                        <Movies movieService={movieService}/>
                    </Route>
                    <Route component={<Movies/>}></Route>
                </Switch>
                {/* <Login/> */}
            </Layout>
        </Router>
    );
}

export default App;
