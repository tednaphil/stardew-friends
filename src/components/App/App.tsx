import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Besties from '../Besties/Besties';
import Error from '../Error/Error';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacters } from '../../apiCalls';

export type Char = {
  id: string
  name: string
  birthday: string
  hobbies: string[]
  avatar: string
}

function App() {
  const [error, setError] = useState<any>('');
  const [characters, setCharacters] = useState<Char[]>([]);
  const [besties, setBesties] = useState<Char[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, [])

  const fetchCharacters = async () => {
    try {
      const characters = await getCharacters()
      setCharacters(characters)
    } catch(error) {
        setError(`${error}`)
    }
  }

  return (
    <div className="App">
      <Nav />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home characters={characters} error={error} />} />
          <Route path='/characters/:id' element={<Profile characters={characters}/>} />
          <Route path='/besties' element={<Besties besties={besties}/>} />
          <Route path='/*' element={<Error error={error}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
