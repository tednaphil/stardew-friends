import './Besties.css';
import type { Char } from '../App/App';
import BestieCard from '../BestieCard/BestieCard';

interface Props {
    besties: Char[]
}

function Besties({besties}: Props) {
    const bestieCards = besties.map(bestie => {
        return (
            <p>{bestie.name}</p>
        )
    })
    const bestieCount = (besties: Char[]): string => {
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
        <h2>{bestieCount(besties)}</h2>
        {bestieCards}
        </>
    )

}

export default Besties