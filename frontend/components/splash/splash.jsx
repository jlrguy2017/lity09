import React from 'react';
import Modal from '../session_forms/modal';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-div">
        <div className="top-border"></div>
        <div className="splash-panel">
          <div className="splash-panel-wrapper">
            <div className="splash-panel-carousel">
              <figure className="panel-1">
                <img id="panel-img-1" src={window.charli_xcx}/>
                <h2 className="carousel-text">SoundShroud: the future of Dark-mode Audio Streaming</h2>
              </figure>
              <figure className="panel-2">
                <img id="panel-img-2" src={window.oneohtrix}/>
                <h2 className="carousel-text">What's next in music is first on SoundShroud</h2>
              </figure>
              <figure className="panel-3">
                <img id="panel-img-3" src={window.bjork} />
                <h2 className="carousel-text">Discover more with SoundShroud Go+</h2>
                <h2></h2>
              </figure>
              <figure className="panel-1">
                <img id="panel-img-1" src={window.charli_xcx} />
                <h2 className="carousel-text">SoundShroud: the future of Dark-mode Audio Streaming</h2>
              </figure>
              <figure className="panel-2">
                <img id="panel-img-2" src={window.oneohtrix} />
                <h2 className="carousel-text">What's next in music is first on SoundShroud</h2>
              </figure>
            </div>
          </div>
          <nav className="nav-bar">
            <figure className="logo">
              <img id="logo-img" src={window.logo} />
              <h1 id="site-title">SOUNDSHROUD</h1>
            </figure>
            <div className="splash-modal-btns">
              <Modal />
            </div>
          </nav>
        </div>
        <input id="search-bar" type="text"
          placeholder="Search for artists, bands, tracks, podcasts" />
          <p id="or">or</p>
          <button id="upload-btn">Upload for free</button>
        <h1 id="banner-text">Hear what's trending for free in the SoundShroud community</h1>
        <div id="trending-tracks">
          
        </div>
        <div id="splash-footer">
          <Modal />
          <h2 id="thank-you-text">Thanks for listening. Now join in.</h2>
          <h3 id="thank-you-subheader">Save tracks, follow artists, and build playlists. All for free.</h3>
          <p id="small-text">Already have an account?</p>
        </div>
      </div>
    )
  }
}

export default Splash;