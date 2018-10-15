import React from 'react';
import { connect } from 'react-redux';
import { fetchOnePlaylist, followPlaylist, unfollowPlaylist } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class PlaylistShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = { followed: null }
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
  }

  componentDidMount() {
    this.props.fetchOnePlaylist(this.props.match.params.playlistId)
        .then( () => this.setInitialState() )
  }

  setInitialState() {
    this.setState( { followed: this.props.playlist.followed });
  }

  handleFollow() {
    this.setState({ followed: true })
    this.props.followPlaylist(this.props.playlist.id)
  }

  handleUnfollow() {
    this.setState({ followed: false })
    this.props.unfollowPlaylist(this.props.playlist.id)
  }


  render() {

    let { playlist } = this.props;
    if(!playlist ) {
      return null;
    }

    let songs;
    if (playlist.songs && Object.values(playlist.songs).length > 0) {
      songs = Object.values(playlist.songs).map(
        (song, idx) =>
        ( <SongIndexItem key={idx} song={song}></SongIndexItem> )
      )
    } else {
      songs = null
    }

    let followButton;
    if (!this.state.followed) {
      followButton = (<button onClick={this.handleFollow}>FOLLOW</button>)
    } else {
      followButton = (<button onClick={this.handleUnfollow}>UNFOLLOW</button>)
    }


    return(
      <div className="playlist-show-container">
        <div className="playlist-info">
          <div className="img-container">
            <img src={playlist.coverUrl}></img>
            <i className="far fa-play-circle"></i>
          </div>
          <h1>{playlist.name}</h1>
          <button>PLAY</button>
          {followButton}
          <h3>{songs ? Object.values(playlist.songs).length : 0} SONGS</h3>
        </div>

        <div className="playlist-songs">
          <ul className="song-index">
            {songs ? songs : <li></li>}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
  followPlaylist: (playlistId) => dispatch(followPlaylist(playlistId)),
  unfollowPlaylist: (playlistId) => dispatch(unfollowPlaylist(playlistId))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (PlaylistShow);