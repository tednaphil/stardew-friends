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
}

function Home({ characters, error, loading }: Props) {

    const cards = characters.map(element => {
        const {id, name, avatar} = element
        return (
            <Link to={`/characters/${id}`}>
                <section className='character-card'>
                <img src={avatar} alt={`${name} avatar`} className='char-avatar'/>
                <p>{name}</p>
                </section>
            </Link>
            // <Character
            // id={element.id}
            // name={element.name}
            // avatar={element.avatar}
            // key={element.id}
            // />
        )
    })

    // console.log(characters.length)
    // why wasn't the characters.length! conditional working?

    return (
        <>
        {loading && <>
            <img src={Junimo} alt='Dancing green Junimo' className='loading-image'/>
            <h2>Loading...</h2>
            </>}
        {error && <Error error={error}/>}
        <section className="character-cards">
            {cards}
        </section>
        </>
    )

}

export default Home