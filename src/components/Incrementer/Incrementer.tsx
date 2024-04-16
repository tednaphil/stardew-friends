import '../Incrementer/Incrementer.css';
import { useState } from 'react';

interface Props {
    friendship: number
}

function Incrementer({friendship}: Props) {
    const [friendshipLevel, setFriendshipLevel] = useState(friendship)

    return (
        <form className='incrementer'>
            {/* on form submission, depending on the value of the button submitted, increment friendshipLevel up or down one */}
            <button id='up-button'>+1</button>
            <p>{friendshipLevel}</p>
            <button id='down-button'>-1</button>
        </form>
    )
}

export default Incrementer