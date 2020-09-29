import React, {useState, useEffect, useCallback} from 'react';
import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';

const withMovies = (View) => {
    return (props) => {
        const [state,
            updateState] = useState({data: null, loading: true, error: false})

        const update = useCallback(() => {
            updateState({data: null, loading: true, error: false})

            props
                .getMovies()
                .then((data) => {
                    Promise
                        .all(data)
                        .then(movies => {
                            updateState({data: movies, loading: false, error: false});
                        })
                })
                .catch(() => {
                    updateState({data: null, loading: false, error: true});
                });
        }, [props]);

        useEffect(() => {
            update();
        }, [update]);

        if (state.loading) {
            return <Spinner/>;
        }

        if (state.error) {
            return <ErrorIndicator/>;
        }

        const movies = state.data[0];
        const genres = state.data[1];

        return <View {...props} movies={movies} genres={genres}/>;
    }

};

export default withMovies;
