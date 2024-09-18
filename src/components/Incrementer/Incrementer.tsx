import '../Incrementer/Incrementer.css';
import { useState } from 'react';
import type { Friend } from '../App/App';
import { ChevronDown, ChevronUp } from 'react-feather';

interface Props {
    friendship: number
    id: string
    besties: Friend[]
    setBesties: (array: Friend[]) => void
}

function Incrementer({ friendship, id, besties, setBesties }: Props) {
    const [friendshipLevel, setFriendshipLevel] = useState(friendship)

    function updateBestie(id: string, direction: string) {
        let newLevel = 0
        if (direction === 'up') {
            newLevel = friendshipLevel + 1
        } else if (direction === 'down') {
            newLevel = friendshipLevel - 1
        }
        setFriendshipLevel(newLevel)

        let currentBesties = [...besties];
        currentBesties.forEach(bestie => {
            if (bestie.id === id) {
                bestie.friendship = newLevel
            }
        localStorage.clear();
        localStorage.setItem('besties', JSON.stringify(currentBesties));
        const storedBesties = localStorage.getItem('besties')
        if(storedBesties) {
            setBesties(JSON.parse(storedBesties))
        }
        })
    }

    function handleClick(id: string, direction: string) {
        updateBestie(id, direction)
    }

    return (
        <>
            <p className='friendship-label'>Friendship Level</p>
            <section className='incrementer'>
                <button id={`${id}-down`} value='down' aria-label='down button' onClick={() => handleClick(id, 'down')}><ChevronDown/></button>
                <p>{friendshipLevel}</p>
                <button id={`${id}-up`} value='up' aria-label='up button'onClick={() => handleClick(id, 'up')}><ChevronUp /></button>
            </section>
        </>
    )
}

export default Incrementer