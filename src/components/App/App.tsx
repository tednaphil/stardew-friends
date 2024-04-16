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
  favGifts: string[]
}

export type Friend = {
  id: string
  name: string
  birthday: string
  hobbies: string[]
  avatar: string
  favGifts: string[]
  friendship: number
}

function App() {
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState<Char[]>([]);
  const [besties, setBesties] = useState<Friend[]>([]);
  //make besties global state?

  useEffect(() => {
    fetchCharacters();
    // @ts-expect-error
    const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
    if (!storedBesties) {
      setBesties([])
    } else {
      setBesties(storedBesties)
    }
  }, [])

  const fetchCharacters = async () => {
    try {
      const characters = await getCharacters()
      // setTimeout(() => {
      //   setLoading(false)
      //   setCharacters(characters)
      // }, 5000)
      //function to add frienship property to characters
      // const updatedCharacters = friendify(characters)
      setCharacters(characters);
      setLoading(false);
    } catch(error) {
        setError(`${error}`)
    }
  }

  const addBestie = (newBestie: Friend) => {
    if (besties.length) {
      const isBestie = besties.find(bestie => newBestie.id === bestie.id);
      if (!isBestie) {
        sessionStorage.setItem('besties', JSON.stringify([...besties, newBestie]));
        // @ts-expect-error
        const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
        setBesties(storedBesties)
      } else if(isBestie) {
        const name = isBestie.name
        alert(`${name} is already your friend!`)
        //refactor with a modal and useRef hook if notification still needed
      }
    } else {
      sessionStorage.setItem('besties', JSON.stringify([...besties, newBestie]));
        // @ts-expect-error
        const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
        setBesties(storedBesties)
    }
  }

  const removeBestie = (id: string) => {
    const newBesties = besties.filter(bestie => bestie.id !== id);
    sessionStorage.setItem('besties', JSON.stringify(newBesties));
    // @ts-expect-error
    const storedBesties= JSON.parse(sessionStorage.getItem('besties'));
    setBesties(storedBesties)
  }


  return (
    <div className="App">
      <Nav />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home characters={characters} error={error} loading={loading} />} />
          <Route path='/characters/:id' element={<Profile addBestie={addBestie} removeBestie={removeBestie} besties={besties}/>} />
          <Route path='/besties' element={<Besties besties={besties} setBesties={setBesties}/>} />
          <Route path='/*' element={<Error error={error}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
