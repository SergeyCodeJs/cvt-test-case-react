import React from 'react';
import Layout from '../../hoc/layout/layout'
import Switcher from '../switcher/switcher'
import Movies from '../movies/movies'
import Genres from '../genres/genres'
import Channels from '../channels/channels-container'
import DummyMoviesService from '../../services/dummyMoviesService'

function App() {
    const movieService = new DummyMoviesService();

    return (
        <Layout>
            <Switcher/>
            <Movies movieService={movieService}/>
            <Genres movieService={movieService}/>
            <Channels movieService={movieService}/>
        </Layout>
    );
}

export default App;
