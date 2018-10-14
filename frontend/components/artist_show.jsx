import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { fetchOneArtist } from './../actions/music_actions';
import SongIndexItem from './song_index_item';

class ArtistShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOneArtist(this.props.match.params.artistId);
  }

  render() {

    let { artist } = this.props;
    if(!artist || !artist.albums) {
      return null;
    }

    console.log(artist);

    return(
      <div className="artist-show-container">
          <div className="artist-info">
            <div className="header-container">
              <img src={artist.imageUrl}></img>
              <h1>{artist.name}</h1>
              <h3>325,462 monthly listeners</h3>
              <button>PLAY</button>
            </div>
          </div>

          <div className="fade">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="content-container">
            <h3>Albums</h3>
            <ul className="albums">
              {Object.values(artist.albums).map(
                (album, idx) =>
                (<li key={idx}>
                  <div className="img-container">
                    <img src={album.coverUrl}></img>
                    <i className="far fa-play-circle"></i>
                  </div>
                  <Link to={`/albums/${album.id}`}><h2>{album.title}</h2></Link>
                </li>)
              )}
            </ul>

            <h3>Top Songs</h3>
            <ul>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>

          </div>



      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchOneArtist: (artistId) => dispatch(fetchOneArtist(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)
                      (ArtistShow);


                      // <div className="artist-info">
                      //   <div className="header-container">
                      //     <img src={artist.imageUrl}></img>
                      //     <h1>{artist.name}</h1>
                      //   </div>
                      //
                      //   <button>PLAY</button>
                      // </div>
                      //
                      // <div className="artist-songs">
                      //
                      //   <ul className="album-index">
                      //     {Object.values(artist.albums).map(
                      //       (album, idx) =>
                      //       (<li key={idx}>
                      //         <div className="img-container">
                      //           <img src={album.coverUrl}></img>
                      //           <i className="far fa-play-circle"></i>
                      //         </div>
                      //         <Link to={`/albums/${album.id}`}><h2>{album.title}</h2></Link>
                      //         <h3>{album.artistName}</h3>
                      //       </li>)
                      //     )}
                      //   </ul>
                      //
                      // </div>
