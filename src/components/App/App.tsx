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
  const [search, setSearch] = useState<string>('');
  const [filteredChars, setFilteredChars] = useState<Char[]>([])
  //make besties global state?

  useEffect(() => {
    fetchCharacters();
    // @ts-expect-error
    const storedBesties= JSON.parse(localStorage.getItem('besties'))
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
      //   setFilteredChars(characters)
      // }, 5000)
      setCharacters(characters);
      setFilteredChars(characters)
      setLoading(false);
    } catch(error) {
        setError(`${error}`)
        setLoading(false);
    }
  }

  const addBestie = (newBestie: Friend) => {
    if (besties.length) {
      const isBestie = besties.find(bestie => newBestie.id === bestie.id);
      if (!isBestie) {
        localStorage.setItem('besties', JSON.stringify([...besties, newBestie]));
        // @ts-expect-error
        const storedBesties= JSON.parse(localStorage.getItem('besties'))
        setBesties(storedBesties)
      } else if(isBestie) {
        const name = isBestie.name
        alert(`${name} is already your friend!`)
        //refactor with a modal and useRef hook if notification still needed
      }
    } else {
      localStorage.setItem('besties', JSON.stringify([...besties, newBestie]));
        // @ts-expect-error
        const storedBesties= JSON.parse(localStorage.getItem('besties'))
        setBesties(storedBesties)
    }
  }

  const removeBestie = (id: string) => {
    const newBesties = besties.filter(bestie => bestie.id !== id);
    localStorage.setItem('besties', JSON.stringify(newBesties));
    // @ts-expect-error
    const storedBesties= JSON.parse(localStorage.getItem('besties'));
    setBesties(storedBesties)
  }

  useEffect(() => {
    filterChars(search)
  }, [search])

  const filterChars = (search: string) => {
    setFilteredChars(
      characters.filter(char =>
        char.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };


  return (
    <div className="App">
      <Nav search={search} setSearch={setSearch} besties={besties}/>
      <main className="main">
        <Routes>
          <Route path='/' element={<Home characters={characters} filteredChars={filteredChars} error={error} loading={loading} />} />
          <Route path='/characters/:id' element={<Profile addBestie={addBestie} removeBestie={removeBestie} besties={besties} setSearch={setSearch}/>} />
          <Route path='/besties' element={<Besties besties={besties} setBesties={setBesties}/>} />
          <Route path='/*' element={<Error error={error}/>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
