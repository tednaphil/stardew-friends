import './Profile.css';
import { useParams } from 'react-router-dom';
import type { Char } from '../App/App';
import { useState, useEffect } from 'react';

interface Props {
    characters: Char[]
    besties: Char[]
    addBestie: (newBestie: Char) => void
}

function Profile({characters, addBestie, besties}: Props) {
    const { id } = useParams<string>()
    //fetch individual character or find from app state?
    //may need to fetch character to avoid reload errors since fetch happens on app mount - does reloading count as an unmounting phase?
    const chosenChar: Char | undefined = characters.find(char => char.id === id)
    const [character, setCharacter] = useState<Char | undefined>(chosenChar)
    const [loading, setLoading] = useState<boolean>(character ? false : true)
    const hobbies = character?.hobbies.map(hobby => {
        return (
            <p>{hobby}</p>
        )
    })

    // useEffect(() => {
    //     setLoading(false)
    // }, [character])

    const handleClick = (/*e:any, */newBestie: Char) => {
        // e.preventDefault()
        addBestie(newBestie)
    }

    return (
        <>
            {/* {loading && <h2>Loading...</h2>} */}
            <img src={character?.avatar} alt={`${character?.name} avatar`} className='profile-avatar'/>
            <h2 className='profile-name'>{character?.name}</h2>
            <h3>Birthday</h3>
            <p className='birthday'>{character?.birthday}</p>
            <h3>Hobbies</h3>
            <section className='hobbies'>{hobbies}</section>
            {/* @ts-expect-error */}
            <button className='bestie-button' onClick={() => handleClick(character)}>Add Bestie</button>
        </>
    )

}

export default Profile