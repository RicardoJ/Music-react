import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';
function App() {

  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [information, addInformation] = useState({});

  const queryAPILyric = async search => {
    const { artist, song } = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    const result = await axios(url);
    addArtist(artist);
    addLyric(result.data.lyrics);
  }
  const queryAPIInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
    const result = await axios(url);
    addInformation(result.data.artists[0]);
  }

  useEffect(
    () => {
      queryAPIInfo();
    }, [artist]
  )
  return (
    <Fragment>
      <Form
        queryAPILyric={queryAPILyric}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Song
              lyric={lyric}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
