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
        // console.log(currentBesties);
        sessionStorage.clear();
        sessionStorage.setItem('besties', JSON.stringify(currentBesties));
        // @ts-expect-error
        const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
        setBesties(storedBesties)
        })
    }

    function handleClick(id: string, e: any/*update to event Type*/, direction: string) {
        // const direction = e.target.id;
        updateBestie(id, direction)
    }

    return (
        <>
            <p className='friendship-label'>Friendship Level</p>
            <section className='incrementer'>
                <button id='up' value='up' onClick={(e) => handleClick(id, e, 'up')}><ChevronUp /></button>
                <p>{friendshipLevel}</p>
                {/* how should I restrict this to a range? Should I make it a number input instead? */}
                <button id='down' value='down' onClick={(e) => handleClick(id, e, 'down')}><ChevronDown/></button>
            </section>
        </>
    )
}

export default Incrementer