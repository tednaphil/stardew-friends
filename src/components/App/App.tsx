import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Besties from '../Besties/Besties';
import Error from '../Error/Error';
import { Routes, Route } from 'react-router-dom';


function App() {
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
