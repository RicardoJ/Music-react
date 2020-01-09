import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';

function App() {

  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [information, addInformation] = useState({});

  return (
    <Fragment>
      <Form/>
    </Fragment>
  );
}

export default App;
