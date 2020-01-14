import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';
import Information from './components/Information';
import Error from './components/Error';

function App() {

  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [information, addInformation] = useState({});
  const [error, saveError] = useState(false);

  const queryAPILyric = async search => {
    const { artist, song } = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    try {
      const result = await axios(url);
      addArtist(artist);
      addLyric(result.data.lyrics);
      saveError(false);
    } catch (error) {
      console.log(error)
      saveError(true);
    }
  }
  const queryAPIInfo = async () => {
    if (artist) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const result = await axios(url);
      addInformation(result.data.artists[0]);
    }
  }
  useEffect(
    () => {
      queryAPIInfo();
    }
  )
  return (
    <Fragment>
      <Form
        queryAPILyric={queryAPILyric}
      />
      <div className="container mt-5">
        {error ? <Error message="NO HAY MATCH! - No se encuentra la canción" /> :
          <div className="row">
            <div className="col-md-6">
              <Information
                information={information}
              />
            </div>
            <div className="col-md-6">
              <Song
                lyric={lyric}
              />
            </div>
          </div>
        }
      </div>
    </Fragment>
  );
}

export default App;
