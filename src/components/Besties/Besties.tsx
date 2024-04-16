import './Besties.css';
import type { Char, Friend } from '../App/App';
import BestieCard from '../BestieCard/BestieCard';

interface Props {
    besties: Friend[]
}

function Besties({besties}: Props) {
    const bestieCards = besties.map(bestie => {
        return (
            <BestieCard 
                key={bestie.id}
                name={bestie.name}
                avatar={bestie.avatar}
                id={bestie.id}
            />
        )
    })
    const bestieCount = (besties: Friend[]): string => {
        let message = ''
        if (besties.length < 1) {
            message = `You don't have any besties :(`
        } else if (besties.length === 1) {
            message = `You have 1 bestie!`
        } else if (besties.length > 1) {
            message = `You have ${besties.length} besties!`
        }
        return message
    }

    return (
        <article className='besties'>
            <h2 className='bestie-count'>{bestieCount(besties)}</h2>
            {bestieCards}
        </article>
    )

}

export default Besties