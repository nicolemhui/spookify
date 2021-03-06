export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_ONE_ALBUM = 'RECEIVE_ONE_ALBUM';
export const RECEIVE_ONE_SONG = 'RECEIVE_ONE_SONG';
export const RECEIVE_ONE_ARTIST = 'RECEIVE_ONE_ARTIST';
export const RECEIVE_ONE_PLAYLIST = 'RECEIVE_ONE_PLAYLIST';
export const REMOVE_ONE_PLAYLIST = 'REMOVE_ONE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';

import * as MusicApiUtil from '../util/music_util'
import * as UserMusicApiUtil from '../util/saved_followed_util'

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveOneSong = (song) => ({
  type: RECEIVE_ONE_SONG,
  song
});

export const receiveAllArtists = (artists) => ({
  type: RECEIVE_ALL_ARTISTS,
  artists
});

export const receiveOneArtist = (payload) => ({
  type: RECEIVE_ONE_ARTIST,
  payload
});

export const receiveAllAlbums = (albums) => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveOneAlbum = (payload) => ({
  type: RECEIVE_ONE_ALBUM,
  payload
});

export const receiveOnePlaylist = (payload) => ({
  type: RECEIVE_ONE_PLAYLIST,
  payload
});

export const removeOnePlaylist = (playlist) => ({
  type: REMOVE_ONE_PLAYLIST,
  playlist
});

export const receiveAllPlaylists = (playlists) => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

export const receivePlaylistErrors = (errors) => ({
  type: RECEIVE_PLAYLIST_ERRORS,
  errors
})

// thunk actions


// songs

export const fetchAllSongs = () => (dispatch) => {
return (
  MusicApiUtil.fetchAllSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
)}

export const fetchSavedSongs = () => (dispatch) => {
return (
  UserMusicApiUtil.fetchSavedSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
)}

export const fetchOneSong = (songId) => (dispatch) => (
  MusicApiUtil.fetchOneSong(songId)
    .then(song => dispatch(receiveOneSong(song)))
)

export const fetchSearchedSongs = (searchTerm) => (dispatch) => {
  return (
  MusicApiUtil.searchSongs(searchTerm)
    .then(songs => dispatch(receiveAllSongs(songs)))
  )
}

export const saveSong = (id) => (dispatch) => (
  UserMusicApiUtil.saveSong(id)
    .then(song => dispatch(receiveOneSong(song)))
)

export const unsaveSong = (id) => (dispatch) => {
  return (
    UserMusicApiUtil.unsaveSong(id)
      .then(song => dispatch(receiveOneSong(song)))
  )
}

// artists

export const fetchAllArtists = () => (dispatch) => (
  MusicApiUtil.fetchAllArtists()
    .then(songs => dispatch(receiveAllArtists(songs)))
)

export const fetchFollowedArtists = () => (dispatch) => (
  UserMusicApiUtil.fetchFollowedArtists()
    .then(artists => dispatch(receiveAllArtists(artists)))
)

export const fetchOneArtist = (artistId) => (dispatch) => (
  MusicApiUtil.fetchOneArtist(artistId)
    .then(artist => dispatch(receiveOneArtist(artist)))
)

export const fetchSearchedArtists = (searchTerm) => (dispatch) => (
  MusicApiUtil.searchArtists(searchTerm)
    .then(artists => dispatch(receiveAllArtists(artists)))
)

export const followArtist = (id) => (dispatch) => {
  return (
    UserMusicApiUtil.followArtist(id)
    )
}

export const unfollowArtist = (id) => (dispatch) => {
  return (
    UserMusicApiUtil.unfollowArtist(id)
  )
}

// albums

export const fetchAllAlbums = () => (dispatch) => (
  MusicApiUtil.fetchAllAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
)

export const fetchSavedAlbums = () => (dispatch) => (
  UserMusicApiUtil.fetchSavedAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
)

export const fetchOneAlbum = (albumId) => (dispatch) => (
  MusicApiUtil.fetchOneAlbum(albumId)
    .then(album => dispatch(receiveOneAlbum(album)))
)

export const fetchSearchedAlbums = (searchTerm) => (dispatch) => (
  MusicApiUtil.searchAlbums(searchTerm)
    .then(albums => dispatch(receiveAllAlbums(albums)))
)

export const saveAlbum = (id) => (dispatch) => {
  return (
    UserMusicApiUtil.saveAlbum(id)
  )
}

export const unsaveAlbum = (id) => (dispatch) => {
  return (
    UserMusicApiUtil.unsaveAlbum(id)
  )
}

// playlists

export const fetchOnePlaylist = (playlistId) => (dispatch) => {
return (
  MusicApiUtil.fetchOnePlaylist(playlistId)
    .then(playlist => dispatch(receiveOnePlaylist(playlist)))
)}

export const fetchAllPlaylists = () => (dispatch) => (
  MusicApiUtil.fetchAllPlaylists()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
)

export const fetchFollowedPlaylists = () => (dispatch) => (
  UserMusicApiUtil.fetchFollowedPlaylists()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
)

export const fetchSearchedPlaylists = (searchTerm) => (dispatch) => (
  MusicApiUtil.searchPlaylists(searchTerm)
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
)

export const followPlaylist = (id) => (dispatch) => {
  return (
    UserMusicApiUtil.followPlaylist(id)
    )
}

export const unfollowPlaylist = (id) => (dispatch) => {
  return (
    UserMusicApiUtil.unfollowPlaylist(id)
  )
}

export const createPlaylist = (playlist) => (dispatch) => (
  MusicApiUtil.createPlaylist(playlist)
    .then( playlist => dispatch(receiveOnePlaylist(playlist)) )
)

export const deletePlaylist = (id) => (dispatch) => {
  return (
    MusicApiUtil.deletePlaylist(id)
      .then( playlist => dispatch(receiveAllPlaylists(playlist)) )
  )
}

export const addSongToPlaylist = (data) => (dispatch) => (
  MusicApiUtil.addSongToPlaylist(data)
    .then( null,
            errors => dispatch(receivePlaylistErrors(errors.responseJSON)) )
)

export const removeSongFromPlaylist = (id, data) => (dispatch) => (
  MusicApiUtil.removeSongFromPlaylist(id, data)
    .then( (playlist) => dispatch(receiveOnePlaylist(playlist)),
            errors => dispatch(receivePlaylistErrors(errors.responseJSON)) )
)
