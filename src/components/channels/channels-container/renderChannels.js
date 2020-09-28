import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Channels from './channels-container'
import Channel from './channel/channel'
import withDummyMovieService from '../../../hoc/withDummyMovieService'
import {fetchData} from '../../../redux/actions/actions'
import Spinner from '../../spinner/spinner'
import ErrorIndicator from '../../error-indicator/error-indicator'

function RenderChannels(props) {

    const {fetchData, dataState} = props;
    const {channels} = dataState;
    const {loading, error, data} = channels;

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator/>
    }

    const channelsComponents = getChannels(data);

    return <Channels channelsComponents={channelsComponents}/>
}

function getChannels(channels) {
    return channels.map((channel, index) => {
        const {name, logo, schedule} = channel;
        return (<Channel key={index} name={name} logo={logo} schedule={schedule}/>)
    })
}

const mapStateToProps = ({dataState}) => {
    return {dataState}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {movieService} = ownProps;

    return {
        fetchData: () => dispatch(fetchData(movieService, 'channels')())
    }
}

export default withDummyMovieService(connect(mapStateToProps, mapDispatchToProps)(RenderChannels))