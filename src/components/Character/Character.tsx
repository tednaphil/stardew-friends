import './Character.css';
import { Link } from 'react-router-dom';
// import type { Char } from '../App/App';

interface Props {
    id: string
    name: string
    avatar: string
}

function Character({id, name, avatar}: Props) {
    return (
        <section className='character-card'>
            <img src={avatar}/>
            <p>{name}</p>
        </section>
    )

}

export default Character