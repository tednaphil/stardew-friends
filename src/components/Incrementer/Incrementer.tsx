import '../Incrementer/Incrementer.css';
import { useState } from 'react';
import type { Friend } from '../App/App';

interface Props {
    friendship: number
    id: string
    besties: Friend[]
    setBesties: (array: Friend[]) => void
}

function Incrementer({ friendship, id, besties, setBesties }: Props) {
    const [friendshipLevel, setFriendshipLevel] = useState(friendship)
    //add function to update friendship property of friend so friendship level persists
    function updateBestie(id: string, direction: string) {
        //set storage with current besties and bestie with updated friendship property value
        //get updated besties and setBesties
        if (direction === 'up') {
            setFriendshipLevel(friendshipLevel + 1)
        } else if (direction === 'down') {
            setFriendshipLevel(friendshipLevel - 1)
        }

        //get and store besties from local storage
        //clear storage
        //find and update friendship value of respective friend object
            //use for each and if the object matches, update friendship property with friendshipLevel
        //set storage with updated array
        //get newly stored besties
        //setBesties with newly stored besties

    
        // const bestie = besties.find(bestie => bestie.id === id)
        // // @ts-expect-error
        // bestie.friendship = friendshipLevel
        // sessionStorage.clear()
        // sessionStorage.setItem('besties', JSON.stringify([...besties, bestie]));
        // // @ts-expect-error
        // const storedBesties= JSON.parse(sessionStorage.getItem('besties'))
        // setBesties(storedBesties)
        // console.log({storedBesties})
    }

    function handleClick(id: string, e: any/*update to event Type*/) {
        const direction = e.target.id;
        updateBestie(id, direction)
    }

    return (
        <section className='incrementer'>
            <button id='up' value='up' onClick={(e) => handleClick(id, e)}>+1</button>
            <p>{friendshipLevel}</p>
            {/* how should I restrict this to a range? Should I make it a number input instead? */}
            <button id='down' value='down' onClick={(e) => handleClick(id, e)}>-1</button>
        </section>
    )
}

export default Incrementer