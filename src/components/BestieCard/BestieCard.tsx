import './BestieCard.css';
import Incrementer from '../Incrementer/Incrementer';

interface Props {
    id: string
    name: string
    avatar: string
    friendship: number
}

function BestieCard({ id, name, avatar, friendship }: Props) {
    //pass removeBestie function from App component
    return (
        <section className='bestie-cards'>
            <img src={avatar}/>
            <p>{name}</p>
            {/* <p>{`Friendship level: ${friendship}`}</p> */}
            <Incrementer friendship={friendship}/>

            {/* friendship level incrementer */}
            {/* remove bestie button */}
            {/* view profile button */}
        </section>
    )
}

export default BestieCard