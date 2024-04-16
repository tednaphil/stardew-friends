import './Profile.css';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import type { Char } from '../App/App';
import { useState, useEffect } from 'react';
import { getCharacter } from '../../apiCalls';
import Junimo from '../../images/Junimo.gif';

interface Props {
    besties: Char[]
    addBestie: (newBestie: Char) => void
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
   
    const hobbies = character?.hobbies.map(hobby => {
        return (
            <p>{hobby}</p>
        )
    })

    useEffect(() => {
        setLoading(false)
    }, [character])

    const handleAddClick = (newBestie: Char) => {
        addBestie(newBestie)
    }

    const handleRemoveClick = ({id}: Char) => {
        removeBestie(id)
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
            {/* @ts-expect-error */}
            {isBestie ? <button className='remove-button' onClick={() => handleRemoveClick(character)}>Remove Bestie</button> : <button className='bestie-button' onClick={() => handleAddClick(character)}>Add Bestie</button>}
            </article>}
    
        </>
    )
}

export default Profile