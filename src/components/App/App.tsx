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
  const [sessionBesties, setSessionBesties] = useState<Char[]>([]);

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
    // const ids = besties.map(bestie => bestie.id)
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

    
      // sessionStorage.setItem('besties', JSON.stringify([...besties, newBestie]));
      // // @ts-expect-error
      // const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
      // console.log({storedBesties})
      // setBesties(storedBesties)
    
    //if bestie is not already in the array, add them and do the things
    // setBesties([...besties, newBestie])
    // sessionStorage.clear();
  
    
  }

  // useEffect(() => {
  //   sessionStorage.clear();
  //   sessionStorage.setItem('besties', JSON.stringify(besties));
  //   // @ts-expect-error
  //   const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
  //   console.log({storedBesties})
  //   setSessionBesties(storedBesties)

  // }, [besties])

  // useEffect(() => {
  //   sess
  // }, [])

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
