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
    return (
        <>
        {bestieCards}
        </>
    )

}

export default Besties