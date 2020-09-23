import React, {Fragment} from 'react';
import Layout from '../../hoc/layout/layout'
import Switcher from '../switcher/switcher'
import Movies from '../movies/movies'
import Genres from '../genres/genres'
import Channels from '../channels/channels-container'
import SectionTitle from '../section-title/sectionTitle'
import DummyMoviesService from '../../services/dummyMoviesService'

function App() {
    const movieService = new DummyMoviesService();

    return (
        <Layout>
            <Switcher/>
            <SectionTitle title="&#128293;Новинки"/>
            <Movies movieService={movieService}/>
            <SectionTitle title="Жанры"/>
            <Genres movieService={movieService}/>
            {/* <Channels movieService={movieService}/> */}
        </Layout>
    );
}

export default App;
