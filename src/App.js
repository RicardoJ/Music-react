import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import axios from 'axios';
function App() {

  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [information, addInformation] = useState({});

  const queryAPILyric =  async search => {
    const {artist , song} = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    const result = await axios(url);
    addLyric(result.data.lyrics);
  }

  return (
    <Fragment>
      <Form
        queryAPILyric={queryAPILyric}
      />
    </Fragment>
  );
}

export default App;
