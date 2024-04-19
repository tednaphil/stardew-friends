import './Home.css';
import type { Char } from '../App/App';
import Error from '../Error/Error';
import { Link} from 'react-router-dom';
import Junimo from '../../images/Junimo.gif';


interface Props {
    error: string
    loading: boolean
    filteredChars: Char[]
}

function Home({ filteredChars, error, loading }: Props) {
    const cards = filteredChars.map(element => {
        const {id, name, avatar} = element
        return (
            <Link to={`/characters/${id}`} key={id} className='character-card'>
                <section className='card-wrapper'>
                    <img src={avatar} alt={`${name} avatar`} className='char-avatar'/>
                    <p>{name}</p>
                </section>
            </Link>
        )
    })

    return (
        <>
            {loading && <article className='loading-screen'>
                <img src={Junimo} alt='Dancing green Junimo' className='loading-image'/>
                <h2 className='loading-message'>Loading...</h2>
            </article>}
            {error && <Error error={error}/>}
            <section className="character-cards">
                {cards}
            </section>
        </>
    )
}

export default Home