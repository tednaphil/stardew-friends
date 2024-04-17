import './Profile.css';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import type { Char, Friend } from '../App/App';
import { useState, useEffect } from 'react';
import { getCharacter } from '../../apiCalls';
import Junimo from '../../images/Junimo.gif';
import { UserPlus, UserX } from 'react-feather';


interface Props {
    besties: Friend[]
    addBestie: (newBestie: Friend) => void
    removeBestie: (id: string) => void
    setSearch: (query: string) => void
}

function Profile({addBestie, removeBestie, besties, setSearch}: Props) {
    const { id } = useParams<string>()
    const [character, setCharacter] = useState<Char | null>(null)
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(character ? false : true)
    let isBestie = false;
    besties.forEach(bestie => {
        if (character) {
            if (bestie.id === character.id) {
                isBestie = true
            }
        }
    })

    useEffect(() => {
        // @ts-expect-error
        fetchCharacter(id)
        setSearch('')

    }, [])

    const fetchCharacter = async (id: string) => {
        try {
            const character = await getCharacter(id)
            setCharacter(character)
            setLoading(false)
        } catch(error) {
            setError(`${error}`)
        }
    }
   
    const hobbies = character?.hobbies.map((hobby, index) => {
        return (
            <p key={index}>{hobby}</p>
        )
    })

    const gifts = character?.favGifts.map((gift, index) => {
        return (
            <p key={index}>{gift}</p>
        )
    })

    useEffect(() => {
        setLoading(false)
    }, [character])

    const handleAddClick = (newBestie: Char) => {
        const friend = friendify(newBestie)
        addBestie(friend)
    }

    const handleRemoveClick = ({id}: Friend) => {
        removeBestie(id)
    }

    const friendify = (newBestie: Char): Friend => {
        return(
            {...newBestie, friendship: 0})
      }

    return (
        <>
            {loading && <article className='loading-screen'>
                <img src={Junimo} alt='Dancing green Junimo' className='loading-image'/>
                <h2 className='loading-message'>Loading...</h2>
            </article>}
            {error ? <Error error={error}/> : <article className='char-profile'>
            <div className="hero-wrapper">
                <img src={character?.avatar} alt={`${character?.name} avatar`} className='profile-avatar'/>
                <div className='name-banner'>
                    <h2 className='profile-name'>{character?.name}</h2>
                    {/* @ts-expect-error */}
                    {isBestie ? <button className='remove-button buttons' onClick={() => handleRemoveClick(character)}><UserX/></button> : <button className='bestie-button buttons' onClick={() => handleAddClick(character)}><UserPlus/></button>}
                </div>
            </div>
            {/* @ts-expect-error
            {isBestie ? <button className='remove-button buttons' onClick={() => handleRemoveClick(character)}><UserX/></button> : <button className='bestie-button buttons' onClick={() => handleAddClick(character)}><UserPlus/></button>} */}
            <h3>Birthday</h3>
            <p className='birthday'>{character?.birthday}</p>
            <h3>Hobbies</h3>
            <section className='hobbies'>{hobbies}</section>
            <h3>Loved Gifts</h3>
            <section className='gifts'>{gifts}</section>
            </article>}
        </>
    )
}

export default Profile