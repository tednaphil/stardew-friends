import './Besties.css';
import type { Friend } from '../App/App';
import BestieCard from '../BestieCard/BestieCard';

interface Props {
    besties: Friend[]
    setBesties: (array: Friend[]) => void
}

function Besties({besties, setBesties}: Props) {
    const bestieCards = besties.map(bestie => {
        return (
            <BestieCard 
                key={bestie.id}
                name={bestie.name}
                avatar={bestie.avatar}
                friendship={bestie.friendship}
                id={bestie.id}
                besties={besties}
                setBesties={setBesties}
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
        <>
            <h2 className='bestie-count'>{bestieCount(besties)}</h2>
            <article className='besties'>
                {bestieCards}
            </article>
        </>
    )
}

export default Besties