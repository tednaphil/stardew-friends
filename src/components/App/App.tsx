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
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState<Char[]>([]);
  const [besties, setBesties] = useState<Char[]>([]);

  useEffect(() => {
    fetchCharacters();
  }, [])

  const fetchCharacters = async () => {
    try {
      const characters = await getCharacters()
      setCharacters(characters);
      setLoading(false);
    } catch(error) {
        setError(`${error}`)
    }
  }

  const addBestie = (newBestie: Char) => {
    //if bestie is not already in the array, add them
    setBesties([...besties, newBestie])
  }

  return (
    <div className="App">
      <Nav />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home characters={characters} error={error} loading={loading} />} />
          <Route path='/characters/:id' element={<Profile characters={characters} addBestie={addBestie} besties={besties}/>} />
          <Route path='/besties' element={<Besties besties={besties}/>} />
          <Route path='/*' element={<Error error={error}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
