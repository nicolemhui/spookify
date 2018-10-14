import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util.js'
import SideNav from './side_nav';
import Browse from './browse';
import Library from './library';
import BrowseNav from './browse_nav'
import AlbumIndex from './album_index'
import ArtistIndex from './artist_index'
import SongIndex from './song_index'
import AlbumShow from './album_show'
import ArtistShow from './artist_show'
import PlaylistShow from './playlist_show'

class Main extends React.Component {

  render() {

    return(
      <div className="main">

        <SideNav/>

        <Switch>
          <ProtectedRoute path="/browse" component={Browse}></ProtectedRoute>
          <ProtectedRoute path="/library" component={Library}></ProtectedRoute>
          <ProtectedRoute path="/albums/:albumId" component={AlbumShow}></ProtectedRoute>
          <ProtectedRoute path="/artists/:artistId" component={ArtistShow}></ProtectedRoute>
          <ProtectedRoute path="/playlists/:playlistId" component={PlaylistShow}></ProtectedRoute>
        </Switch>


      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.id
});

export default connect(mapStateToProps)
                      (Main);


// <div className="temp-music-space"> music player here </div>
