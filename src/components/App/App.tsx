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


function App() {
  const [error, setError] = useState<any>('');
  const [characters, setCharacters] = useState<Character[]>([]);

  type Character = {
    id: string
    name: string
    birthday: string
    hobbies: string[]
    avatar: string
  }

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
          <Route path='/' element={<Home />} />
          <Route path='/characters/:id' element={<Profile />} />
          <Route path='/besties' element={<Besties />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
