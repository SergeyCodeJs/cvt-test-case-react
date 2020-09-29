import React, {useState, useEffect, useCallback} from 'react';
import Spinner from '../components/spinner/spinner';
import ErrorIndicator from '../components/error-indicator/error-indicator';

const withChannels = (View) => {
    return (props) => {
        const [state,
            updateState] = useState({data: null, loading: true, error: false})

        const update = useCallback(() => {
            updateState({data: null, loading: true, error: false})

            props
                .getChannels()
                .then((data) => {
                    updateState({data: data, loading: false, error: false});
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

        const channels = state.data

        return <View {...props} channels={channels}/>;
    }
};

export default withChannels;
