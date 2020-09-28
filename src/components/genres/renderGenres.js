import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import withDummyMovieService from '../../hoc/withDummyMovieService'
import GenresContainer from './genres-container/genresContainer'
import {fetchData} from '../../redux/actions/actions'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator'

function Genres(props) {

    const {fetchData, dataState, movieService} = props;
    const {genres} = dataState;
    const {loading, error, data} = genres;

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator/>
    }

    return (<GenresContainer genres={data}/>)
}

const mapStateToProps = ({dataState}) => {
    return {dataState}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {movieService} = ownProps;

    return {
        fetchData: () => dispatch(fetchData(movieService, 'genres')())
    }
}

export default withDummyMovieService(connect(mapStateToProps, mapDispatchToProps)(Genres))