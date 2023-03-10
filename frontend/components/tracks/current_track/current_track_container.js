import {connect} from 'react-redux';
import CurrentTrack from './current_track';
import { playTrack, pauseTrack, restartTrack, updatePlaypoint, receiveIntervalId, clearIntervalId } from '../../../actions/track_playing_actions';
import {fetchTracks} from '../../../actions/track_actions';
import {fetchUser} from '../../../actions/user_actions';
import { startLoading, stopLoading } from '../../../actions/loading_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId],
        trackPlaying: state.entities.tracks[state.ui.trackPlaying.track_id],
        timeElapsed: state.ui.trackPlaying.timeElapsed,
        playing: state.ui.trackPlaying.playing,
        audioPlayer: ownProps.audioPlayer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        restartTrack: () => dispatch(restartTrack()),
        updatePlaypoint: (newTime) => dispatch(updatePlaypoint(newTime)),
        receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
        fetchUser: (id) => dispatch(fetchUser(id)),
        startLoading: () => dispatch(startLoading()),
        stopLoading: () => dispatch(stopLoading()),
        receiveIntervalId: (intervalId) => dispatch(receiveIntervalId(intervalId)),
        clearIntervalId: () => dispatch(clearIntervalId()),

        //just for testing purposes
        fetchTracks: () => dispatch(fetchTracks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTrack);