import './Profile.css';
import { useParams } from 'react-router-dom';
import type { Char } from '../App/App';
import { useState, useEffect } from 'react';

interface Props {
    characters: Char[]
}





function Profile({characters}: Props) {
    // const charID = useParams().id
    const { id } = useParams<string>()
    //fetch individual character or find from app state?
    const chosenChar: Char | undefined = characters.find(char => char.id === id)
    const [character, setCharacter] = useState<Char | undefined>(chosenChar)

    // useEffect(() => {
    //     setCharacter(chosenChar)
    // }, [])

    // console.log(character)

    return (
        <>
            {/* @ts-expect-error */}
            <h2>{character.name}</h2>
        </>
    )

}

export default Profile