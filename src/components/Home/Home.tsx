import './Home.css';
import type { Char } from '../App/App';
import Error from '../Error/Error';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import Character from '../Character/Character';
import Junimo from '../../images/Junimo.gif';


interface Props {
    characters: Char[]
    error: string
    loading: boolean
    filteredChars: Char[]
    // search: string
    // setSearch: (query: string) => void
}

function Home({ characters, filteredChars, error, loading }: Props) {

    // const cards = characters.map(element => {
    //     const {id, name, avatar} = element
    //     return (
    //         <Link to={`/characters/${id}`} key={id}>
    //             <section className='character-card'>
    //             <img src={avatar} alt={`${name} avatar`} className='char-avatar'/>
    //             <p>{name}</p>
    //             </section>
    //         </Link>
    //     )
    // })

    const cards = filteredChars.map(element => {
        const {id, name, avatar} = element
        return (
            <Link to={`/characters/${id}`} key={id}>
                <section className='character-card'>
                <img src={avatar} alt={`${name} avatar`} className='char-avatar'/>
                <p>{name}</p>
                </section>
            </Link>
        )
    })

    return (
        <>
            {loading && <article className='loading-screen'>
                <img src={Junimo} alt='Dancing green Junimo' className='loading-image'/>
                <h2 className='loading-message'>Loading...</h2>
            </article>}
            {error && <Error error={error}/>}
            <section className="character-cards">
                {cards}
            </section>
        </>
    )
}

export default Home