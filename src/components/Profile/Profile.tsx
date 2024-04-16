import './Profile.css';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import type { Char, Friend } from '../App/App';
import { useState, useEffect } from 'react';
import { getCharacter } from '../../apiCalls';
import Junimo from '../../images/Junimo.gif';


interface Props {
    besties: Friend[]
    addBestie: (newBestie: Friend) => void
    removeBestie: (id: string) => void
}

function Profile({addBestie, removeBestie, besties}: Props) {
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
        console.log('friendified character', friend)
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
            {loading && <>
                <img src={Junimo} alt='Dancing green Junimo' className='loading-image'/>
                <h2 className='loading-message'>Loading...</h2>
            </>}
            {error ? <Error error={error}/> : <article className='char-profile'>
            <img src={character?.avatar} alt={`${character?.name} avatar`} className='profile-avatar'/>
            <h2 className='profile-name'>{character?.name}</h2>
            <h3>Birthday</h3>
            <p className='birthday'>{character?.birthday}</p>
            <h3>Hobbies</h3>
            <section className='hobbies'>{hobbies}</section>
            <h3>Loved Gifts</h3>
            <section className='gifts'>{gifts}</section>
            {/* @ts-expect-error */}
            {isBestie ? <button className='remove-button' onClick={() => handleRemoveClick(character)}>Remove Bestie</button> : <button className='bestie-button' onClick={() => handleAddClick(character)}>Add Bestie</button>}
            </article>}
        </>
    )
}

export default Profile