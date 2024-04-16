import './BestieCard.css';
import type { Friend } from '../App/App';
import Incrementer from '../Incrementer/Incrementer';

interface Props {
    id: string
    name: string
    avatar: string
    friendship: number
    besties: Friend[]
    setBesties: (array: Friend[]) => void
}

function BestieCard({ id, name, avatar, friendship, besties, setBesties }: Props) {
    //pass removeBestie function from App component
    return (
        <section className='bestie-cards'>
            <img src={avatar}/>
            <p>{name}</p>
            {/* <p>{`Friendship level: ${friendship}`}</p> */}
            <Incrementer friendship={friendship} id={id} besties={besties} setBesties={setBesties}/>

            {/* friendship level incrementer */}
            {/* remove bestie button */}
            {/* view profile button */}
        </section>
    )
}

export default BestieCard