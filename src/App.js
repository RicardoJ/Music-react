import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';

function App() {

  const [artist, addArtist] = useState('');
  const [lyric, addLyric] = useState([]);
  const [information, addInformation] = useState({});

  const queryAPILyric = search =>{
        console.log(search)
  }

  return (
    <Fragment>
      <Form
      queryAPILyric ={queryAPILyric}
      />
    </Fragment>
  );
}

export default App;
