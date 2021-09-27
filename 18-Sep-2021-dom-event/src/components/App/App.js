// import logo from './logo.svg';
import React, {useContext, useState, createContext} from 'react';
import FileNamer from '../FileNamer/FileNamer';


function App() {
  const [text, setText] = useState('');

  return(
    <FileNamer/>
  );
}

export default App;