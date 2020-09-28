import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import withDummyMovieService from '../hoc/withDummyMovieService'
import {fetchData} from '../redux/actions/actions'
import MoviesContainer from '../components/movies/movies-container/moviesContainer'
import Genres from '../components/genres/renderGenres'
import SectionTitle from '../components/section-title/sectionTitle'
import Spinner from '../components/spinner/spinner'
import ErrorIndicator from '../components/error-indicator/error-indicator'

function Movies(props) {

    const {fetchData, dataState, movieService} = props;
    const {movies} = dataState;
    const {loading, error, data} = movies;

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator/>
    }

    return (
        <Fragment>
            <SectionTitle title="&#128293;     Новинки"/>
            <MoviesContainer movies={data}/>
            <SectionTitle title="Жанры"/>
            <Genres/>
        </Fragment>
    )
}

const mapStateToProps = ({dataState}) => {
    return {dataState}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {movieService} = ownProps;

    return {
        fetchData: () => dispatch(fetchData(movieService, 'movies')())
    }
}

export default withDummyMovieService(connect(mapStateToProps, mapDispatchToProps)(Movies))