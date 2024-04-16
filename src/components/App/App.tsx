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
  // const [sessionBesties, setSessionBesties] = useState<Char[]>([]);

  useEffect(() => {
    fetchCharacters();
    // @ts-expect-error
    const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
    console.log('storedBesties?', storedBesties)
    if (!storedBesties) {
      setBesties([])
    } else {
      setBesties(storedBesties)
    }
    // setSessionBesties(storedBesties)
  }, [])

  console.log('besties', besties)

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
    if (besties.length) {
      const isBestie = besties.find(bestie => newBestie.id === bestie.id);
      if (!isBestie) {
        sessionStorage.setItem('besties', JSON.stringify([...besties, newBestie]));
        // @ts-expect-error
        const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
        console.log({storedBesties})
        setBesties(storedBesties)
      } else if(isBestie) {
        const name = isBestie.name
        alert(`${name} is already your friend!`)
        //refactor to either have button removed/disabled or have diff alert system
      }
    } else {
      sessionStorage.setItem('besties', JSON.stringify([...besties, newBestie]));
        // @ts-expect-error
        const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
        console.log({storedBesties})
        setBesties(storedBesties)
    }
  }

  const removeBestie = (id: string) => {
    const newBesties = besties.filter(bestie => bestie.id !== id);
    sessionStorage.setItem('besties', JSON.stringify(newBesties));
    // @ts-expect-error
    const storedBesties= JSON.parse(sessionStorage.getItem('besties'));
    setBesties(storedBesties)
    console.log('remove function besties', besties)
  }

  // useEffect(() => {
  //   sessionStorage.clear();
  //   sessionStorage.setItem('besties', JSON.stringify(besties));
  //   // @ts-expect-error
  //   const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
  //   console.log({storedBesties})
  //   setSessionBesties(storedBesties)

  // }, [besties])


  return (
    <div className="App">
      <Nav />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home characters={characters} error={error} loading={loading} />} />
          <Route path='/characters/:id' element={<Profile characters={characters} addBestie={addBestie} removeBestie={removeBestie}besties={besties}/>} />
          <Route path='/besties' element={<Besties besties={besties}/>} />
          <Route path='/*' element={<Error error={error}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
