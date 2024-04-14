import './Home.css';
import type { Char } from '../App/App';
import Error from '../Error/Error';
import { Link, useParams } from 'react-router-dom';
import Character from '../Character/Character';

interface Props {
    characters: Char[]
    error: string
}

function Home({ characters, error }: Props) {

    const cards = characters.map(element => {
        const {id, name, avatar} = element
        return (
            <Link to={`/characters/${id}`}>
                <section className='character-card'>
                <img src={avatar} alt={`${name} avatar`} className='char-avatar'/>
                <p>{name}</p>
                </section>
            </Link>
            // <Character
            // id={element.id}
            // name={element.name}
            // avatar={element.avatar}
            // key={element.id}
            // />
        )
    })

    return (
        <>
        {error && <Error error={error}/>}
        <section className="character-cards">
            {cards}
        </section>
        </>
    )

}

export default Home