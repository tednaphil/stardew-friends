import '../Incrementer/Incrementer.css';
import { useState } from 'react';

interface Props {
    friendship: number
}

function Incrementer({friendship}: Props) {
    const [friendshipLevel, setFriendshipLevel] = useState(friendship)

    return (
        <section className='incrementer'>
            {/* on form submission, depending on the value of the button submitted, increment friendshipLevel up or down one */}
            <button id='up-button' onClick={() => setFriendshipLevel(friendshipLevel + 1)}>+1</button>
            <p>{friendshipLevel}</p>
            <button id='down-button' onClick={() => setFriendshipLevel(friendshipLevel - 1)}>-1</button>
        </section>
    )
}

export default Incrementer